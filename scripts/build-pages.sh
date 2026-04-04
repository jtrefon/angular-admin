#!/usr/bin/env bash

set -euo pipefail

repo_name="${PAGES_REPO_NAME:-angular-admin}"
pages_base_url="${PAGES_BASE_URL:-/${repo_name}/}"
site_url="${PAGES_SITE_URL:-https://jtrefon.github.io}"
demo_base_url="${pages_base_url}demo/"

rm -rf dist/angular-admin
rm -rf docs/site/static/demo
rm -rf docs/site/build docs/site/.docusaurus

npm run build -- --output-mode static --base-href "${demo_base_url}"

mkdir -p docs/site/static/demo
cp -R dist/angular-admin/browser/. docs/site/static/demo/

DOCUSAURUS_BASE_URL="${pages_base_url}" DOCUSAURUS_URL="${site_url}" npm --prefix docs/site run build
