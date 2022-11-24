import React, { useState } from 'react';
import { ProgressBar, Colors } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { spacing, colors } from '../utils/sizes';
const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];
export const Timer = ({ focusSubject, setSubject, onTimerEnd, history }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [time, setTime] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setTimeout(() => {
      setIsStarted(false);
      setProgress(1);
      onTimerEnd([...history,focusSubject]);
      reset();
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          minutes={time}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on: {focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          style={{ color: `colors.progressBar` }}
        />
      </View>

      <View style={styles.setTime}>
        <RoundedButton size={40} title="10" onPress={() => setTime(10)} />
        <RoundedButton size={40} title="15" onPress={() => setTime(15)} />
        <RoundedButton size={40} title="20" onPress={() => setTime(20)} />
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title="Start"
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}

        {isStarted && (
          <RoundedButton
            title="Pause"
            onPress={() => {
              setIsStarted(false);
            }}
          />
        )}
      </View>
      <View style={styles.clear}>
        <RoundedButton
          size={40}
          title="Clear"
          onPress={() => setSubject(null)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: spacing.md,
  },
  setTime: {
    paddingTop: spacing.xxxl,
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  clear: {
    flex: 0.1,
    alignItems: 'center',
    paddingTop: spacing.md,
  },
});
