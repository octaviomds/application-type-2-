import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SearchSvg = () => (
  <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11 3.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5ZM2.25 11a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0Z'
      fill='#fff'
    />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.943 15.943a1 1 0 0 1 1.414 0l4.35 4.35a1 1 0 0 1-1.414 1.414l-4.35-4.35a1 1 0 0 1 0-1.414Z'
      fill='#fff'
    />
  </Svg>
);

export default SearchSvg;
