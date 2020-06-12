import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 4,
    marginVertical: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageStyles: {
    width: 200,
    height: 200,
  },
  informationContainer: {
    flex: 3,
  },
  informationSubcontainer: {
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginTop: 15,
  },
  nameStyles: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  taglineStyles: {
    fontSize: 15,
    fontWeight: '500',
    color: '#555',
  },
  descriptionContainer: {
    marginVertical: 10,
    justifyContent: 'center',
  },
  descriptionStyles: {
    fontSize: 14,
    fontWeight: '500',
    color: '#222',
    textAlign: 'justify',
    marginHorizontal: 10,
  },
  ingredientsContainer: {
    flex: 3,
    backgroundColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ff8000',
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  ingredientsTitleContainer: {
    justifyContent: 'center',
  },
  ingredientsTextStyles: {
    fontSize: 25,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    color: '#333',
  },
  ingredientsSubcontainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textIngredientsDescription: {
    fontSize: 16,
  },
  buttonContainer: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonStyles: {
    marginHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#ff8000',
    borderRadius: 10,
  },
  textButtonStyles: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
