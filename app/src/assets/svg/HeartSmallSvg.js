import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HeartSmallSvg = ({
  fillColor = 'transparent',
  strokeColor = '#576C7B',
}) => (
  <Svg width={17} height={17} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path fill='#fff' d='M0 0h17v17H0z' />
    <Path
      d='M14.762 3.265a3.896 3.896 0 0 0-5.511 0l-.751.751-.75-.75a3.897 3.897 0 0 0-5.512 5.51l.751.751 5.51 5.511 5.512-5.51.75-.752a3.897 3.897 0 0 0 0-5.51v0Z'
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default HeartSmallSvg;
