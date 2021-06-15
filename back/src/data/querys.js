const postgres = require('./connection');

const CreateDatabase = async () => {

    await postgres.any(
        `CREATE TABLE if not exists users (
            users_id SERIAL PRIMARY KEY NOT NULL,
            users_password text NOT NULL,
            users_email varchar(100) NOT NULL,
            users_token text,
            api_key text
        );
                
        CREATE TABLE if not exists sourseNews (
            sourseNews_name varchar(100) NOT NULL UNIQUE,
            sourseNews_id SERIAL PRIMARY KEY,
            users_id integer REFERENCES users (users_id) ON DELETE CASCADE
        ); 
                
        CREATE TABLE if not exists rss (
             rss_id SERIAL PRIMARY KEY NOT NULL,
             sourseNews_id integer REFERENCES  sourseNews (sourseNews_id) ON DELETE CASCADE,
             rss_link text NOT NULL UNIQUE
        );
                
        CREATE TABLE if not exists news (
              news_id SERIAL PRIMARY KEY,
              sourseNews_id integer REFERENCES sourseNews (sourseNews_id) ON DELETE CASCADE,
              news_title varchar(150) NOT NULL,
              news_img text NOT NULL,
              news_link text NOT NULL,
              news_date varchar(100) NOT NULL,
              hidden boolean default false
        ); 
                
        CREATE TABLE if not exists keyWords(
              keyWords_id SERIAL PRIMARY KEY NOT NULL,
              keyWords_word varchar(100) NOT NULL,
              sourseNews_id integer REFERENCES sourseNews (sourseNews_id) ON DELETE CASCADE
        );
                
        CREATE TABLE if not exists rssList (
               rss_id SERIAL PRIMARY KEY NOT NULL,
               rss_link text NOT NULL
        );  `
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


const GetUser = async ( email ) => {

    const data = await postgres.any(
        `SELECT users_id, users_password, users_email
            FROM public.users
            WHERE users_email = $1`
        ,email
    );

    return data;
}

const CreateUser = async (email, passwordHash) => {

    const data = await postgres.any(
        `INSERT INTO public.users(
            users_password, users_email)
            VALUES ($1, $2)`, [passwordHash, email]
    );

    return data;
}

const UpdateToken = async (user_id, token) => {

    await postgres.any(`UPDATE public.users 
        SET users_token = $2
        WHERE users_id = $1 `, [user_id, token]
    );

}

const GetSourses = async (user_id) => {

    const data = await postgres.any(`SELECT rss_link, soursenews_name, sourse.soursenews_id
        FROM public.soursenews AS sourse 
        LEFT JOIN public.rss AS rss ON sourse.soursenews_id = rss.soursenews_id
        WHERE users_id = '$1' `, user_id
    );

    return data;
}

const GetKeyWord = async(soursenews_id) =>{

    const data = await postgres.any(`SELECT keywords_word
        FROM public.keywords
        WHERE soursenews_id = $1 `, soursenews_id
    );

    return data;
}

const CreateSourseNews = async (cartName, user_id) => {

    await postgres.any(`INSERT INTO public.soursenews(
        soursenews_name, users_id)
        VALUES ($1, $2)`,[cartName, user_id]
    );
    
    const data = await postgres.any(`
        SELECT soursenews_name, soursenews_id, users_id
        FROM public.soursenews
        WHERE soursenews_name = $1`, cartName
    );

    return data[0].soursenews_id;
}

const CreateRss = async (id, Link) => {

    await postgres.any(`
        INSERT INTO public.rss(
            soursenews_id, rss_link)
            VALUES ($1, $2)`, [id, Link]
    );

}

const CreateKeyWord = async(keyword, id) => {

    await postgres.any(`
    INSERT INTO public.keywords(
        keywords_word, soursenews_id)
        VALUES ($1, $2)`,[keyword, id]
    );

}

module.exports = {
    CreateDatabase,
    GetAllNews,
    GetUser,
    CreateUser,
    UpdateToken,
    CreateSourseNews,
    CreateRss,
    CreateKeyWord,
    GetSourses,
    GetKeyWord
}

