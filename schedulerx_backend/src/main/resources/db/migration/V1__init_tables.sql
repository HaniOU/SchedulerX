create table appointment(
    id serial primary key ,
    date timestamp,
    activity varchar(255),
    partner varchar(255)
);
create table note(
    id serial primary key ,
    date timestamp,
    text varchar(255)
);