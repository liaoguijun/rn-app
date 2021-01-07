import React from 'react';
import {View, Button} from 'react-native';
import {Header} from 'react-native-elements';

interface IProps {
  navigation: any;
}

const Home = (props: IProps) => {
  const {navigation} = props;
  return (
    <>
      <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
      <View>
        <Button title="openDrawer" onPress={() => navigation.openDrawer()} />
      </View>
    </>
  );
};

export default Home;
