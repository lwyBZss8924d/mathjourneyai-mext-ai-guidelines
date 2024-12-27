#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images

# Set User-Agent and other necessary HTTP headers
USER_AGENT="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

# Download images
curl -A "$USER_AGENT" \
     -H "Accept: image/jpeg, image/png, image/*" \
     -H "Referer: https://www.mext.go.jp/" \
     -L \
     -o public/images/logo_mext.jpg \
     "https://www.mext.go.jp/b_menu/common/img/logo_mext.jpg"

curl -A "$USER_AGENT" \
     -H "Accept: image/jpeg, image/png, image/*" \
     -H "Referer: https://www.mext.go.jp/" \
     -L \
     -o public/images/mext-logo.png \
     "https://www.mext.go.jp/b_menu/common/img/logo_mext.png"

curl -A "$USER_AGENT" \
     -H "Accept: image/jpeg, image/png, image/*" \
     -H "Referer: https://www.mext.go.jp/" \
     -L \
     -o public/images/pdf-cover.jpeg \
     "https://www.mext.go.jp/content/20241226-mxt_shuukyo02-000030823_001_1.jpg"

curl -A "$USER_AGENT" \
     -H "Accept: image/jpeg, image/png, image/*" \
     -H "Referer: https://www.mext.go.jp/" \
     -L \
     -o public/images/examples-used-educational-settings.png \
     "https://www.mext.go.jp/content/20241226-mxt_shuukyo02-000030823_002.png"

# Make script executable
chmod +x "$0" 