import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const NewCardSvg = () => (
  <Svg width={30} height={30} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Rect width={30} height={30} rx={6} fill='#F6F8FB' />
    <Path
      d='M15 8.583v12.834M8.624 15h12.752'
      stroke='#192639'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default NewCardSvg;
