#!/usr/bin/env python3
"""
LLM-style web crawler for ajaymiryala.com
Fetches pages, extracts text content, metadata, links, contact info, and structured data
"""

import requests
import json
import re
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
from typing import Dict, List, Any, Set
import time

# Configuration
BASE_URL = "https://ajaymiryala.com"
TIMEOUT = 10
SUBPATHS = [
    "/",
    "/about",
    "/contact",
    "/resume",
    "/cv",
    "/portfolio",
    "/projects",
    "/blog",
    "/experience",
    "/skills",
    "/work",
]

# Session with headers to mimic a browser/crawler
session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
})

def fetch_page(url: str) -> tuple[str, int, Dict]:
    """Fetch a page and return HTML, status code, and response headers"""
    try:
        resp = session.get(url, timeout=TIMEOUT, allow_redirects=True)
        return resp.text, resp.status_code, dict(resp.headers)
    except Exception as e:
        return f"Error: {str(e)}", 0, {}

def extract_text(html: str) -> str:
    """Extract clean readable text from HTML"""
    soup = BeautifulSoup(html, 'html.parser')
    # Remove script and style elements
    for script in soup(["script", "style"]):
        script.decompose()
    # Get text and clean up whitespace
    text = soup.get_text(separator='\n')
    lines = [line.strip() for line in text.split('\n')]
    return '\n'.join([line for line in lines if line])

def extract_metadata(html: str) -> Dict[str, str]:
    """Extract metadata from HTML"""
    soup = BeautifulSoup(html, 'html.parser')
    metadata = {}
    
    # Title
    title_tag = soup.find('title')
    if title_tag:
        metadata['title'] = title_tag.get_text()
    
    # Meta description
    desc_tag = soup.find('meta', attrs={'name': 'description'})
    if desc_tag:
        metadata['description'] = desc_tag.get('content', '')
    
    # OG tags
    for og_prop in ['og:title', 'og:description', 'og:image', 'og:url', 'og:type']:
        og_tag = soup.find('meta', attrs={'property': og_prop})
        if og_tag:
            metadata[og_prop] = og_tag.get('content', '')
    
    # Twitter/X tags
    for tw_prop in ['twitter:title', 'twitter:description', 'twitter:image']:
        tw_tag = soup.find('meta', attrs={'name': tw_prop})
        if tw_tag:
            metadata[tw_prop] = tw_tag.get('content', '')
    
    # Canonical
    canonical = soup.find('link', attrs={'rel': 'canonical'})
    if canonical:
        metadata['canonical'] = canonical.get('href', '')
    
    # Language
    html_tag = soup.find('html')
    if html_tag:
        metadata['lang'] = html_tag.get('lang', '')
    
    return metadata

def extract_links(html: str, base_url: str) -> Dict[str, List[str]]:
    """Extract and categorize links from HTML"""
    soup = BeautifulSoup(html, 'html.parser')
    links_dict = {
        'internal': [],
        'external': [],
        'mailto': [],
        'tel': [],
        'other': []
    }
    
    for a_tag in soup.find_all('a', href=True):
        href = a_tag.get('href', '').strip()
        if not href:
            continue
        
        if href.startswith('mailto:'):
            links_dict['mailto'].append(href)
        elif href.startswith('tel:'):
            links_dict['tel'].append(href)
        elif href.startswith('http'):
            if BASE_URL in href:
                links_dict['internal'].append(href)
            else:
                links_dict['external'].append(href)
        elif href.startswith('/') or href.startswith('?'):
            links_dict['internal'].append(urljoin(base_url, href))
        else:
            links_dict['other'].append(href)
    
    # Remove duplicates and sort
    for key in links_dict:
        links_dict[key] = sorted(list(set(links_dict[key])))
    
    return links_dict

def extract_contact_info(text: str) -> Dict[str, List[str]]:
    """Extract email addresses, phone numbers, social profiles from text"""
    contact = {
        'emails': [],
        'phones': [],
        'social': {},
    }
    
    # Email regex (basic)
    email_pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
    contact['emails'] = list(set(re.findall(email_pattern, text)))
    
    # Phone regex (basic international formats)
    phone_pattern = r'(\+?1?[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}'
    phone_matches = re.findall(phone_pattern, text)
    contact['phones'] = list(set([m[0] + m[1] + m[2] for m in phone_matches if m]))
    
    # Social profiles
    social_patterns = {
        'linkedin': r'linkedin\.com/in/([a-zA-Z0-9\-]+)',
        'github': r'github\.com/([a-zA-Z0-9\-]+)',
        'twitter': r'twitter\.com/([a-zA-Z0-9\-_]+)',
        'instagram': r'instagram\.com/([a-zA-Z0-9\-_.]+)',
        'youtube': r'youtube\.com/@?([a-zA-Z0-9\-_]+)',
        'medium': r'medium\.com/@?([a-zA-Z0-9\-_.]+)',
    }
    
    for platform, pattern in social_patterns.items():
        matches = re.findall(pattern, text)
        if matches:
            contact['social'][platform] = list(set(matches))
    
    return contact

def extract_json_ld(html: str) -> List[Dict]:
    """Extract JSON-LD structured data"""
    soup = BeautifulSoup(html, 'html.parser')
    json_ld_list = []
    
    for script in soup.find_all('script', attrs={'type': 'application/ld+json'}):
        try:
            data = json.loads(script.string)
            json_ld_list.append(data)
        except:
            pass
    
    return json_ld_list

def crawl_site() -> Dict[str, Any]:
    """Crawl the site and collect all information"""
    crawl_results = {
        'timestamp': time.strftime('%Y-%m-%d %H:%M:%S'),
        'base_url': BASE_URL,
        'pages': {},
        'all_links': {
            'internal': set(),
            'external': set(),
            'mailto': set(),
            'tel': set(),
        },
        'all_contact': {
            'emails': set(),
            'phones': set(),
            'social': {},
        },
        'all_text': '',
    }
    
    for subpath in SUBPATHS:
        url = urljoin(BASE_URL, subpath)
        print(f"Crawling: {url}")
        
        html, status, headers = fetch_page(url)
        
        if status == 0:
            print(f"  ✗ Error fetching page")
            continue
        
        if status != 200:
            print(f"  ⚠ Status {status}")
            continue
        
        print(f"  ✓ Status {status}, Length: {len(html)} chars")
        
        # Extract data
        text = extract_text(html)
        metadata = extract_metadata(html)
        links = extract_links(html, url)
        contact = extract_contact_info(text)
        json_ld = extract_json_ld(html)
        
        page_data = {
            'url': url,
            'status': status,
            'content_length': len(html),
            'text_preview': text[:1000] if len(text) > 1000 else text,
            'metadata': metadata,
            'links': links,
            'contact': contact,
            'json_ld': json_ld,
        }
        
        crawl_results['pages'][subpath] = page_data
        
        # Aggregate data
        for link_type, link_list in links.items():
            if link_type in crawl_results['all_links']:
                crawl_results['all_links'][link_type].update(link_list)
        
        for email in contact['emails']:
            crawl_results['all_contact']['emails'].add(email)
        
        for phone in contact['phones']:
            crawl_results['all_contact']['phones'].add(phone)
        
        for platform, handles in contact['social'].items():
            if platform not in crawl_results['all_contact']['social']:
                crawl_results['all_contact']['social'][platform] = set()
            crawl_results['all_contact']['social'][platform].update(handles)
        
        crawl_results['all_text'] += '\n\n--- Page: ' + url + ' ---\n\n' + text + '\n'
        
        time.sleep(0.5)  # Be respectful: small delay between requests
    
    # Convert sets to lists for JSON serialization
    crawl_results['all_links'] = {k: sorted(list(v)) for k, v in crawl_results['all_links'].items()}
    crawl_results['all_contact']['emails'] = sorted(list(crawl_results['all_contact']['emails']))
    crawl_results['all_contact']['phones'] = sorted(list(crawl_results['all_contact']['phones']))
    crawl_results['all_contact']['social'] = {
        k: sorted(list(v)) for k, v in crawl_results['all_contact']['social'].items()
    }
    
    return crawl_results

def save_results(results: Dict[str, Any]):
    """Save results to JSON files"""
    # Save full JSON
    with open('crawl_results.json', 'w') as f:
        json.dump(results, f, indent=2)
    print("\n✓ Full results saved to: crawl_results.json")
    
    # Save summary
    summary = {
        'timestamp': results['timestamp'],
        'base_url': results['base_url'],
        'pages_crawled': len([p for p in results['pages'].values() if p['status'] == 200]),
        'all_links': results['all_links'],
        'all_contact': results['all_contact'],
    }
    with open('crawl_summary.json', 'w') as f:
        json.dump(summary, f, indent=2)
    print("✓ Summary saved to: crawl_summary.json")
    
    # Save full text
    with open('crawl_text.txt', 'w') as f:
        f.write(results['all_text'])
    print("✓ Full text saved to: crawl_text.txt")

def main():
    print("=" * 60)
    print("LLM-style Web Crawler for ajaymiryala.com")
    print("=" * 60)
    print()
    
    results = crawl_site()
    
    print("\n" + "=" * 60)
    print("CRAWL COMPLETE")
    print("=" * 60)
    print(f"Pages crawled: {len([p for p in results['pages'].values() if p['status'] == 200])}/{len(SUBPATHS)}")
    print(f"Unique internal links: {len(results['all_links']['internal'])}")
    print(f"Unique external links: {len(results['all_links']['external'])}")
    print(f"Emails found: {len(results['all_contact']['emails'])}")
    print(f"Phones found: {len(results['all_contact']['phones'])}")
    print(f"Social profiles found: {len(results['all_contact']['social'])}")
    print()
    
    save_results(results)
    
    print("\n" + "=" * 60)
    print("EXTRACTED INFORMATION SUMMARY")
    print("=" * 60)
    print("\n[CONTACT INFO]")
    if results['all_contact']['emails']:
        print(f"Emails: {results['all_contact']['emails']}")
    else:
        print("Emails: (none found)")
    
    if results['all_contact']['phones']:
        print(f"Phones: {results['all_contact']['phones']}")
    else:
        print("Phones: (none found)")
    
    if results['all_contact']['social']:
        print("\nSocial Profiles:")
        for platform, handles in results['all_contact']['social'].items():
            print(f"  {platform}: {handles}")
    else:
        print("\nSocial Profiles: (none found)")
    
    print("\n[EXTERNAL LINKS (Sample - first 10)]")
    ext_links = results['all_links']['external'][:10]
    for link in ext_links:
        print(f"  {link}")
    
    print("\n[PAGES FOUND]")
    for subpath, page_data in results['pages'].items():
        status = "✓" if page_data['status'] == 200 else "✗"
        print(f"  {status} {subpath:20} - Status {page_data['status']}")
    
    print("\n" + "=" * 60)
    print("Files saved: crawl_results.json, crawl_summary.json, crawl_text.txt")
    print("=" * 60)

if __name__ == '__main__':
    main()
