-- Insert example products for Men's Fashion
INSERT INTO public.products (name, description, price, category, image_url, is_new, sizes) VALUES
('Classic Cotton T-Shirt', 'A comfortable and durable 100% cotton t-shirt, perfect for everyday wear.', 25.00, 'Men''s Fashion', 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400', true, ARRAY['S', 'M', 'L', 'XL']),
('Slim Fit Denim Jeans', 'Stylish slim fit jeans made with premium denim, offering a modern look.', 60.00, 'Men''s Fashion', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400', false, ARRAY['30', '32', '34', '36', '38']),
('Lightweight Bomber Jacket', 'A versatile bomber jacket, ideal for layering during transitional weather.', 95.00, 'Men''s Fashion', 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400', true, ARRAY['S', 'M', 'L', 'XL']),
('Performance Training Shorts', 'Breathable shorts designed for athletic performance, keeping you cool and dry.', 40.00, 'Men''s Fashion', 'https://images.unsplash.com/photo-1506629905607-d9c35a7e9591?w=400', false, ARRAY['S', 'M', 'L', 'XL']),
('Casual Button-Down Shirt', 'A versatile button-down shirt that works for both casual and semi-formal occasions.', 50.00, 'Men''s Fashion', 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400', false, ARRAY['S', 'M', 'L', 'XL']);

-- Insert example products for Women's Fashion
INSERT INTO public.products (name, description, price, category, image_url, is_new, sizes) VALUES
('Elegant Maxi Dress', 'A flowing maxi dress perfect for special occasions, crafted from soft, breathable fabric.', 120.00, 'Women''s Fashion', 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400', true, ARRAY['XS', 'S', 'M', 'L', 'XL']),
('Casual V-Neck Top', 'A soft and comfortable v-neck top, a staple for any casual wardrobe.', 30.00, 'Women''s Fashion', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400', false, ARRAY['XS', 'S', 'M', 'L', 'XL']),
('High-Waisted Skirt', 'A chic high-waisted skirt that pairs well with blouses and tops.', 55.00, 'Women''s Fashion', 'https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=400', true, ARRAY['XS', 'S', 'M', 'L', 'XL']),
('Activewear Leggings', 'Comfortable and supportive leggings for your workouts or daily activities.', 45.00, 'Women''s Fashion', 'https://images.unsplash.com/photo-1506629905607-d9c35a7e9591?w=400', false, ARRAY['XS', 'S', 'M', 'L', 'XL']),
('Silk Blouse', 'An elegant silk blouse perfect for professional settings and evening wear.', 85.00, 'Women''s Fashion', 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400', true, ARRAY['XS', 'S', 'M', 'L', 'XL']);

-- Insert example products for Watches
INSERT INTO public.products (name, description, price, category, image_url, is_new) VALUES
('Chronograph Sport Watch', 'A robust sport watch with chronograph functions, water-resistant and durable.', 150.00, 'Watches', 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400', true),
('Elegant Dress Watch', 'A classic dress watch with a leather strap, suitable for formal occasions.', 200.00, 'Watches', 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400', false),
('Smart Fitness Tracker', 'A modern smartwatch with fitness tracking capabilities and a sleek design.', 180.00, 'Watches', 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400', true),
('Minimalist Leather Watch', 'A minimalist watch with a clean dial and a comfortable leather band.', 130.00, 'Watches', 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400', false),
('Luxury Gold Watch', 'An exquisite gold-plated watch that adds sophistication to any outfit.', 350.00, 'Watches', 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400', true);