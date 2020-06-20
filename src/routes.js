import {createStackNavigator, createAppContainer} from 'react-navigation';
import Main from './pages/main';
import Beer from './pages/beer';

export default createAppContainer(
  createStackNavigator({
    Main,
    Beer,
  }),
);
