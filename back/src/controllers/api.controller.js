const { GetAllNews, SetUserKey } = require('../data/querys')
const jwt = require('jsonwebtoken');

const APIgetAll = async (req, res) => {
    try{
        
        console.log('1')
        console.log(req.params)

        const data = [
            {
                title: 'Штаб студенческих отрядов и волонтерского движения агротехуниверситета Прикамья признан лучшим в России',
                link: 'http://www.permkrai.ru/news/shtab-studencheskikh-otryadov-i-volonterskogo-dvizheniya-agrotekhuniversiteta-prikamya-priznan-luchsh',
                img: 'http://www.permkrai.ru/upload/iblock/8c8/2021_02_17_16_36_21.jpg',
                date: '17 Feb 2021'
            },
            {
                title: '149 школьников из сельских территорий Прикамья примут участие в региональном этапе Всероссийского конкурса АгроНТИ',
                link: 'http://www.permkrai.ru/news/149-shkolnikov-iz-selskikh-territoriy-prikamya-primut-uchastie-v-regionalnom-etape-vserossiyskogo-ko',
                img: 'http://www.permkrai.ru/upload/iblock/171/agronti-promo.png',
                date: '24 Sep 2020'
            },
            {
                title: 'Команда Пермского края заняла первое место на Спартакиаде студотрядов ПФО',
                link: 'http://www.permkrai.ru/news/komanda-permskogo-kraya-zanyala-pervoe-mesto-na-spartakiade-studotryadov-pfo',
                img: 'http://www.permkrai.ru/upload/iblock/e5d/u8vol1eatbs-_1_.jpg',
                date: '02 Oct 2019'
            },

        ]

        return res.status(200).send({
            data: data,
            messange: 'Новости получены',
        });


    }catch(err){
        res.status(500).send(err);
    }
}

const APIgetDate = async (req, res) => {
    console.log(req.params)
    console.log('*')
}

const APIcreateKey = async (req, res) => {


    const key = jwt.sign({ userId: req.user.userId },
        process.env.JWT_SECRET_KEY, 
        { expiresIn: 86400 }
    );

    await SetUserKey( req.user.userId, key);

    return res.status(200).send({
        data: key,
        messange: 'key получен',
    });

    
}

module.exports = {
    APIgetAll,
    APIgetDate,
    APIcreateKey 
}