import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignSelf: 'center',
  },
  imageStyles: {
    marginLeft: 60,
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  informationContainer: {
    flex: 4,
  },
  informationSubcontainer: {
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginTop: 15,
  },
  nameStyles: {
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
    height: 65,
    backgroundColor: '#ff8000',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
  },
  buttonStyles: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  textButtonStyles: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  backIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 20,
  },
  cartButtonStyles: {marginRight: 20, alignSelf: 'center'},
  iconCartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#ff8000',
  },
  yeastTextStyles: {alignSelf: 'center', fontWeight: 'bold', color: '#fff'},
  addCartButtonContainer: {alignSelf: 'center'},
  iconButtonCart: {marginHorizontal: 10},
});

export default styles;
