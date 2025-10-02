#!/bin/bash

echo "🌲 Downloading essential images for Adriftwood Co..."
echo ""

# Create directories
mkdir -p public/images/categories
mkdir -p public/images/products
mkdir -p public/images/lookbook
mkdir -p public/images/projects

# Download hero images
echo "📸 Downloading hero images..."
curl -L "https://images.unsplash.com/photo-1511497584788-876760111969?w=2400&q=80" -o public/images/hero-forest.jpg
curl -L "https://images.unsplash.com/photo-1581367439964-e63dc5e648f5?w=2400&q=80" -o public/images/about-workshop.jpg
curl -L "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2400&q=80" -o public/images/collections-hero.jpg

# Download category images
echo "📸 Downloading category images..."
curl -L "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=1067&q=80&fit=crop" -o public/images/categories/chairs.jpg
curl -L "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=1067&q=80&fit=crop" -o public/images/categories/tables.jpg
curl -L "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=1067&q=80&fit=crop" -o public/images/categories/lamps.jpg
curl -L "https://images.unsplash.com/photo-1595428773960-9aa1f47324a4?w=800&h=1067&q=80&fit=crop" -o public/images/categories/shelves.jpg

# Download product images (minimal set)
echo "📸 Downloading product images (8 products x 2 images)..."

# Nordic Oak Chair
curl -L "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80" -o public/images/products/nordic-oak-chair-1.jpg
curl -L "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80" -o public/images/products/nordic-oak-chair-2.jpg

# Live Edge Table
curl -L "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=80" -o public/images/products/live-edge-table-1.jpg
curl -L "https://images.unsplash.com/photo-1617103996002-eb86f33e3b88?w=1200&q=80" -o public/images/products/live-edge-table-2.jpg

# Ceramic Lamp
curl -L "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80" -o public/images/products/ceramic-lamp-1.jpg
curl -L "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80" -o public/images/products/ceramic-lamp-2.jpg

# Wall Shelf
curl -L "https://images.unsplash.com/photo-1595428773960-9aa1f47324a4?w=1200&q=80" -o public/images/products/wall-shelf-1.jpg
curl -L "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" -o public/images/products/wall-shelf-2.jpg

# Walnut Side Table
curl -L "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=1200&q=80" -o public/images/products/walnut-side-table-1.jpg
curl -L "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=1200&q=80" -o public/images/products/walnut-side-table-2.jpg

# Pendant Light
curl -L "https://images.unsplash.com/photo-1543365067-fa127bcb2303?w=1200&q=80" -o public/images/products/pendant-light-1.jpg
curl -L "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80" -o public/images/products/pendant-light-2.jpg

# Windsor Chair
curl -L "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=1200&q=80" -o public/images/products/windsor-chair-1.jpg
curl -L "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80" -o public/images/products/windsor-chair-2.jpg

# Floating Shelf
curl -L "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" -o public/images/products/floating-shelf-1.jpg
curl -L "https://images.unsplash.com/photo-1595428773960-9aa1f47324a4?w=1200&q=80" -o public/images/products/floating-shelf-2.jpg

# Download lookbook images
echo "📸 Downloading lookbook images..."
curl -L "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1200&q=80&fit=crop" -o public/images/lookbook/nordic-minimal.jpg
curl -L "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1200&q=80&fit=crop" -o public/images/lookbook/natural-light.jpg
curl -L "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&h=1200&q=80&fit=crop" -o public/images/lookbook/forest-retreat.jpg
curl -L "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&h=1200&q=80&fit=crop" -o public/images/lookbook/coastal-living.jpg
curl -L "https://images.unsplash.com/photo-1581367439964-e63dc5e648f5?w=1920&h=1200&q=80&fit=crop" -o public/images/lookbook/workshop.jpg
curl -L "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&h=1200&q=80&fit=crop" -o public/images/lookbook/classics.jpg

# Download project images
echo "📸 Downloading project images..."
curl -L "https://images.unsplash.com/photo-1581367439964-e63dc5e648f5?w=1200&h=900&q=80&fit=crop" -o public/images/projects/workshop-1.jpg
curl -L "https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=900&q=80&fit=crop" -o public/images/projects/forest-1.jpg
curl -L "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=900&q=80&fit=crop" -o public/images/projects/install-1.jpg
curl -L "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=900&q=80&fit=crop" -o public/images/projects/exhibition-1.jpg

echo ""
echo "✅ All images downloaded successfully!"
echo ""
echo "🚀 Next steps:"
echo "   1. Run: npm run dev"
echo "   2. Open: http://localhost:3000"
echo "   3. Watch the animations! 🎬"
echo ""
echo "📝 Note: These are placeholder images from Unsplash."
echo "   Replace with your professional product photography before launch."
echo ""
