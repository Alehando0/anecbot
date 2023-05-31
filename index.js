const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf('6205701671:AAHVPv4quonL7qm9Va0YzHItRBwW4oImd2U');
const anec = [
    'Наркоман упал с балкона, люди начинают подходить к нему, спрашивают, что случилось, а он говорит "не знаю, я сам только подошёл".',
    'Нашёл еврей кошелёк, а там не хватает.',
    'Мужик выходит на поле, видит небывалый урожай и в сердцах произносит: "Ничего себе..." Сзади подходит товарищ Сталин и, гладя по голове, говорит: "Правильно, всё нам".',
    'Принятие смертельной болезни у евреев начинается с торга.',
    'В семье программистов ребёнок называет отчима "новая папка"',
];

let currAnec = anec[0];

const keyboard = Markup.keyboard([
    ['Анекдот'],
    ['Другой анекдот']
]).resize().oneTime();

bot.start((ctx) => {
    ctx.reply('Привет, я рассказываю анекдоты', keyboard);
});

bot.hears('Анекдот', (ctx) => {
    ctx.reply(currAnec, keyboard);
});

bot.hears('Другой анекдот', (ctx) => {
    const oldAnec = currAnec;
    const n = Math.floor(Math.random() * anec.length);
    currAnec = anec[n];
    if (oldAnec !== currAnec) {
        ctx.reply(currAnec, keyboard);
    }
    else {
        return n;
    }
});

bot.launch();