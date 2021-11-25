create table categories(
id int primary key auto_increment not null,
title varchar(50) not null);

create table products(
id int primary key auto_increment not null,
title varchar(50) not null,
description varchar(300) not null,
price int not null,
image varchar(100),
category_id int not null,
foreign key (category_id) references categories (id));

create table accesses(
id int primary KEY auto_increment not null,
title varchar(50) not null);

create table users(
id int primary KEY auto_increment not null,
firstName varchar(50) not null,
lastname varchar(50) not null,
email varchar(50) not null,
password varchar(50) not null,
gender varchar(50) not null,
access_id int not null,
foreign key(access_id) references accesses (id));

create table cart_product(
id int primary key primary KEY auto_increment not null,
product_id int not null,
foreign key (product_id) references products (id));

alter table users 
add image int not null;

create table carts (
id int primary KEY auto_increment not null,
product int not null,
quantity int not null,
user_id int not null,
foreign key (product) references cart_product (product_id),

foreign key (user_id) references users (id));
alter table cart_product 
add cart_id int not null,
add foreign key (cart_id) references carts (id);