import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';

const App = () => {
  const videoRef = React.useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{
          uri: 'https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_0193.mp4', // Replace with the path to your mp4 video
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        shouldPlay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 300,
  },
});

export default App;
