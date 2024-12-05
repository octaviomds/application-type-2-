import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const RightArrowSvg = (props) => (
  <Svg width={6} height={10} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <G clipPath='url(#a)'>
      <Path
        d='m1 9 4-4-4-4'
        stroke='#192639'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h6v10H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default RightArrowSvg;
