import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const colors = {
  black: '#111111',
  white: '#FFFFFF',
  accent: '#FF4370',
  mainColor: '#192639',
  textColor: '#576C7B',
  transparent: 'transparent',
  imageBackground: '#F6F8FB',
};

const fonts = {
  H1: {
    fontFamily: 'Hind-Bold',
    fontSize: 32,
  },
  H2: {
    fontFamily: 'Hind-SemiBold',
    fontSize: 22,
  },
  H3: {
    fontFamily: 'Hind-SemiBold',
    fontSize: 20,
  },
  H4: {
    fontFamily: 'Hind-Medium',
    fontSize: 18,
  },
  H5: {
    fontFamily: 'Hind-Medium',
    fontSize: 16,
  },
  Hind_400Regular: {
    fontFamily: 'Hind-Regular',
  },
  Hind_500Medium: {
    fontFamily: 'Hind-Medium',
  },
  Hind_600SemiBold: {
    fontFamily: 'Hind-SemiBold',
  },
  Hind_700Bold: {
    fontFamily: 'Hind-Bold',
  },
};

const sizes = {
  width,
  height,
  borderRadius: 6,
};

const row = {
  flexDirection: 'row',
  alignItems: 'center',
};

const fullRow = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const flex = {
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const theme = {
  colors,
  fonts,
  sizes,
  row,
  fullRow,
  flex,
};

export {colors, fonts, sizes, theme, row, fullRow};
