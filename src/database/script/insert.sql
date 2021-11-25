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
insert into users (firstName, lastname, email, password, gender, access_id)
values ('admin', 'admin', 'admin@gmail.com','123', 'masculino', 2);
insert into users (firstName, lastname, email, password, gender, access_id)
values ('juan', 'perez', 'jperez@gmail.com','123', 'masculino', 1);