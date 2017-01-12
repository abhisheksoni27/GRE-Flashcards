import React , {Component} from 'react';
import  { View, Text, BackAndroid, StatusBar } from 'react-native';

export default class SplashPage extends Component {
  componentWillMount() {
      var navigator = this.props.navigator;

      BackAndroid.addEventListener('hardwareBackPress', function () {
        if (navigator.getCurrentRoutes().length > 1 && navigator.getCurrentRoutes().length !==2) {
          navigator.pop();
          return true;
        } else if(navigator.getCurrentRoutes().length===2){
          navigator.popN(2);          
        }
        return false;
      });


    setTimeout(() => {
      navigator.push({
        id: 'SelectView',
      });
    }, 1000);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#00BCD4', alignItems: 'center', justifyContent: 'center'}}>
                <StatusBar
                 backgroundColor="#00BCD4"
                 barStyle="light-content" />
        <Text style={{color: 'white', fontSize: 32,}}>商旅易</Text>
      </View>
      
    );
  }
}
