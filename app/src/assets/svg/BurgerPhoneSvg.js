import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const BurgerPhoneSvg = () => (
  <Svg width={14} height={14} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <G clipPath='url(#a)'>
      <Path
        d='M8.78 2.917a2.916 2.916 0 0 1 2.303 2.304L8.78 2.917Zm0-2.334a5.25 5.25 0 0 1 4.637 4.632L8.779.583Zm4.053 9.287v1.75a1.166 1.166 0 0 1-1.271 1.167 11.544 11.544 0 0 1-5.034-1.791 11.375 11.375 0 0 1-3.5-3.5 11.544 11.544 0 0 1-1.791-5.058 1.167 1.167 0 0 1 1.16-1.271h1.75A1.167 1.167 0 0 1 5.314 2.17c.074.56.211 1.11.409 1.64a1.167 1.167 0 0 1-.263 1.23l-.74.74a9.333 9.333 0 0 0 3.5 3.5l.74-.74a1.167 1.167 0 0 1 1.23-.262c.53.197 1.08.334 1.64.408a1.166 1.166 0 0 1 1.003 1.184Z'
        stroke='#192639'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h14v14H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BurgerPhoneSvg;
