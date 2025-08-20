-- Insert example products for each category
INSERT INTO public.products (name, description, price, original_price, image_url, category, is_new, sizes) VALUES 
-- Men's Fashion Products
('Classic Denim Jacket', 'Premium denim jacket with a timeless design perfect for any casual occasion', 89.99, 119.99, 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80', 'Men''s Fashion', true, ARRAY['S', 'M', 'L', 'XL']),
('Cotton Crew Neck T-Shirt', 'Soft cotton blend t-shirt in classic fit with comfortable crew neckline', 24.99, 34.99, 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80', 'Men''s Fashion', false, ARRAY['S', 'M', 'L', 'XL', 'XXL']),
('Slim Fit Chinos', 'Modern slim-fit chinos made from premium cotton twill fabric', 59.99, null, 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80', 'Men''s Fashion', false, ARRAY['28', '30', '32', '34', '36', '38']),
('Wool Blend Sweater', 'Cozy wool blend pullover sweater perfect for cooler weather', 79.99, 99.99, 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?auto=format&fit=crop&w=800&q=80', 'Men''s Fashion', true, ARRAY['S', 'M', 'L', 'XL']),
('Casual Button-Down Shirt', 'Versatile cotton button-down shirt suitable for work or weekend', 49.99, null, 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80', 'Men''s Fashion', false, ARRAY['S', 'M', 'L', 'XL']),

-- Women's Fashion Products  
('Floral Midi Dress', 'Elegant floral print midi dress with flowing silhouette perfect for any occasion', 79.99, 109.99, 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80', 'Women''s Fashion', true, ARRAY['XS', 'S', 'M', 'L', 'XL']),
('Silk Blouse', 'Luxurious silk blouse with delicate draping and sophisticated style', 69.99, 89.99, 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', 'Women''s Fashion', false, ARRAY['XS', 'S', 'M', 'L', 'XL']),
('High-Waisted Jeans', 'Classic high-waisted denim jeans with vintage-inspired fit', 64.99, null, 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80', 'Women''s Fashion', false, ARRAY['24', '26', '28', '30', '32']),
('Cashmere Cardigan', 'Soft cashmere blend cardigan with button closure and cozy feel', 99.99, 129.99, 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', 'Women''s Fashion', true, ARRAY['XS', 'S', 'M', 'L', 'XL']),
('Pleated Skirt', 'Elegant pleated midi skirt in premium fabric with flattering silhouette', 54.99, null, 'https://images.unsplash.com/photo-1583496661160-fb5886a13d27?auto=format&fit=crop&w=800&q=80', 'Women''s Fashion', false, ARRAY['XS', 'S', 'M', 'L', 'XL']),

-- Watches
('Classic Chronograph Watch', 'Sophisticated stainless steel chronograph with precision movement', 299.99, 399.99, 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=800&q=80', 'Watches', true, null),
('Minimalist Rose Gold Watch', 'Elegant minimalist design with rose gold case and leather strap', 179.99, 229.99, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', 'Watches', false, null),
('Sport Digital Watch', 'Durable digital sports watch with water resistance and multiple functions', 89.99, null, 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80', 'Watches', false, null),
('Vintage Leather Watch', 'Classic vintage-style watch with genuine leather band and analog display', 149.99, 189.99, 'https://images.unsplash.com/photo-1548181511-6e8be0e9678d?auto=format&fit=crop&w=800&q=80', 'Watches', true, null),
('Smart Fitness Watch', 'Advanced smartwatch with fitness tracking and heart rate monitor', 249.99, 299.99, 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80', 'Watches', true, null);