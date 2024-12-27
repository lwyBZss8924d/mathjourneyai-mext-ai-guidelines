#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images

# Download MEXT logo
curl -o public/images/logo_mext.jpg https://www.mext.go.jp/b_menu/common/img/logo_mext.jpg
curl -o public/images/mext-logo.png https://www.mext.go.jp/b_menu/common/img/logo_mext.png

# Download PDF cover
curl -o public/images/pdf-cover.jpeg https://www.mext.go.jp/content/20241226-mxt_shuukyo02-000030823_001_1.jpg

# Download example images
curl -o public/images/examples-used-educational-settings.png https://www.mext.go.jp/content/20241226-mxt_shuukyo02-000030823_002.png

# Make script executable
chmod +x "$0" 