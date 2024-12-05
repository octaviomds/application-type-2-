import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const OrderNumberArrow = () => (
  <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M5 12h14M12 5l7 7-7 7'
      stroke='#192639'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default OrderNumberArrow;
