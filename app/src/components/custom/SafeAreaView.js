import React from 'react';
import {SafeAreaView as SafeAreaViewRN} from 'react-native-safe-area-context';

import {theme} from '../../constants';

const SafeAreaView = ({children, edges}) => {
  return (
    <SafeAreaViewRN
      style={{flex: 1, backgroundColor: theme.colors.white}}
      edges={edges}
    >
      {children}
    </SafeAreaViewRN>
  );
};

export default SafeAreaView;
