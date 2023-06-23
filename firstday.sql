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

mysql> select * from summerintern;
+------+-----------+------------+------------+------------+------+------------+
| id   | name      | course1    | course2    | course3    | dep  | department |
+------+-----------+------------+------------+------------+------+------------+
|    1 | Anushya   | javascript | Express.js | NOde.js    |  104 | CSE        |
|    2 | Anu       | javascript | MongoDB    | Angular.js |  105 | ECE        |
|    3 | Arun      | java       | CSS        | HTML       |  106 | EEE        |
|    4 | Babu      | javascript | C++        | C          |  107 | MECH       |
|    5 | saravanan | Ruby       | C          | PHP        |  108 | CIVIL      |
|    6 | Sumitha   | R          | Angular.js | MySQL      |  109 | IT         |
|    7 | Swetha    | Python     | Javascript | Oracle     |  110 | AIDS       |
+------+-----------+------------+------------+------------+------+------------+
7 rows in set (0.01 sec)

mysql> create table marks (id int,totalmark int,avg int);

mysql> insert into summerintern values(1,300,100);

mysql> insert into marks values(1,300,100);

mysql> insert into marks values(2,200,75);

mysql> insert into marks values(3,190,70);

mysql> insert into marks values(4,150,50);

mysql> select * from marks;
mysql> select summerintern.name ,summerintern.course1,summerintern.course2,summerintern.course3,marks.totalmark,marks.avg from summerint
ern inner join marks on summerintern.id=marks.id;
+---------+------------+------------+------------+-----------+------+
| name    | course1    | course2    | course3    | totalmark | avg  |
+---------+------------+------------+------------+-----------+------+
| Anushya | javascript | Express.js | NOde.js    |       300 |  100 |
| Anu     | javascript | MongoDB    | Angular.js |       200 |   75 |
| Arun    | java       | CSS        | HTML       |       190 |   70 |
| Babu    | javascript | C++        | C          |       150 |   50 |
+---------+------------+------------+------------+-----------+------+
4 rows in set (0.04 sec)

mysql> select * from summerintern left join marks on summerintern.id=marks.id;
+------+-----------+------------+------------+------------+------+------------+------+-----------+------+
| id   | name      | course1    | course2    | course3    | dep  | department | id   | totalmark | avg  |
+------+-----------+------------+------------+------------+------+------------+------+-----------+------+
|    1 | Anushya   | javascript | Express.js | NOde.js    |  104 | CSE        |    1 |       300 |  100 |
|    2 | Anu       | javascript | MongoDB    | Angular.js |  105 | ECE        |    2 |       200 |   75 |
|    3 | Arun      | java       | CSS        | HTML       |  106 | EEE        |    3 |       190 |   70 |
|    4 | Babu      | javascript | C++        | C          |  107 | MECH       |    4 |       150 |   50 |
|    5 | saravanan | Ruby       | C          | PHP        |  108 | CIVIL      | NULL |      NULL | NULL |
|    6 | Sumitha   | R          | Angular.js | MySQL      |  109 | IT         | NULL |      NULL | NULL |
|    7 | Swetha    | Python     | Javascript | Oracle     |  110 | AIDS       | NULL |      NULL | NULL |
+------+-----------+------------+------------+------------+------+------------+------+-----------+------+
7 rows in set (0.00 sec)

mysql> select * from summerintern right join marks on summerintern.id=marks.id;
+------+---------+------------+------------+------------+------+------------+------+-----------+------+
| id   | name    | course1    | course2    | course3    | dep  | department | id   | totalmark | avg  |
+------+---------+------------+------------+------------+------+------------+------+-----------+------+
|    1 | Anushya | javascript | Express.js | NOde.js    |  104 | CSE        |    1 |       300 |  100 |
|    2 | Anu     | javascript | MongoDB    | Angular.js |  105 | ECE        |    2 |       200 |   75 |
|    3 | Arun    | java       | CSS        | HTML       |  106 | EEE        |    3 |       190 |   70 |
|    4 | Babu    | javascript | C++        | C          |  107 | MECH       |    4 |       150 |   50 |
+------+---------+------------+------------+------------+------+------------+------+-----------+------+
4 rows in set (0.00 sec)

mysql> select * from summerintern inner join marks on summerintern.id=marks.id;
+------+---------+------------+------------+------------+------+------------+------+-----------+------+
| id   | name    | course1    | course2    | course3    | dep  | department | id   | totalmark | avg  |
+------+---------+------------+------------+------------+------+------------+------+-----------+------+
|    1 | Anushya | javascript | Express.js | NOde.js    |  104 | CSE        |    1 |       300 |  100 |
|    2 | Anu     | javascript | MongoDB    | Angular.js |  105 | ECE        |    2 |       200 |   75 |
|    3 | Arun    | java       | CSS        | HTML       |  106 | EEE        |    3 |       190 |   70 |
|    4 | Babu    | javascript | C++        | C          |  107 | MECH       |    4 |       150 |   50 |
+------+---------+------------+------------+------------+------+------------+------+-----------+------+
4 rows in set (0.00 sec)

mysql> select * from summerintern inner join marks on summerintern.id != marks.id;

