import React from 'react';
import {
  Text,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Dimensions,
  View,
  Image,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';

const screenHeight = Dimensions.get('window').height;

interface IProps {
  navigation?: any;
}

const More = (props: IProps) => {
  const {navigation} = props;
  const {navigate} = navigation;
  const styles = StyleSheet.create({
    bg: {
      height: screenHeight,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 100,
    },
  });
  return (
    <View>
      <StatusBar hidden />
      <ImageBackground
        style={styles.bg}
        source={require('../../assets/images/home/bg.png')}>
        <View style={{marginTop: 160}}>
          <Image
            source={require('../../assets/images/home/bg.png')}
            style={{width: 40, height: 40, borderRadius: 20}}
          />
          <Text style={{color: '#ffffff'}}>xhd9111</Text>
        </View>
        <Button
          title="退出"
          buttonStyle={{paddingLeft: 40, paddingRight: 40}}
          onPress={() => navigate('Home')}
        />
      </ImageBackground>
    </View>
  );
};

export default More;
