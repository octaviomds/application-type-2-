import * as React from 'react';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';

const PayPal = () => (
  <Svg width={79} height={19} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M2.816 8.816h1.408c.779 0 1.37-.192 1.776-.576.416-.384.624-.89.624-1.52 0-.661-.208-1.184-.624-1.568-.416-.384-1.019-.576-1.808-.576H2.816v4.24Zm-1.648-5.6h3.088c1.237 0 2.219.33 2.944.992.725.65 1.088 1.488 1.088 2.512S7.92 8.576 7.184 9.216c-.725.64-1.67.96-2.832.96H2.816V14H1.168V3.216Zm13.005 7.168h-1.216c-.598 0-1.05.117-1.36.352-.299.235-.448.533-.448.896 0 .373.117.667.352.88.235.213.576.32 1.024.32.512 0 .912-.139 1.2-.416.299-.288.448-.661.448-1.12v-.912Zm-4.08-2.56v-1.52c.63-.363 1.461-.544 2.496-.544 2.122 0 3.184 1.03 3.184 3.088V14H14.22v-.96c-.416.683-1.147 1.024-2.192 1.024-.768 0-1.387-.219-1.856-.656-.459-.448-.688-1.013-.688-1.696 0-.779.293-1.381.88-1.808.586-.437 1.408-.656 2.464-.656h1.344v-.464c0-.555-.133-.97-.4-1.248-.267-.288-.71-.432-1.328-.432-.864 0-1.648.24-2.352.72Zm10.032 6-3.232-7.936h1.744l1.008 2.64 1.264 3.424c.096-.32.48-1.461 1.152-3.424l.912-2.64h1.664l-2.928 7.888c-.778 2.08-1.968 3.12-3.568 3.12a2.93 2.93 0 0 1-.736-.08v-1.344c.17.043.352.064.544.064 1.035 0 1.76-.57 2.176-1.712Zm11.472-5.008h1.408c.779 0 1.37-.192 1.776-.576.416-.384.624-.89.624-1.52 0-.661-.208-1.184-.624-1.568-.416-.384-1.018-.576-1.808-.576h-1.376v4.24Zm-1.648-5.6h3.088c1.238 0 2.219.33 2.944.992.726.65 1.088 1.488 1.088 2.512s-.368 1.856-1.104 2.496c-.725.64-1.67.96-2.832.96h-1.536V14H29.95V3.216Zm13.005 7.168h-1.216c-.597 0-1.05.117-1.36.352-.298.235-.448.533-.448.896 0 .373.117.667.352.88.235.213.576.32 1.024.32.512 0 .912-.139 1.2-.416.299-.288.448-.661.448-1.12v-.912Zm-4.08-2.56v-1.52c.63-.363 1.462-.544 2.496-.544 2.123 0 3.184 1.03 3.184 3.088V14h-1.552v-.96c-.416.683-1.147 1.024-2.192 1.024-.768 0-1.387-.219-1.856-.656-.459-.448-.688-1.013-.688-1.696 0-.779.294-1.381.88-1.808.587-.437 1.408-.656 2.464-.656h1.344v-.464c0-.555-.133-.97-.4-1.248-.267-.288-.71-.432-1.328-.432-.864 0-1.648.24-2.352.72ZM46.73 14V2.688h1.585V14H46.73Z'
      fill='#192639'
    />
    <G clipPath='url(#a)'>
      <Path
        d='M77.333 5 70 12.333 66.667 9'
        stroke='#00824B'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' transform='translate(65 4)' d='M0 0h14v10H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default PayPal;