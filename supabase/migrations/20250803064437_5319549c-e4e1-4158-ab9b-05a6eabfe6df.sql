-- Update product images to use unique, relevant images

-- Men's Fashion Products
UPDATE products SET image_url = '/src/assets/cotton-crew-tshirt.jpg' 
WHERE name = 'Cotton Crew Neck T-Shirt';

UPDATE products SET image_url = '/src/assets/wool-pullover-sweater.jpg' 
WHERE name = 'Wool Blend Sweater';

UPDATE products SET image_url = '/src/assets/white-dress-shirt.jpg' 
WHERE name = 'Premium Dress Shirt';

UPDATE products SET image_url = '/src/assets/casual-blue-shirt.jpg' 
WHERE name = 'Casual Button-Down Shirt';

UPDATE products SET image_url = '/src/assets/olive-bomber-jacket.jpg' 
WHERE name = 'Lightweight Bomber Jacket';

UPDATE products SET image_url = '/src/assets/navy-casual-jacket.jpg' 
WHERE name = 'Casual Navy Jacket';

UPDATE products SET image_url = '/src/assets/khaki-chinos.jpg' 
WHERE name = 'Slim Fit Chinos';

UPDATE products SET image_url = '/src/assets/black-training-shorts.jpg' 
WHERE name = 'Performance Training Shorts';

UPDATE products SET image_url = '/src/assets/mens-tshirt.jpg' 
WHERE name = 'Classic Cotton T-Shirt';

-- Watch Products
UPDATE products SET image_url = '/src/assets/steel-chronograph-watch.jpg' 
WHERE name IN ('Chronograph Sport Watch', 'Classic Chronograph Watch');

UPDATE products SET image_url = '/src/assets/sport-digital-watch.jpg' 
WHERE name = 'Sport Digital Watch';

UPDATE products SET image_url = '/src/assets/elegant-womens-dress-watch.jpg' 
WHERE name IN ('Elegant Dress Watch', 'Minimalist Leather Watch');

UPDATE products SET image_url = '/src/assets/rose-gold-minimalist-watch.jpg' 
WHERE name = 'Minimalist Rose Gold Watch';

UPDATE products SET image_url = '/src/assets/black-smartwatch.jpg' 
WHERE name IN ('Smart Fitness Tracker', 'Smart Fitness Watch');

-- Women's Fashion Products
UPDATE products SET image_url = '/src/assets/black-evening-dress.jpg' 
WHERE name = 'Elegant Black Dress';

UPDATE products SET image_url = '/src/assets/floral-summer-dress.jpg' 
WHERE name = 'Summer Floral Dress';

UPDATE products SET image_url = '/src/assets/cream-silk-blouse.jpg' 
WHERE name = 'Silk Blouse';

UPDATE products SET image_url = '/src/assets/charcoal-pencil-skirt.jpg' 
WHERE name = 'High-waisted Pencil Skirt';

UPDATE products SET image_url = '/src/assets/brown-leather-handbag.jpg' 
WHERE name IN ('Leather Handbag', 'Structured Handbag');

UPDATE products SET image_url = '/src/assets/beige-trench-coat.jpg' 
WHERE name = 'Classic Trench Coat';

UPDATE products SET image_url = '/src/assets/black-crossbody-bag.jpg' 
WHERE name = 'Designer Crossbody Bag';