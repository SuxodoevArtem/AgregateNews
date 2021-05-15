const { GetAllNews } = require('../data/querys')

const getAll = async (req, res) => {
    try{
        
        const news = await GetAllNews(1);

        return res.status(200).send({
            news,
        });

    }catch(err){
        res.status(500).send(err);
    }
}

module.exports = {
    getAll,
}