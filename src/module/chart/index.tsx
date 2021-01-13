import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  Text,
  ScrollView,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {Input, Button} from 'react-native-elements';
// import {WebView} from 'react-native-webview';
// import Webviewbox from './webviewbox';
import {
  Grid,
  AreaChart,
  StackedAreaChart,
  BarChart,
  StackedBarChart,
  LineChart,
  PieChart,
  ProgressCircle,
  YAxis,
  XAxis,
} from 'react-native-svg-charts';

const screenHeight = Dimensions.get('window').height;

interface IProps {
  navigation?: any;
}

const Custom = (props: IProps) => {
  const {} = props;
  const styles = StyleSheet.create({
    bg: {
      height: screenHeight,
      width: '100%',
    },
    chart: {
      backgroundColor: '#ffffff',
      width: '100%',
      height: '100%',
    },
  });
  const data1 = [
    50,
    10,
    40,
    95,
    -4,
    -24,
    85,
    91,
    35,
    53,
    -53,
    24,
    50,
    -20,
    -80,
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
  const fill = 'rgb(134, 65, 244)';
  const data3 = [
    50,
    10,
    40,
    95,
    -4,
    -24,
    null,
    85,
    undefined,
    0,
    35,
    53,
    -53,
    24,
    50,
    -20,
    -80,
  ];
  const data4 = [
    {
      month: new Date(2015, 0, 1),
      apples: 3840,
      bananas: 1920,
      cherries: 960,
      dates: 400,
      oranges: 400,
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
  const colors2 = ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6'];
  const keys2 = ['apples', 'bananas', 'cherries', 'dates'];
  const data5 = [
    50,
    10,
    40,
    95,
    -4,
    -24,
    85,
    91,
    35,
    53,
    -53,
    24,
    50,
    -20,
    -80,
  ];
  const data6 = [
    50,
    10,
    40,
    95,
    -4,
    -24,
    85,
    91,
    35,
    53,
    -53,
    24,
    50,
    -20,
    -80,
  ];
  const randomColor = () =>
    ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
      0,
      7,
    );
  const pieData = data6
    .filter((value) => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    }));
  const data7 = [
    50,
    10,
    40,
    95,
    -4,
    -24,
    85,
    91,
    35,
    53,
    -53,
    24,
    50,
    -20,
    -80,
  ];
  const data8 = [
    50,
    10,
    40,
    95,
    -4,
    -24,
    85,
    91,
    35,
    53,
    -53,
    24,
    50,
    -20,
    -80,
  ];

  const contentInset = {top: 20, bottom: 20};
  return (
    <View>
      <ImageBackground
        style={styles.bg}
        source={require('../../assets/images/home/bg.png')}>
        <ScrollView>
          <View style={styles.chart}>
            <Text>AreaChart</Text>
            <AreaChart
              style={{height: 200}}
              data={data1}
              contentInset={{top: 30, bottom: 30}}
              // curve={shape.curveNatural}
              svg={{fill: 'rgba(134, 65, 244, 0.8)'}}>
              <Grid />
            </AreaChart>
            <Text>StackedAreaChart</Text>
            <StackedAreaChart
              style={{height: 200, paddingVertical: 16}}
              data={data2}
              keys={keys}
              colors={colors}
              // curve={shape.curveNatural}
              showGrid={false}
              svgs={svgs}
            />
            <Text>BarChart</Text>
            <BarChart
              style={{height: 200}}
              data={data3}
              svg={{fill}}
              contentInset={{top: 30, bottom: 30}}>
              <Grid />
            </BarChart>
            <Text>StackedBarChart</Text>
            <StackedBarChart
              style={{height: 200}}
              keys={keys2}
              colors={colors2}
              data={data4}
              showGrid={false}
              contentInset={{top: 30, bottom: 30}}
            />
            <Text>LineChart</Text>
            <LineChart
              style={{height: 200}}
              data={data5}
              svg={{stroke: 'rgb(134, 65, 244)'}}
              contentInset={{top: 20, bottom: 20}}>
              <Grid />
            </LineChart>
            <Text>PieChart</Text>
            <PieChart style={{height: 200}} data={pieData} />
            <Text>ProgressCircle</Text>
            <ProgressCircle
              style={{height: 200}}
              progress={0.7}
              progressColor={'rgb(134, 65, 244)'}
            />
            <Text>YAxis LineChart</Text>
            <View style={{height: 200, flexDirection: 'row'}}>
              <YAxis
                data={data7}
                contentInset={contentInset}
                svg={{
                  fill: 'grey',
                  fontSize: 10,
                }}
                numberOfTicks={10}
                formatLabel={(value) => `${value}ºC`}
              />
              <LineChart
                style={{flex: 1, marginLeft: 16}}
                data={data7}
                svg={{stroke: 'rgb(134, 65, 244)'}}
                contentInset={contentInset}>
                <Grid />
              </LineChart>
            </View>
            <Text>XAxis LineChart</Text>
            <View style={{height: 200, padding: 20}}>
              <LineChart
                style={{flex: 1}}
                data={data8}
                gridMin={0}
                contentInset={{top: 10, bottom: 10}}
                svg={{stroke: 'rgb(134, 65, 244)'}}>
                <Grid />
              </LineChart>
              <XAxis
                style={{marginHorizontal: -10}}
                data={data8}
                formatLabel={(value, index) => index}
                contentInset={{left: 10, right: 10}}
                svg={{fontSize: 10, fill: 'black'}}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Custom;
