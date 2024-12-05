import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LogoSvg = () => (
  <Svg width={21} height={20} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19.473 4.242a.964.964 0 1 1 0-1.928.964.964 0 0 1 0 1.928ZM9.736 0l8.773 13.496v-6.58a.964.964 0 0 1 1.928 0V20L11.664 6.504v5.376A5.832 5.832 0 1 1 0 11.88V3.252a.964.964 0 1 1 1.928 0v8.628a3.904 3.904 0 1 0 7.808 0V0Z'
      fill='#192639'
    />
  </Svg>
);

export default LogoSvg;
