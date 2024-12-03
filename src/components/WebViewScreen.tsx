import React, {FunctionComponent, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import {WebView} from 'react-native-webview';
// components
import CommonError from './CommonError';
import CommonLoading from './CommonLoading';
//styles
import {theme} from '../style/styles';
import {RootStackScreenProps} from '../types/navigation';

interface IWebViewScreen {
  navigation: RootStackScreenProps<'WebViewScreen'>['navigation'];
  route: RootStackScreenProps<'WebViewScreen'>['route'];
}

const WebViewScreen: FunctionComponent<IWebViewScreen> = ({
  navigation,
  route,
}): React.JSX.Element => {
  const {title, url} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation, title]);

  return (
    <WebView
      style={styles.container}
      source={{
        uri: url,
      }}
      originWhitelist={['*']}
      androidLayerType="hardware"
      startInLoadingState={true}
      renderLoading={() => <CommonLoading />}
      renderError={() => <CommonError />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    opacity: 0.99,
    minHeight: 1,
    backgroundColor: theme.general.white,
  },
});

export default WebViewScreen;
