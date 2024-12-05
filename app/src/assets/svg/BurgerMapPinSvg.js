import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BurgerMapPinSvg = () => (
  <Svg width={14} height={14} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M12.25 5.833c0 4.084-5.25 7.584-5.25 7.584s-5.25-3.5-5.25-7.584a5.25 5.25 0 0 1 10.5 0Z'
      stroke='#192639'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M7 7.583a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z'
      stroke='#192639'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default BurgerMapPinSvg;
