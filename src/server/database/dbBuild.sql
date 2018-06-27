DROP TABLE IF EXISTS users, todos, checklist_item, users_carts, providers, shop_items, carts_items, providers_shop_items, calendar_item CASCADE;

CREATE TABLE users (
	id SERIAL PRIMARY KEY NOT NULL,
	email VARCHAR NOT NULL UNIQUE,
	username VARCHAR NOT NULL,
	password VARCHAR NOT NULL,
	dob DATE NOT NULL
);

CREATE TABLE users_carts (
	id SERIAL PRIMARY KEY NOT NULL,
	user_id INTEGER NOT NULL REFERENCES users (id),
	user_on_cart_access VARCHAR NOT NULL
);

CREATE TABLE providers (
	id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR NOT NULL,
	title VARCHAR,
	description VARCHAR
);

CREATE TABLE shop_items (
  id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR NOT NULL,
	providers_name VARCHAR NOT NULL,
	item_size VARCHAR NOT NULL,
	price_value INTEGER NOT NULL,
	price_currency VARCHAR NOT NULL,
	location VARCHAR NOT NULL,
	description VARCHAR NOT NULL,
	category VARCHAR NOT NULL,
	image_url VARCHAR,
	rating REAL NOT NULL DEFAULT '0'
);

CREATE TABLE carts_items (
	id SERIAL PRIMARY KEY NOT NULL,
	cart_id INTEGER NOT NULL REFERENCES users_carts (id),
	shop_item_id INTEGER NOT NULL REFERENCES shop_items (id)
);

CREATE TABLE providers_shop_items (
	id SERIAL PRIMARY KEY NOT NULL,
	provider_id INTEGER NOT NULL REFERENCES providers (id),
	shop_item_id INTEGER NOT NULL REFERENCES shop_items (id)
);

CREATE TABLE todos (
	id SERIAL PRIMARY KEY NOT NULL,
	user_id INTEGER NOT NULL REFERENCES users (id)
);

CREATE TABLE checklist_item (
	id SERIAL PRIMARY KEY NOT NULL,
	value VARCHAR NOT NULL,
	checked bool NOT NULL DEFAULT 'false',
  todo_id INTEGER REFERENCES todos (id) NOT NULL
);

CREATE TABLE calendar_item (
	id SERIAL PRIMARY KEY NOT NULL,
	value VARCHAR NOT NULL,
	checked bool NOT NULL DEFAULT 'false',
	todos_id INTEGER REFERENCES todos (id) NOT NULL
);
