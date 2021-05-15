const postgres = require('./connection');

const CreateDatabase = async () => {

    await postgres.any(
        `CREATE TABLE if not exists users (
            users_id integer PRIMARY KEY NOT NULL,
            users_password text NOT NULL,
            users_email varchar(100) NOT NULL
        );
                
        CREATE TABLE if not exists sourseNews (
            sourseNews_id integer PRIMARY KEY,
            users_id integer REFERENCES users (users_id) ON DELETE CASCADE
        ); 
        
        CREATE TABLE if not exists rss (
            rss_id integer PRIMARY KEY NOT NULL,
            sourseNews_id integer REFERENCES  sourseNews (sourseNews_id) ON DELETE CASCADE,
            rss_link text NOT NULL
        );
        
        CREATE TABLE if not exists news (
            news_id integer PRIMARY KEY,
            sourseNews_id integer REFERENCES sourseNews (sourseNews_id) ON DELETE CASCADE,
            news_title varchar(150) NOT NULL,
            news_img text NOT NULL,
            news_link text NOT NULL,
            news_date varchar(100) NOT NULL,
            hidden boolean default false
        ); 
        
        CREATE TABLE if not exists keyWords(
            keyWords_id integer PRIMARY KEY NOT NULL,
            keyWords_word varchar(100) NOT NULL,
            sourseNews_id integer REFERENCES sourseNews (sourseNews_id) ON DELETE CASCADE
        );
        
        CREATE TABLE if not exists rssList (
            rss_id integer PRIMARY KEY NOT NULL,
            rss_link text NOT NULL
        ); `
    );

};

const GetAllNews = async (idUser) => {
    
    const data = await postgres.any(
        `SELECT news_id, soursenews_id, news_title, news_img, news_link, news_date, hidden 
            FROM public.news
            WHERE soursenews_id = ( SELECT soursenews_id FROM public.soursenews WHERE users_id = $1 )`
        ,idUser
    );
    
    return data;
};

const GetAllSettings = async (idUser) => {

    const data = await postgres.any(
        `SELECT news_id, soursenews_id, news_title, news_img, news_link, news_date, hidden 
            FROM public.news
            WHERE soursenews_id = ( SELECT soursenews_id FROM public.soursenews WHERE users_id = $1 )`
        ,idUser
    );

    return data;
}


module.exports = {
    CreateDatabase,
    GetAllNews,
    GetAllSettings
}
