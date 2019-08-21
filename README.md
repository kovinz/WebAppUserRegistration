# WebAppUserRegistration

На выполнение задачи с бэкендом потратил в районе 1 часа
На выполнение задачи с фронтендом потратил в районе 10 часов

Спринг изучал раннее в течение месяца
Ангуляр изучал в течение выполнения задания

Сложность возникла с cross-field validation полей password и confirmPassword.

Инструкция по запуску:

В MySQL создать БД emergn_users, далее запустить команду:
create table user (
user_id bigint auto_increment,
login varchar(50),
name varchar(50),
email varchar(50),
password varchar(50),
CONSTRAINT PK_user_user_id PRIMARY KEY (user_id)
)

Также можно запустить эту команду для первичного заполнения таблицы данными:
INSERT INTO user(login, name, email, password)
VALUES('b', 'Roma', 'b@gmail.com', 'qwe'),
('a', 'Nick', 'a@a.a', 'a')

Далее запустить проект в папке 'backend' в IntellijIDEA,
А также запустить проект в папке frontend/angularclient в IntellijIDEA, либо через команду 'ng serve --open'.
