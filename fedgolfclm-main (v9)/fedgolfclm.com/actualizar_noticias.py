import xml.etree.ElementTree as ET
import json
import re
import html
from datetime import datetime
import sys

def parse_wordpress_xml(xml_file, output_json):
    print(f"Parsing {xml_file}...")
    
    try:
        # We need to handle namespaces
        namespaces = {
            'wp': 'http://wordpress.org/export/1.2/',
            'content': 'http://purl.org/rss/1.0/modules/content/',
            'excerpt': 'http://wordpress.org/export/1.2/excerpt/'
        }
        
        tree = ET.parse(xml_file)
        root = tree.getroot()
        channel = root.find('channel')
        
        noticias = []
        
        for item in channel.findall('item'):
            post_type = item.find('wp:post_type', namespaces)
            status = item.find('wp:status', namespaces)
            
            if post_type is not None and post_type.text == 'post' and status is not None and status.text == 'publish':
                post_id = item.find('wp:post_id', namespaces).text if item.find('wp:post_id', namespaces) is not None else ""
                title = item.find('title').text if item.find('title') is not None else ""
                
                # Date
                post_date_node = item.find('wp:post_date', namespaces)
                date_str = ""
                if post_date_node is not None and post_date_node.text:
                    try:
                        dt = datetime.strptime(post_date_node.text, "%Y-%m-%d %H:%M:%S")
                        meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
                        date_str = f"{dt.day} {meses[dt.month-1]}, {dt.year}"
                    except:
                        date_str = post_date_node.text.split(" ")[0]
                
                # Content
                content_node = item.find('content:encoded', namespaces)
                content = content_node.text if content_node is not None and content_node.text else ""
                
                # Excerpt
                excerpt_node = item.find('excerpt:encoded', namespaces)
                excerpt = excerpt_node.text if excerpt_node is not None and excerpt_node.text else ""
                
                if not excerpt and content:
                    # strip html tags for excerpt
                    clean_text = re.sub('<[^<]+>', '', content)
                    clean_text = html.unescape(clean_text)
                    clean_text = clean_text.replace('\n', ' ').strip()
                    excerpt = clean_text[:150] + "..." if len(clean_text) > 150 else clean_text
                
                # Image
                img_src = ""
                if content:
                    img_match = re.search(r'<img[^>]+src="([^">]+)"', content)
                    if img_match:
                        img_src = img_match.group(1)
                
                # Categories
                categories = []
                for cat in item.findall('category'):
                    if cat.get('domain') == 'category':
                        categories.append(cat.text)
                
                noticias.append({
                    "id": post_id,
                    "titulo": title,
                    "fecha": date_str,
                    "excerpt": excerpt,
                    "contenido_html": content,
                    "imagen": img_src,
                    "categorias": categories
                })
                
        # Sort by id descending (assuming higher id = newer)
        try:
            noticias.sort(key=lambda x: int(x["id"]) if x["id"].isdigit() else 0, reverse=True)
        except:
            pass
            
        print(f"Found {len(noticias)} news articles.")
        
        with open(output_json, 'w', encoding='utf-8') as f:
            json.dump(noticias, f, ensure_ascii=False, indent=2)
            
        print(f"Successfully saved to {output_json}")
        
    except Exception as e:
        print(f"Error parsing XML: {e}")
        sys.exit(1)

if __name__ == "__main__":
    parse_wordpress_xml('federacindegolfdecastilla-lamancha.WordPress.2026-05-18.xml', 'noticias_data.json')
