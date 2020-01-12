import { mainChatId } from '../config/chats';
import { deanonVoteTime } from '../config/consts';
import Action from './Action';

export const anonMessages = {};

export default class PrivateMessageAction extends Action {
    constructor(...args) {
        super(...args);
        this.name = 'PrivateMessageAction';
    }

    test(message) {
        return message.chat.id > 0;
    }

    async doAction(message) {
        this.log('doAction');
        const { username } = message.from;
        const sendedMessage = await this.repost({
            chatId: mainChatId,
            message,
        });
        if (!sendedMessage) {
            return;
        }
        anonMessages[sendedMessage.message_id] = { message, count: [], username };
        setTimeout(() => {
            delete anonMessages[sendedMessage.message_id];
        }, deanonVoteTime);
    }
}
