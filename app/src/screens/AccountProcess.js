import React, {useState, useEffect} from 'react';

import {components} from '../components';

const AccountProcess = ({navigation, route}) => {
  const {username, email, password, phone} = route.params;
  console.log('AccountProcess', username, email, password, phone);

  const {Loader} = components;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.reset({
        index: 0,
        routes: [{name: 'SignUpAccountCreated'}],
      });
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }
};

export default AccountProcess;
