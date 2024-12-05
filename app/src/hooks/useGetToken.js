import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_KEY} from '../config';

// return true if token exists or false if not
const checkIfTokenExists = async () => {
  try {
    const hasToken = await AsyncStorage.getItem(TOKEN_KEY);
    if (hasToken === null || hasToken === undefined) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

const useGetToken = () => {
  const [isTokenExists, setIsTokenExists] = useState(false);
  const [isTokenExistsIsLoading, setIsTokenExistsIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const tokenExists = await checkIfTokenExists();
      setIsTokenExists(tokenExists);
      setIsTokenExistsIsLoading(false);
    })();
  }, []);

  return {
    isTokenExists: isTokenExists,
    isLoading: isTokenExistsIsLoading,
  };
};

export default useGetToken;
