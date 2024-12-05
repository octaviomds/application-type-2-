import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {REMEMBER_ME} from '../config';

// return true if token exists or false if not
const checkIfRememberMe = async () => {
  try {
    const hasRememberMe = await AsyncStorage.getItem(REMEMBER_ME);
    if (
      hasRememberMe === null ||
      hasRememberMe === undefined ||
      hasRememberMe === 'false'
    ) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

const useRememberMe = () => {
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [isRememberMeIsLoading, setIsRememberMeIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const rememberMe = await checkIfRememberMe();
      setIsRememberMe(rememberMe);
      setIsRememberMeIsLoading(false);
    })();
  }, []);

  return {
    isRememberMe: isRememberMe,
    isLoading: isRememberMeIsLoading,
  };
};

export default useRememberMe;
