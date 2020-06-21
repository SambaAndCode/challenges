import {createStackNavigator, createAppContainer} from 'react-navigation';
import Main from './pages/main';
import Beer from './pages/beer';
import Cart from './pages/cart';

export default createAppContainer(
  createStackNavigator({
    Main,
    Beer,
    Cart,
  }),
);
