import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';

import api from '../service/api'

const Main = ({ navigation }) => {

  const [ beers, setBeers] = React.useState([]);
  const [search, setSearch] = React.useState('');

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await api.get('/beers');
    setBeers(response.data);
  }

  const showList = () => {
    const teste  = getBeersFiltered();
      
      if(teste.length == 0){
        return (
          <View style={styles.sectionContainer}> 
            <Text>No results :( </Text>
          </View>
        )
      } 

      return (
        <FlatList
          data={teste}
          renderItem={({ item }) => renderItem(item) }
          keyExtractor={item => item.id}
        />
      ) 
  }

  const getBeersFiltered = () => {
    const results = beers.filter(beer =>
      search == undefined || search == '' ? beers : beer.name.toLowerCase().includes(search.toLowerCase())
    )
     return results;
  }

  const renderItem = ( item ) => (
      <View style={styles.itemContainer}>
        <Image style={styles.logo} resizeMode="contain" source={{uri: item.image_url}} />
        <View style={styles.sectionDescription}>
          <Text style={styles.textTitle}>
            {item.name}
          </Text>
          <Text style={styles.textDescription}>
            {item.tagline}
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => {
            {navigation.navigate("Product", {product: item})}
          }}>
            <Text style={styles.whiteText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    )

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionCart}>
              <TouchableOpacity onPress={() => {
                {navigation.navigate("Cart")}}} >
                <Text>My cart</Text> 
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.inputText}
              placeholder="What are we going to drink today?"
              onChangeText={text => setSearch(text)}
              defaultValue={search}
            />
            <View style={styles.sectionContainer}>
              {showList()}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFA500',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 15,
  },
  sectionDescription: {
    marginLeft: 14,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginTop: 8,
  },
  textDescription: {
    marginTop: 2,
    fontSize: 14,
    fontWeight: '400',
    color: 'gray',
  },
  logo: {
    width: 50,
  },
  button: {
    marginTop: 10,
    fontWeight: '600',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    width: 120,
    alignItems: 'center',
    borderRadius: 5,
    padding: 5
  },
  itemContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20
  },
  inputText: {
   height: 40, 
   backgroundColor: 'white',
   borderWidth: 1,
   borderRadius: 5,
   borderColor: '#a0a0a0',
   paddingHorizontal: 8,
   margin: 20
  },
  sectionCart: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 20,
    paddingHorizontal: 15
  },
  whiteText: {
    color: 'white',
  }
});

export default Main