import React, {FunctionComponent, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import {WebView} from 'react-native-webview';
// components
import WebViewError from './WebViewError';
import WebViewLoading from './WebViewLoading';
//styles
import {theme} from '../../style/styles';
//types
import {RootStackScreenProps} from '../../types/navigation';

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
      renderLoading={() => <WebViewLoading />}
      renderError={() => <WebViewError />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    opacity: 0.99,
    minHeight: 1,
    backgroundColor: theme.general.white,
    height: '100%',
    width: '100%',
    flex: 1,
  },
});

export default WebViewScreen;
