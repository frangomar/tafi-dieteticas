-- CREACION DE BASE DE DATOS
create schema tafi;

-- CREACION DE TABLAS
-- CREACION DE TABLA CATEGORIAS
create table categories(
id int primary key auto_increment not null,
title varchar(50) not null
);

-- CREACION DE TABLA PRODUCTOS
create table products(
id int primary key auto_increment not null,
title varchar(50) not null,
description varchar(300) not null,
price int not null,
image varchar(100),
category_id int not null,
foreign key (category_id) references categories (id)
);

-- CREACION DE TABLA ACCESOS
create table accesses(
id int primary KEY auto_increment not null,
title varchar(50) not null
);

-- CREACION DE TABLA USUARIOS
create table users(
id int primary KEY auto_increment not null,
firstName varchar(50) not null,
lastname varchar(50) not null,
email varchar(50) not null,
password varchar(50) not null,
gender varchar(50) not null,
access_id int not null,
image varchar(50) not null,
foreign key(access_id) references accesses (id)
);

-- CREACION DE TABLA ORDENES
create table orders (
id int primary KEY auto_increment not null,
importe_total integer not null,
user_id integer not null,
foreign key (user_id) references users (id)
);

-- CREACION DE TABLA CARROS
create table carts (
id int primary KEY auto_increment not null,
user_id int not null,
quantity int not null,
subtotal int not null,
product_id int not null,
order_id int not null,
foreign key (product_id) references products (id),
foreign key (order_id) references orders (id),
foreign key (user_id) references users (id)
);

-- CARGA DE DATA EN TABLAS CORRESPONDIENTES
INSERT INTO categories (title)
VALUES ('vegano');
insert into categories (title)
values ('Frutos Secos');
insert into products (title, description, price, category_id)
values ('Tratenfu','Leche de almendras', 230, 1);
insert into products (title, description, price, category_id)
values ('Cocoon','Leche de almendras', 270, 1);
insert into products (title, description, price, category_id)
values ('Vrink','Leche de almendras', 257, 1);
insert into products (title, description, price, category_id)
values ('Biba','Leche de almendras', 315, 1);
insert into products (title, description, price, category_id)
values ('Silk','Leche de almendras', 360, 1);
insert into products (title, description, price, category_id)
values ('Soyana','tofu', 230, 1);
insert into products (title, description, price, category_id)
values ('Soyarroz','Tofu', 230, 1);
insert into products (title, description, price, category_id)
values ('Barrita Nuez','Barra de nuez ', 110, 2);
insert into products (title, description, price, category_id)
values ('Barrita Chia','Barra de chia', 140, 2);
insert into products (title, description, price, category_id)
values ('Barrita Almendras','Barra de almendras', 150, 2);
insert into products (title, description, price, category_id)
values ('Barrita Frutilla','Barra de frutilla', 100, 2);
insert into products (title, description, price, category_id)
values ('Barrita Surtidos','barra de frutos secos y semillas', 130, 2);
insert into accesses (title)
values ('admin');
insert into accesses (title)
values ('user');
insert into users (firstName, lastname, email, password, gender, access_id, image)
values ('admin', 'admin', 'admin@gmail.com','123', 'masculino', 2, 'admin.jpg');
insert into users (firstName, lastname, email, password, gender, access_id, image)
values ('juan', 'perez', 'jperez@gmail.com','123', 'masculino', 1, 'null');
update products
set image = 'lecheTratenfu.png'
where id = 1 ;
update products
set image = 'lecheCocoon.png'
where id = 2 ;
update products
set image = 'lecheVrink.png'
where id = 3;
update products
set image = 'lecheBiba.png'
where id = 4 ;
update products
set image = 'lecheSilk.png'
where id = 5 ;
update products
set image = 'tofu-soyana.png'
where id = 6 ;
update products
set image = 'tofu-soyarroz.png'
where id = 7 ;
update products
set image = 'bocadito-nuez.png'
where id = 8 ;
update products
set image = 'bocadito-chia.png'
where id = 9;
update products
set image = 'bocadito-almendras.png'
where id = 10;
update products
set image = 'barra-frutilla.png'
where id = 11;
update products
set image = 'mix-orann.png'
where id = 12;
insert into products (title, description, price, image, category_id)
values ('Le-fit','Mantequilla de mani',130,'mantequilla-mani.png', 1);
insert into products (title, description, price, image, category_id)
values ('Bebida de Soja','Leche de Soja',130,'leche-soja.png', 1);
insert into products (title, description, price, image, category_id)
values ('Mayonesa Mi Soja','Mayonesa de soja',130,'mayonesa-soja.png', 1);
insert into products (title, description, price, image, category_id)
values ('Chiapaz','galletas de chia',130,'galletas-chiapaz.png', 2);
insert into products (title, description, price, image, category_id)
values ('Tanlatam','galletas de cacao, mani y cafe',130,'galletas-tanlatam.png', 2);
insert into products (title, description, price, image, category_id)
values ('Linocco','galletas de lino',130,'galletas-linocco.png', 2);
insert into products (title, description, price, image, category_id)
values ('Medallon lentejas','medallones de lenteja',130,'medallon-lenteja.png', 2);
insert into products (title, description, price, image, category_id)
values ('Medallon menta','medallones de menta',130,'medallon-menta.png', 2);
insert into products (title, description, price, image, category_id)
values ('Medallon quinoa','medallones de quinoa',130,'medallon-quinoa.png', 2);
insert into products (title, description, price, image, category_id)
values ('Mix Energetico','medallones oran',130,'mix-orann.png', 2);
update products
set image = 'bocadito-nuez.png'
where id = 9 ;
update users
set image = 'juan.png'
where id = 2 ;