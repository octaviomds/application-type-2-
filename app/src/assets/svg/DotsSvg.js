import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const DotsSvg = (props) => (
  <Svg width={2} height={40} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      stroke='#EAEDF4'
      strokeWidth={2}
      strokeLinecap='round'
      strokeDasharray='2 6'
      d='M1 1v38'
    />
  </Svg>
);

export default DotsSvg;
