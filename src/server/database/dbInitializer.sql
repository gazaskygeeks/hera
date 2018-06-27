INSERT INTO shop_items (name, image_url, price_value, price_currency, location,providers_name, description,item_size, category, rating)
  VALUES
  (
    'A-line', 'http://img2.ailsabridal.com/product/80157/9afe95a8-5489-4a2c-982f-81f7da9f588b-550-768.jpg',399, 'USD', 'Gaza', 'Ajml tala center', 'most populer dress it is suitable for all bodies and take the alphapet A shape', 'XL', 'dresses', 2.5
  ),
  (
    'Ballgown', 'http://www.fshoppers.com/wp-content/uploads/2016/08/Glamorous-White-Round-Neck-Solid-Floor-Length-Wedding-Dress-For-Women.jpg',1400, 'USD', 'Gaza', 'Safeer AlHob center', 'princess dress suitable with taller brides', 'L', 'dresses', 4
  ),
  (
    'trumpet', 'http://www.allurebridals.com/assets/1550/7_c491-h-ad2.jpg',4500, 'USD', 'Gaza', 'AlDahdouh center', '
It takes the shape of the body from the top and then tightens the tightness and then gradually expands downwards and is ideal for hiding body imperfections', 'L', 'dresses', 3
  ),
  (
    'sheath', 'http://www.allurebridals.com/assets/1550/7_C501F.jpg',4700, 'USD', 'Gaza', 'Lavayte Center', '
Fits the high-end bride', 'XL', 'dresses', 3
  ),
  (
    'Empire dress', 'http://www.allurebridals.com/assets/1550/7_C489TF.jpg',399, 'USD', 'Gaza', 'Ajml tala center', '
Dress tight down the chest rotation and drop down after chest wide down', 'XL', 'dresses', 4
  ),
  (
    'A-line', 'http://www.allurebridals.com/assets/1550/3154F.jpg', 800, 'USD', 'Gaza', 'AlAshi Center', 'most populer dress it is suitable for all bodies and take the alphapet A shape', 'XL', 'dresses', 3
  ),
  (
    'Ballgown', 'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/16386877_1375769982498520_3095082902521109894_n.jpg',1000, 'USD', 'Gaza', 'Rozalenda Center', 'princess dress suitable with taller brides', 'L', 'dresses', 4
  ),
  (
    'Empire dresst', 'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/23659507_1126877590780331_3939526216280339064_n.jpg',399, 'USD', 'Gaza', 'White Dream Center', 'Dress tight down the chest rotation and drop down after chest wide down', 'L', 'dresses', 3
  ),
  (
    'sheath', 'https://cdn.shopify.com/s/files/1/0563/0457/products/blush-hayley-paige-bridal-spring-2018-style-1807-nessy_7_800x.jpg?v=1512516772',4000, 'USD', 'Gaza', 'AlGammal center', 'Fits the high-end bride', 'XL', 'dresses', 4
  ),
  (
    'Empire dress', 'http://www.fshoppers.com/wp-content/uploads/2016/08/Glamorous-White-Round-Neck-Solid-Floor-Length-Wedding-Dress-For-Women.jpg',5000, 'USD', 'Gaza', 'zaghroota.fashion', '
Dress tight down the chest rotation and drop down after chest wide down', 'XL', 'dresses', 4
  );

  INSERT INTO users (email, username, password, dob) VALUES ('smartname@fakemail.co', 'smartest ever', 'password123', '1993-01-13');
  INSERT INTO users_carts (user_id, user_on_cart_access) VALUES (1, 'EDIT');
  INSERT INTO carts_items (cart_id, shop_item_id) VALUES (1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6);
  INSERT INTO todos (user_id) VALUES (1);
  INSERT INTO checklist_item (value, checked, todo_id) VALUES
  ('Get the dresses from ABC on TURESDAY at 4:15pm', false, 1),
  ('Get the dresses from ABC on TURESDAY at 4:15pm', false, 1),
  ('Get the dresses from ABC on TURESDAY at 4:15pm', false, 1),
  ('Get the dresses from ABC on TURESDAY at 4:15pm', false, 1),
  ('Get the dresses from ABC on TURESDAY at 4:15pm', false, 1);
