import * as React from 'react';
import Svg, {Rect, G, Path, Defs, ClipPath} from 'react-native-svg';

const CameraSvg = () => (
  <Svg width={40} height={40} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Rect width={40} height={40} rx={6} fill='#F6F8FB' />
    <G
      clipPath='url(#a)'
      stroke='#576C7B'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <Path d='M27.333 24.667A1.333 1.333 0 0 1 26 26H14a1.333 1.333 0 0 1-1.333-1.333v-7.334A1.333 1.333 0 0 1 14 16h2.667L18 14h4l1.333 2H26a1.333 1.333 0 0 1 1.333 1.333v7.334Z' />
      <Path d='M20 23.333A2.667 2.667 0 1 0 20 18a2.667 2.667 0 0 0 0 5.333Z' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' transform='translate(12 12)' d='M0 0h16v16H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CameraSvg;
