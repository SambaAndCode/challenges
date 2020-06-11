import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
  body: {
    flex: 8,
    height: '100%',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {x: 0, y: 0},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundText: {
    fontSize: 20,
    color: '#000',
  },
});

export default styles;
