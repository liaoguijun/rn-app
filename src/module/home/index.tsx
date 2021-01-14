import React, {useState, useEffect} from 'react';
import {inject, observer} from 'mobx-react';
import {
  Text,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Dimensions,
  Modal,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';

const screenHeight = Dimensions.get('window').height;

interface IProps {
  navigation?: any;
}

const Home = (props: IProps) => {
  const {navigation} = props;
  const {navigate} = navigation;
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    console.log(props);
  }, [props]);
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
    company: {
      color: '#ffffff',
      marginBottom: 100,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop: 22,
      width: '100%',
    },
    modalView: {
      marginBottom: 20,
      backgroundColor: 'white',
      width: '100%',
      padding: 40,
      borderRadius: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    loginBtn: {
      width: 200,
    },
  });
  const loginPress = () => {
    navigate('Main');
    setVisible(false);
  };
  return (
    <View>
      <StatusBar hidden />
      <ImageBackground
        style={styles.bg}
        source={require('../../assets/images/home/bg.png')}>
        <Text style={styles.version}>数据展示平台-v1.0</Text>
        <Text style={styles.company}>四川野马科技有限公司</Text>
      </ImageBackground>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Input
              label="邮箱"
              placeholder="请输入邮箱"
              leftIcon={<Icon name="envelope-o" size={24} color="black" />}
            />
            <Input
              label="密码"
              secureTextEntry
              placeholder="请输入密码"
              leftIcon={<Icon name="lock" size={24} color="black" />}
              rightIcon={<Icon name="eye" size={24} color="black" />}
              //   rightIcon={<Icon name="eye-slash" size={24} color="black" />}
            />
            <Button
              title="登录"
              type="outline"
              buttonStyle={styles.loginBtn}
              onPress={loginPress}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default inject('homestore')(observer(Home));
