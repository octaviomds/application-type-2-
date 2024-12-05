import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BriefcaseSvg = () => (
  <Svg width={20} height={20} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M16.667 5.833H3.333c-.92 0-1.666.746-1.666 1.667v8.333c0 .92.746 1.667 1.666 1.667h13.334c.92 0 1.666-.746 1.666-1.667V7.5c0-.92-.746-1.667-1.666-1.667Z'
      stroke='#576C7B'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M13.333 17.5V4.167A1.667 1.667 0 0 0 11.667 2.5H8.333a1.667 1.667 0 0 0-1.666 1.667V17.5'
      stroke='#576C7B'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default BriefcaseSvg;
