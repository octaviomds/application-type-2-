import * as React from 'react';
import Svg, {Path, Mask, G} from 'react-native-svg';

const ExitSvg = () => (
  <Svg width={103} height={100} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M97.365 21.208a4.82 4.82 0 1 1 0-9.64 4.82 4.82 0 0 1 0 9.64ZM48.682 0l43.863 67.48V34.577a4.82 4.82 0 1 1 9.64 0V100L58.322 32.52V59.4c0 16.104-13.056 29.16-29.16 29.16C13.055 88.56 0 75.504 0 59.4V16.26a4.82 4.82 0 0 1 9.64 0V59.4c0 10.78 8.74 19.52 19.521 19.52 10.782 0 19.521-8.74 19.521-19.52V0Z'
      fill='#F1F5FA'
    />
    <Mask
      id='a'
      style={{
        maskType: 'luminance',
      }}
      maskUnits='userSpaceOnUse'
      x={1}
      y={0}
      width={100}
      height={100}
    >
      <Path d='M1 0h100v100H1V0Z' fill='#fff' />
    </Mask>
    <G mask='url(#a)'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.004 71.362a4.45 4.45 0 0 0 4.45 4.45h91.093a4.45 4.45 0 0 0 4.449-4.45V28.638a4.45 4.45 0 0 0-4.45-4.45H19.75a1.367 1.367 0 0 0 0 2.735h76.797c.947 0 1.715.768 1.715 1.715v42.724c0 .948-.768 1.715-1.715 1.715H5.453a1.715 1.715 0 0 1-1.715-1.715V28.638c0-.947.768-1.715 1.715-1.715h7.51a1.367 1.367 0 1 0 0-2.735h-7.51a4.45 4.45 0 0 0-4.45 4.45v42.724Z'
        fill='#192639'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M79.398 59.324v-1.59a2.463 2.463 0 0 0-2.463-2.462h-5.306a.836.836 0 0 1-.836-.835v-8.874c0-.461.374-.835.836-.835h5.306a2.463 2.463 0 0 0 2.463-2.463v-1.59l2.491 2.173a1.367 1.367 0 1 0 1.797-2.06l-2.941-2.566c-1.594-1.39-4.082-.257-4.082 1.856v1.915H71.63a3.57 3.57 0 0 0-3.57 3.57v8.874a3.57 3.57 0 0 0 3.57 3.57h5.034v1.915c0 2.113 2.488 3.245 4.082 1.856l11.076-9.659a2.812 2.812 0 0 0 0-4.238l-2.966-2.586a1.367 1.367 0 0 0-1.797 2.06l2.965 2.586a.078.078 0 0 1 0 .117m0 0-10.625 9.266 10.626-9.265Zm-11.076-9.775h.001Z'
        fill='#192639'
      />
      <Path
        d='M46.76 38.57c-.81 0-1.465.656-1.465 1.465v19.93a1.465 1.465 0 1 0 2.93 0v-19.93c0-.81-.656-1.465-1.465-1.465ZM18.904 41.59a1.465 1.465 0 1 0 0-2.929h-8.322c-.809 0-1.464.656-1.464 1.465v19.748c0 .81.655 1.465 1.464 1.465h8.322a1.465 1.465 0 1 0 0-2.93h-6.857v-6.944h6.243a1.465 1.465 0 1 0 0-2.93h-6.243v-6.944h6.857ZM33.858 49.293l5.928-8.414a1.465 1.465 0 1 0-2.395-1.688l-5.323 7.557-5.316-7.556a1.464 1.464 0 1 0-2.396 1.686l5.92 8.414-6.926 9.83a1.464 1.464 0 1 0 2.395 1.687l6.32-8.972 6.312 8.971a1.463 1.463 0 0 0 2.04.355c.662-.465.821-1.379.356-2.04l-6.915-9.83ZM63.292 38.57H52.285a1.465 1.465 0 1 0 0 2.93h4.017v18.465a1.465 1.465 0 1 0 2.93 0V41.5h4.06a1.465 1.465 0 1 0 0-2.93Z'
        fill='#576C7B'
      />
    </G>
  </Svg>
);

export default ExitSvg;
