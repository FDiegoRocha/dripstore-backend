create database dripstore;
use dripstore;
create table Products (
	id mediumint primary key auto_increment,
	name varchar(50),
    price decimal(2)
)
