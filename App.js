import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';
import { scheduleNotificationAsync } from 'expo-notifications';

export default function App() {
  useEffect(() => {
    // 앱이 시작될 때 알림 스케줄링
    scheduleDailyNotification();
  }, []);

  async function scheduleDailyNotification() {
    // 현재 시간과 매일 알림을 보낼 시간 설정 (24시간 형식)
    const trigger = {
      hour: 10,
      minute: 0,
      repeats: true, // 매일 반복
    };

    // 알림 내용 및 스케줄링
    await scheduleNotificationAsync({
      content: {
        title: '매일 알림',
        body: '알림 내용을 입력하세요.',
      },
      trigger,
    });
  }

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
