import {fontSz} from 'utils';
import {font} from './font';

export const typography = {
  tiny: {
    fontFamily: font.InterRegular,
    fontSize: fontSz(10),
  },
  tinyBold: {
    fontFamily: font.InterBold,
    fontSize: fontSz(10),
  },
  bodySmall: {
    fontFamily: font.InterRegular,
    fontSize: fontSz(12),
  },
  small: {
    fontFamily: font.InterRegular,
    fontSize: fontSz(10),
  },
  smallBold: {
    fontFamily: font.InterBold,
    fontSize: fontSz(12),
  },
  body: {
    fontFamily: font.InterRegular,
    fontSize: fontSz(14),
  },
  bodyMedium: {
    fontFamily: font.InterMedium,
    fontSize: fontSz(14),
  },
  bodySemiBold: {
    fontFamily: font.InterSemiBold,
    fontSize: fontSz(14),
  },
  bodyBold: {
    fontFamily: font.InterBold,
    fontSize: fontSz(14),
  },
  headerBold: {
    fontFamily: font.TechnorBold,
    fontSize: fontSz(16),
  },
  header: {
    fontFamily: font.TechnorRegular,
    fontSize: fontSz(16),
  },
  headerMedium: {
    fontFamily: font.TechnorMedium,
    fontSize: fontSz(16),
  },
  headerBig: {
    fontFamily: font.TechnorSemibold,
    fontSize: fontSz(18),
  },
  heading: {
    fontFamily: font.TechnorBold,
    fontSize: fontSz(20),
  },
  h1: {
    fontFamily: font.InterBold,
    fontSize: fontSz(32),
  },
  h2: {
    fontFamily: font.InterSemiBold,
    fontSize: fontSz(28),
  },
  h3: {
    fontFamily: font.InterSemiBold,
    fontSize: fontSz(22),
  },
  h4: {
    fontFamily: font.InterSemiBold,
    fontSize: fontSz(17),
  },
  bottomTabRegular: {
    fontFamily: font.InterRegular,
    fontSize: fontSz(11),
  },
  bottomTabMedium: {
    fontFamily: font.InterMedium,
    fontSize: fontSz(11),
  },
  h4UpperCase: {
    fontFamily: font.InterMedium,
    fontSize: fontSz(17),
    textTransform: 'uppercase',
  },
};
