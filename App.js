import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.webview}
        source={{ uri: 'https://dopamine-frontend.vercel.app/' }}
        // 네트워크 오류 또는 로드 오류에 대한 처리 추가
        onError={error => console.error(error)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  webview: {
    flex: 1,
  },
});
