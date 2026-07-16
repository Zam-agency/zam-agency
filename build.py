#!/usr/bin/env python3
"""
Petit outil de mise a jour du footer partage.

Le site reste 100% HTML/CSS/JS statique : ce script n'est PAS necessaire
pour que le site fonctionne. Il sert uniquement d'aide a la maintenance :
edite partials/footer.html UNE FOIS, lance ce script, et le footer est
recopie tel quel dans les 6 pages FR. Aucune dependance JS au chargement
de la page -> rien ne change pour le SEO ou l'accessibilite.

Usage :
    python3 build.py
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
PAGES = [
    "index.html",
    "notre-metier.html",
    "talents-management.html",
    "influence-marketing.html",
    "nos-clients.html",
    "contact.html",
]
FOOTER_PARTIAL = ROOT / "partials" / "footer.html"
FOOTER_RE = re.compile(r'<footer class="site-footer">.*?</footer>', re.S)


def main():
    if not FOOTER_PARTIAL.exists():
        print("Introuvable :", FOOTER_PARTIAL)
        sys.exit(1)

    footer_html = FOOTER_PARTIAL.read_text(encoding="utf-8").strip()
    updated = 0

    for name in PAGES:
        path = ROOT / name
        if not path.exists():
            print("  (ignore, absent) ", name)
            continue
        content = path.read_text(encoding="utf-8")
        if not FOOTER_RE.search(content):
            print("  ATTENTION : pas de <footer class=\"site-footer\"> trouve dans", name)
            continue
        new_content = FOOTER_RE.sub(footer_html, content, count=1)
        if new_content != content:
            path.write_text(new_content, encoding="utf-8")
            print("  mis a jour :", name)
            updated += 1
        else:
            print("  deja a jour :", name)

    print(f"\n{updated} page(s) mise(s) a jour depuis partials/footer.html")


if __name__ == "__main__":
    main()
