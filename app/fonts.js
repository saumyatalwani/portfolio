import localFont from 'next/font/local'
import {Noto_Sans} from 'next/font/google';

const generalSans = localFont({
    src: './fonts/GeneralSans-Variable.ttf',
    variable: '--font-gs',
});

const notoSans = Noto_Sans({
    variable: '--font-ns',
    preload: false,
});

export {generalSans,notoSans}