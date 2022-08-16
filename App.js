import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Text,
  View,
} from 'react-native';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

export default function App() {
  // console.log(Dimensions.get('window'));
  console.log(useDimensions());
  const { landscape } = useDeviceOrientation();

  return (
    // <SafeAreaView style={styles.container}>
    //   <View
    //     style={{
    //       backgroundColor: 'dodgerblue',
    //       width: '100%',
    //       height: landscape ? '100%' : '30%',
    //     }}
    //   ></View>
    // </SafeAreaView>
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row', //default in react native is "column"
        justifyContent: 'center',
        alignItems: 'center',
        // alignContent: 'center', //works only if wrapping is enabled
        // flexWrap: 'wrap',
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',
          // flex: 2,
          // flexBasis: 200, // width/height related to the main axes (row/column)
          // flexGrow: 1, // takes all available space
          // flexShrink: 1, //shrink so other items can fit
          width: 100,
          height: 100,
          // alignSelf: 'flex-end',
        }}
      />

      <View
        style={{
          backgroundColor: 'gold',
          // flex: 1,
          width: 100,
          height: 100,
          // position: 'relative', //by default
          top: -20,
        }}
      />

      <View
        style={{
          backgroundColor: 'tomato',
          // flex: 1,
          width: 100,
          height: 100,
          right: 30,
        }}
      />
      {/* <View
        style={{
          backgroundColor: 'grey',
          // flex: 1,
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'greenyellow',
          // flex: 1,
          width: 100,
          height: 100,
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
