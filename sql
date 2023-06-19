mysql> create table summerintern(id int,name varchar(10),course1 varchar(10),course2 varchar(10),course3 varchar(10),dep int);

mysql> insert into summerintern values(1,"Anushya","javascript","Express.js","NOde.js",104);

mysql> insert into summerintern values(2,"Anu","javascript","MongoDB","Angular.js",105);

mysql> insert into summerintern values(3,"Arun","java","CSS","HTML",106);

mysql> insert into summerintern values(4,"Babu","javascript","C++","C",107);

mysql> insert into summerintern values(5,"saravanan","Ruby","C","PHP",108);

mysql> insert into summerintern values(6,"Sumitha","R","Angular.js","MySQL",109);

mysql> insert into summerintern values(7,"Swetha","Python","Javascript","Oracle",110);

mysql> select * from summerintern;

mysql> alter table summerintern add (department varchar(10));

mysql> update summerintern set department="CSE" where dep=104;

mysql> update summerintern set department="ECE" where dep=105;

mysql> update summerintern set department="EEE" where dep=106;

mysql> update summerintern set department="MECH" where dep=107;

mysql> update summerintern set department="CIVIL" where dep=108;

mysql> update summerintern set department="IT" where dep=109;

mysql> update summerintern set department="AIDS" where dep=110;

mysql> select * from summerintern;

mysql> select * from summerintern order by dep DESC;

mysql> select sum(id) from summerintern;

mysql> select avg(dep) from summerintern;

mysql> select count(dep) from summerintern;

mysql> select max(dep) from summerintern;

mysql> select min(dep) from summerintern;
