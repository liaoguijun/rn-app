import React from 'react';
import {
  Text,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {Input, Button} from 'react-native-elements';

const screenHeight = Dimensions.get('window').height;

interface IProps {
  navigation?: any;
}

const Notice = (props: IProps) => {
  const {} = props;
  const styles = StyleSheet.create({
    bg: {
      height: screenHeight,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    version: {
      color: '#ffffff',
      fontSize: 32,
      fontWeight: 'bold',
      marginTop: 200,
    },
  });
  return (
    <View>
      <StatusBar hidden />
      <ImageBackground
        style={styles.bg}
        source={require('../../assets/images/home/bg.png')}>
        <Text style={styles.version}>通知</Text>
      </ImageBackground>
    </View>
  );
};

export default Notice;
