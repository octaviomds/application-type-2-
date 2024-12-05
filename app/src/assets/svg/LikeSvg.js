import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LikeSvg = ({fillColor = 'transparent', strokeColor = '#576C7B'}) => (
  <Svg width={20} height={20} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M17.367 3.842a4.583 4.583 0 0 0-6.484 0L10 4.725l-.883-.883a4.584 4.584 0 0 0-6.484 6.483l.884.883L10 17.692l6.483-6.484.884-.883a4.582 4.582 0 0 0 0-6.483v0Z'
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default LikeSvg;
