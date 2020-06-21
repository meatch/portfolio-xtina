
const theDate = new Date();
const year = theDate.getFullYear();
const first = 'Mitchell';
const last = 'Gohman';

export const config = {
    author: {
        name: {
            first: first,
            last: last,
            preferred: 'Mitch',
        },
        email: 'Me@MitchellGohman.com',
    },
    header: {
        fullname: `${first} ${last}`,
        title: `Developer`,
    },
    footer: {
        tagline: `Designed and Developed by Christina &amp; Mitchell ${last}`,
        copyright: `${ year }. All rights reserved.`,
    }
}