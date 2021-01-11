import React from 'react';
import {ScrollView, View, Dimensions, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import {PieChart} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;

interface IProps {
  navigation: any;
}

const Page1 = (props: IProps) => {
  const {navigation} = props;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      width: '100%',
      height: 400,
    },
  });
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const data4 = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];
  return (
    <>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => navigation.openDrawer(),
        }}
        centerComponent={{
          text: 'Dashboard',
          style: {color: '#fff'},
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <PieChart
            data={data4}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor={'population'}
            backgroundColor={'transparent'}
            paddingLeft={'15'}
            center={[10, 50]}
            absolute
          />
        </View>
      </ScrollView>
    </>
  );
};
export default Page1;
