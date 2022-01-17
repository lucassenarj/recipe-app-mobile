import AsyncStorage from "@react-native-async-storage/async-storage";

async function clearStorage(): Promise<void>{
  await AsyncStorage.clear();
};

export default clearStorage;
