import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FIRST_LAUNCH} from '../config';

const checkIfFirstLaunch = async () => {
  try {
    const hasFirstLaunched = await AsyncStorage.getItem(FIRST_LAUNCH);
    if (hasFirstLaunched === null) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const useFirstLaunch = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [isFirstLaunchIsLoading, setIsFirstLaunchIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const firstLaunch = await checkIfFirstLaunch();
      setIsFirstLaunch(firstLaunch);
      setIsFirstLaunchIsLoading(false);
    })();
  }, []);

  return {
    isFirstLaunch: isFirstLaunch,
    isLoading: isFirstLaunchIsLoading,
  };
};

export default useFirstLaunch;
