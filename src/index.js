import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StatusBar,
  Navigator
} from 'react-native';

import {Provider} from 'react-redux';
import store from './store';
import App from './components/App.js';
import SplashPage from './components/SplashPage.js';
import SelectView from './components/SelectView.js';

export default class vocab extends Component{
   renderScene(route, navigator) {
    var routeId = route.id;
    switch(routeId){
      case 'SplashPage':{
        return <SplashPage navigator={navigator} />
      }
      case 'SelectView':{
        return <SelectView navigator={navigator} />
      }
      case 'App':{
        return <App navigator={navigator} />
      }
    }
  }

  render(){
    return (
        <Provider store={store}>
        <Navigator
          style={{ flex:1 }}
          initialRoute={{ id: 'SplashPage', name: 'Splash' }}
          renderScene={ this.renderScene.bind(this) }/>
        </Provider>
    );
  }
}
AppRegistry.registerComponent('vocab', () => vocab);
