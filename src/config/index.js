/* eslint-disable */
// TODO: Переделать (https://github.com/broteeshkies/brobot/issues/11)
require('dotenv').config();
import config from '@lskjs/config';

import chats from './chats';
import consts from './consts';
/* eslint-enable */

export default config({
    log: {
        level: 'warn',
    },
    token: process.env.TOKEN,
    consts,
    chats,
    foursquare: {
        clientId: process.env.FSQR_CLIENT_ID,
        clientSecret: process.env.FSQR_CLIENT_SECRET,
    },
});
