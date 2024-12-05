import React from 'react';

import {text} from '../../text';

const ProductName = ({item, textStyle}) => {
  const {T14} = text;

  return (
    <T14
      textStyle={{textTransform: 'capitalize', marginBottom: 3, ...textStyle}}
      numberOfLines={1}
    >
      {item.name}
    </T14>
  );
};

export default ProductName;
