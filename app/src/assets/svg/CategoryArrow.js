import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CategoryArrow = () => (
  <Svg width={8} height={12} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M1.2 10.8 6 6 1.2 1.2'
      stroke='#576C7B'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default CategoryArrow;
