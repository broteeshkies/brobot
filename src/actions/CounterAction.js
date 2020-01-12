import Action from './Action';

const animation = ['✌  😄  ✌', '☝️  😄  👍', '💪  😄  👉', '🖕  😄  🖕'];

export default class CounterAction extends Action {
    constructor(...args) {
        super(...args);
        this.name = 'CounterAction';
    }

    test(message) {
        return this.testMessageRegExp(message, /инферно/);
    }

    doAction(message) {
        this.log('doAction');
        let counter = 0;
        const bot = this.bot;
        const chatId = message.chat.id || message.from.id;
        bot.sendMessage(chatId, '💥💥💥💥💥!!!В Н И М А Н И Е!!!💥💥💥💥💥').then(sended => {
            const messageId = sended.message_id;

            const intervalId = setInterval(() => {
                const msg = animation[counter % animation.length];
                bot.editMessageText(msg, { chat_id: sended.chat.id, message_id: messageId });
                if (counter > animation.length * 2) {
                    clearInterval(intervalId);
                    setTimeout(() => {
                        bot.editMessageText('*DELETED*', {
                            chat_id: sended.chat.id,
                            message_id: messageId,
                            parse_mode: 'Markdown',
                        });
                    }, 1000);
                }
                counter += 1;
            }, 1000);
        });
    }
}
