import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SearchBar,
  Overlay,
  Header,
  ButtonGroup,
  Button,
} from 'react-native-elements';
import {PieChart, StackedAreaChart} from 'react-native-svg-charts';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const screenHeight = Dimensions.get('window').height;
const initialLayout = {width: Dimensions.get('window').width};

interface IProps {
  navigation?: any;
}

const Custom = (props: IProps) => {
  const {} = props;
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [text] = useState(undefined);
  const [routes] = useState([
    {key: 'money', title: '货币基金'},
    {key: 'indexmark', title: '指数基金'},
    {key: 'equity', title: '股票基金'},
  ]);
  const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const buttons = ['1小时', '24小时', '7天', '30天'];
  const styles = StyleSheet.create({
    bg: {
      height: screenHeight,
      width: '100%',
    },
    chart: {
      width: '100%',
      backgroundColor: '#ffffff',
      paddingTop: 20,
      paddingBottom: 20,
      position: 'relative',
    },
    total: {
      position: 'absolute',
      left: '50%',
      marginLeft: -50,
      top: 80,
      height: 80,
      width: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    carts: {
      width: '100%',
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cart: {},
    tinter1: {
      width: 10,
      height: 10,
      backgroundColor: 'pink',
    },
    tinter2: {
      width: 10,
      height: 10,
      backgroundColor: 'red',
    },
    tinter3: {
      width: 10,
      height: 10,
      backgroundColor: 'yellow',
    },
    scene: {
      flex: 1,
      paddingBottom: 100,
    },
    searchContainer: {
      backgroundColor: '#ffffff',
    },
    inputContainer: {
      backgroundColor: '#eeeeee',
    },
    one: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#eeeeee',
    },
    oneLeft: {},
    oneMid: {},
    oneRight: {},
    detailTitle: {
      width: '100%',
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: '#eeeeee',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    flex1: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
  const MoneyRoute = () => (
    <View style={[styles.scene]}>
      <SearchBar
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
        round
        lightTheme
        placeholder="搜索"
        value={text}
      />
      {Nums.map((item) => {
        return (
          <View
            key={item}
            style={styles.one}
            onTouchEnd={() => setVisible(true)}>
            <View style={styles.oneLeft}>
              <Text>000600</Text>
              <Text>汇添富和聚宝基金</Text>
            </View>
            <Text style={styles.oneMid}>0.7333</Text>
            <Text style={styles.oneRight}>2.748%</Text>
          </View>
        );
      })}
    </View>
  );
  const SecondRoute = () => (
    <View style={[styles.scene, {backgroundColor: '#ff4081'}]} />
  );
  const ThirdRoute = () => (
    <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
  );
  const renderTabBar = (prop: any) => (
    <TabBar
      {...prop}
      indicatorStyle={{backgroundColor: '#0073F7', height: 2}}
      inactiveColor="#000000"
      activeColor="#0073F7"
      style={{backgroundColor: '#ffffff'}}
    />
  );
  const renderScene = SceneMap({
    money: MoneyRoute,
    indexmark: SecondRoute,
    equity: ThirdRoute,
  });
  const pieData = [
    {
      key: 'pie-0',
      svg: {fill: '#51A553', onpress: () => console.log('press')},
      value: 10,
    },
    {
      key: 'pie-1',
      svg: {fill: '#0073F7', onpress: () => console.log('press')},
      value: 65,
    },
    {
      key: 'pie-2',
      svg: {fill: '#ED6E33', onpress: () => console.log('press')},
      value: 25,
    },
  ];
  const data2 = [
    {
      month: new Date(2015, 0, 1),
      apples: 3840,
      bananas: 1920,
      cherries: 960,
      dates: 400,
    },
    {
      month: new Date(2015, 1, 1),
      apples: 1600,
      bananas: 1440,
      cherries: 960,
      dates: 400,
    },
    {
      month: new Date(2015, 2, 1),
      apples: 640,
      bananas: 960,
      cherries: 3640,
      dates: 400,
    },
    {
      month: new Date(2015, 3, 1),
      apples: 3320,
      bananas: 480,
      cherries: 640,
      dates: 400,
    },
  ];
  const colors = ['#8800cc', '#aa00ff', '#cc66ff', '#eeccff'];
  const keys = ['apples', 'bananas', 'cherries', 'dates'];
  const svgs = [
    {onPress: () => console.log('apples')},
    {onPress: () => console.log('bananas')},
    {onPress: () => console.log('cherries')},
    {onPress: () => console.log('dates')},
  ];
  return (
    <View>
      <ImageBackground
        style={styles.bg}
        source={require('../../assets/images/home/bg.png')}>
        <ScrollView>
          <View style={styles.chart}>
            <PieChart style={{height: 200}} data={pieData} innerRadius="80%" />
            <View style={styles.total}>
              <Text>总金额</Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>￥7459.50</Text>
            </View>
            <View style={styles.carts}>
              <View style={styles.cart}>
                <Text>￥1585</Text>
                <Text>股票基金</Text>
                <View style={styles.tinter1} />
              </View>
              <View style={styles.cart}>
                <Text>￥1585</Text>
                <Text>股票基金</Text>
                <View style={styles.tinter2} />
              </View>
              <View style={styles.cart}>
                <Text>￥1585</Text>
                <Text>股票基金</Text>
                <View style={styles.tinter3} />
              </View>
            </View>
          </View>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            style={{backgroundColor: '#ffffff'}}
          />
        </ScrollView>
      </ImageBackground>
      <Overlay isVisible={visible} fullScreen>
        <View>
          <Header
            leftComponent={
              <View
                style={{display: 'flex', flexDirection: 'row'}}
                onTouchEnd={() => setVisible(false)}>
                <Icon name="angle-left" size={20} />
                <Text style={{marginLeft: 6}}>返回</Text>
              </View>
            }
            backgroundColor="transprant"
          />
          <ScrollView>
            <View style={styles.detailTitle}>
              <Text>汇添富和聚宝基金</Text>
              <Text>0.74444</Text>
            </View>
            <ButtonGroup
              onPress={(i) => setSelectedIndex(i)}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={{height: 30}}
            />
            <StackedAreaChart
              style={{height: 200, paddingVertical: 16}}
              data={data2}
              keys={keys}
              colors={colors}
              // curve={shape.curveNatural}
              showGrid={false}
              svgs={svgs}
            />
            <View style={styles.flex1}>
              <Button title="买" buttonStyle={{width: 180}} />
              <Button title="卖" buttonStyle={{width: 180}} />
            </View>
            <View style={{paddingBottom: 40}}>
              {Nums.map((item) => {
                return (
                  <View
                    key={item}
                    style={styles.one}
                    onTouchEnd={() => setVisible(true)}>
                    <View style={styles.oneLeft}>
                      <Text>000600</Text>
                      <Text>汇添富和聚宝基金</Text>
                    </View>
                    <Text style={styles.oneMid}>0.7333</Text>
                    <Text style={styles.oneRight}>2.748%</Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </Overlay>
    </View>
  );
};

export default Custom;
