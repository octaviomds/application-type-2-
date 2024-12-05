import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BurgerMenuSvg = (props) => (
  <Svg width={20} height={12} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      stroke='#192639'
      strokeWidth={2}
      strokeLinecap='round'
      d='M1 1h18M1 6h18M1 11h18'
    />
  </Svg>
);

export default BurgerMenuSvg;
