import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 3,
    padding: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageStyles: {
    width: 200,
    height: 200,
  },
  informationContainer: {
    flex: 4,
  },
  informationSubcontainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  nameStyles: {
    alignSelf: 'center',
    fontSize: 25,
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
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    textAlign: 'justify',
    marginHorizontal: 10,
  },
  ingredientsContainer: {
    flex: 4,
    backgroundColor: '#ffcc99',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  ingredientsTitleContainer: {
    justifyContent: 'center',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    backgroundColor: '#ffcc99',
  },
  ingredientsTextStyles: {
    fontSize: 25,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    color: '#555',
  },
  ingredientsSubcontainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    borderBottomEndRadius: 20,
    borderTopStartRadius: 20,
  },
  textIngredientsDescription: {
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#ffcc99',
    justifyContent: 'center',
  },
  buttonStyles: {
    alignSelf: 'center',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  textButtonStyles: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
