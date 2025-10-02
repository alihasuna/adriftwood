# Quick Start - Placeholder Images

To see the site working **right now** with animations, use these free placeholder images from Unsplash:

## Hero Images (Download and Save)

1. **Home Hero** → Save as `/public/images/hero-forest.jpg`
   - https://images.unsplash.com/photo-1511497584788-876760111969?w=2400&h=1600&fit=crop
   - Pacific Northwest forest scene

2. **About Hero** → Save as `/public/images/about-workshop.jpg`
   - https://images.unsplash.com/photo-1581367439964-e63dc5e648f5?w=2400&h=1600&fit=crop
   - Woodworking workshop

3. **Collections Hero** → Save as `/public/images/collections-hero.jpg`
   - https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2400&h=1600&fit=crop
   - Interior design scene

## Category Images

Create `/public/images/categories/` folder and save:

1. **chairs.jpg**
   - https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=1067&fit=crop

2. **tables.jpg**
   - https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=1067&fit=crop

3. **lamps.jpg**
   - https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=1067&fit=crop

4. **shelves.jpg**
   - https://images.unsplash.com/photo-1595428773960-9aa1f47324a4?w=800&h=1067&fit=crop

## Product Images

Create `/public/images/products/` folder and save:

For **nordic-oak-chair**:
- nordic-oak-chair-1.jpg: https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&h=1200&fit=crop
- nordic-oak-chair-2.jpg: https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&h=1200&fit=crop

For **live-edge-table**:
- live-edge-table-1.jpg: https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&h=1200&fit=crop
- live-edge-table-2.jpg: https://images.unsplash.com/photo-1617103996002-eb86f33e3b88?w=1200&h=1200&fit=crop

For **ceramic-lamp**:
- ceramic-lamp-1.jpg: https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&h=1200&fit=crop
- ceramic-lamp-2.jpg: https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&h=1200&fit=crop

For **wall-shelf**:
- wall-shelf-1.jpg: https://images.unsplash.com/photo-1595428773960-9aa1f47324a4?w=1200&h=1200&fit=crop
- wall-shelf-2.jpg: https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=1200&fit=crop

For **walnut-side-table**:
- walnut-side-table-1.jpg: https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=1200&h=1200&fit=crop
- walnut-side-table-2.jpg: https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=1200&h=1200&fit=crop

For **pendant-light**:
- pendant-light-1.jpg: https://images.unsplash.com/photo-1543365067-fa127bcb2303?w=1200&h=1200&fit=crop
- pendant-light-2.jpg: https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&h=1200&fit=crop

For **windsor-chair**:
- windsor-chair-1.jpg: https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=1200&h=1200&fit=crop
- windsor-chair-2.jpg: https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&h=1200&fit=crop

For **floating-shelf**:
- floating-shelf-1.jpg: https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=1200&fit=crop
- floating-shelf-2.jpg: https://images.unsplash.com/photo-1595428773960-9aa1f47324a4?w=1200&h=1200&fit=crop

## Lookbook Images

Create `/public/images/lookbook/` folder and save:

1. **nordic-minimal.jpg**
   - https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1200&fit=crop

2. **natural-light.jpg**
   - https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1200&fit=crop

3. **forest-retreat.jpg**
   - https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&h=1200&fit=crop

4. **coastal-living.jpg**
   - https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&h=1200&fit=crop

5. **workshop.jpg**
   - https://images.unsplash.com/photo-1581367439964-e63dc5e648f5?w=1920&h=1200&fit=crop

6. **classics.jpg**
   - https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&h=1200&fit=crop

## Project Images (About Page)

Create `/public/images/projects/` folder and save:

1. **workshop-1.jpg**
   - https://images.unsplash.com/photo-1581367439964-e63dc5e648f5?w=1200&h=900&fit=crop

2. **forest-1.jpg**
   - https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=900&fit=crop

3. **install-1.jpg**
   - https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=900&fit=crop

4. **exhibition-1.jpg**
   - https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=900&fit=crop

## Automated Download Script (Optional)

Create a file `download-images.sh` and run `bash download-images.sh`:

```bash
#!/bin/bash

# Create directories
mkdir -p public/images/categories
mkdir -p public/images/products
mkdir -p public/images/lookbook
mkdir -p public/images/projects

# Download using curl (Mac/Linux)
curl -L "https://images.unsplash.com/photo-1511497584788-876760111969?w=2400&h=1600&fit=crop" -o public/images/hero-forest.jpg
curl -L "https://images.unsplash.com/photo-1581367439964-e63dc5e648f5?w=2400&h=1600&fit=crop" -o public/images/about-workshop.jpg
curl -L "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2400&h=1600&fit=crop" -o public/images/collections-hero.jpg

# Categories
curl -L "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=1067&fit=crop" -o public/images/categories/chairs.jpg
curl -L "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=1067&fit=crop" -o public/images/categories/tables.jpg
curl -L "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=1067&fit=crop" -o public/images/categories/lamps.jpg
curl -L "https://images.unsplash.com/photo-1595428773960-9aa1f47324a4?w=800&h=1067&fit=crop" -o public/images/categories/shelves.jpg

echo "Basic images downloaded! Add product images as needed."
```

---

**After downloading these images, restart your dev server and you'll see all the animations working!**

```bash
npm run dev
```
