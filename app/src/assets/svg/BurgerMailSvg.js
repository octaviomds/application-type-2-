import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const BurgerMailSvg = () => (
  <Svg width={15} height={15} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <G
      clipPath='url(#a)'
      stroke='#192639'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <Path d='M2.583 3.083h9.334a1.17 1.17 0 0 1 1.166 1.167v7a1.17 1.17 0 0 1-1.166 1.167H2.583a1.17 1.17 0 0 1-1.166-1.167v-7a1.17 1.17 0 0 1 1.166-1.167Z' />
      <Path d='M13.083 4.25 7.25 8.333 1.417 4.25' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' transform='translate(.25 .75)' d='M0 0h14v14H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BurgerMailSvg;
