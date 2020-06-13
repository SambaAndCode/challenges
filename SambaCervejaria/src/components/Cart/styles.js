import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  subContainer: {
    justifyContent: 'space-between',
    width: '100%',
    height: '40%',
    backgroundColor: '#fff',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  titleContainer: {
    paddingVertical: 5,
    justifyContent: 'center',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    borderWidth: 1,
    borderColor: '#ff8000',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#333',
  },
  cartContainer: {flex: 1, justifyContent: 'center', backgroundColor: '#eee'},
  buttonContainer: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#ff8000',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    alignSelf: 'center',
  },
  textStyles: {
    color: '#000',
    alignSelf: 'center',
  },
});

export default styles;
