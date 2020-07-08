
const theDate = new Date();
const year = theDate.getFullYear();
const first = 'Christina';
const last = 'Gohman';

export const config = {
    author: {
        name: {
            first: first,
            last: last,
            preferred: 'Christina',
        },
        email: 'Me@ChristinaGohman.com',
        phone: '‪‭(626) 765-5928',
        tel: '16267655928',
    },
    header: {
        fullname: `${first} ${last}`,
        title: `Senior Graphic Designer`,
    },
    footer: {
        tagline: `Designed and Developed by Christina &amp; Mitchell ${last}`,
        copyright: `${ year }. All rights reserved.`,
    },
}