import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reactotronRedux} from 'reactotron-redux';

const _reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'Reactotron for BookcaseApp',
  })
  .useReactNative({
    asyncStorage: true, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    editor: false, // there are more options to editor
    overlay: false, // just turning off overlay
  })
  .use(reactotronRedux())
  .connect();

export default _reactotron;
