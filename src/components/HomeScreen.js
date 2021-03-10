import React from 'react';
import {
  View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, ScrollView,
} from 'react-native';

const itemsList = [
  {
    id: 0,
    image: require('../assets/shirt1.jpg'),
    brand: 'Tommy Hilfiger',
    detail: 'Men\'s Morrison Stripe Polo, Limelight Combo',
    Price: 23,
  },
  {
    id: 1,
    image: require('../assets/shirt2.jpg'),
    brand: 'Tommy Hilfiger',
    detail: 'Men\'s Longsleeve Hooded Sweater, White/Black/Red',
    Price: 23,
  },
  {
    id: 2,
    image: require('../assets/shirt3.jpeg'),
    brand: 'Tommy Hilfiger',
    detail: 'Men\'s Morrison Stripe Polo, Limelight Combo',
    Price: 24,
  },
  {
    id: 3,
    image: require('../assets/shirt4.jpeg'),
    brand: 'Tommy Hilfiger',
    detail: 'Men\'s Morrison Stripe Polo, Limelight Combo',
    Price: 25,
  },
  {
    id: 4,
    image: require('../assets/shirt5.jpeg'),
    brand: 'Tommy Hilfiger',
    detail: 'Men\'s Morrison Stripe Polo, Limelight Combo',
    Price: 29,
  },
  {
    id: 5,
    image: require('../assets/shirt6.jpg'),
    brand: 'Tommy Hilfiger',
    detail: 'Men\'s Morrison Stripe Polo, Limelight Combo',
    Price: 21,
  },
  {
    id: 6,
    image: require('../assets/shirt1.jpg'),
    brand: 'Tommy Hilfiger',
    detail: 'Men\'s Morrison Stripe Polo, Limelight Combo',
    Price: 29,
  },
  {
    id: 7,
    image: require('../assets/shirt2.jpg'),
    brand: 'Tommy Hilfiger',
    detail: 'Men\'s Morrison Stripe Polo, Limelight Combo',
    Price: 21,
  }];

const sortList = () => {
  itemsList.sort((obj1, obj2) => obj1.Price - obj2.Price);
  console.log(itemsList);
  alert('Your List is Sorted');
};

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>

    <Text style={styles.header}>MEN CLOTHING</Text>

    <View style={styles.horizontalLine} />
    <View style={styles.sortContainer}>
      <View>
        <Text> 195 items</Text>
      </View>

      <View style={styles.touch}>
        <TouchableOpacity style={styles.button} onPress={sortList}>
          <Image style={styles.icon} source={require('../assets/sortarrow.png')} />
          <Text style={styles.sorttext}>SORT</Text>
        </TouchableOpacity>

        <View style={styles.verticalline} />

        <TouchableOpacity style={styles.button}>
          <Image style={styles.icon} source={require('../assets/filter.png')} />
          <Text style={styles.sorttext}>FILTER</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.horizontalLine} />
    <View style={styles.midContainer}>
      <ScrollView horizontal>
        <View style={styles.optionslist}>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.listText}>Polo Shirts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.listText}>Dress Shirts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.listText}>Shorts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.listText}>T-Shirts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.listText}>Formal Shirts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.listText}>Jackets</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    <View style={{ flex: 1 }}>
      <ClothsDetails />
    </View>
    <View style={styles.horizontalLine} />
  </SafeAreaView>
);
const ClothsDetails = () => (
  <ScrollView>
    <View style={styles.clothContainer}>
      <View style={styles.clothsInfo}>
        {
                            itemsList.map(({
                              image, brand, detail, Price,
                            }) => (
                              <TouchableOpacity style={styles.listDesign}>
                                <View style={styles.imageContainer}>
                                  <Image style={styles.images} source={image} />
                                </View>
                                <View style={styles.detailsContainer}>
                                  <Text style={styles.brand}>{brand}</Text>
                                  <Text style={styles.detail}>{detail}</Text>
                                  <Text style={styles.price}>
                                    USD
                                    {Price}
                                  </Text>
                                </View>
                                <View style={styles.new}>
                                  <Text style={styles.newText}>NEW</Text>
                                </View>

                                <TouchableOpacity style={styles.wishlistContainer} onPress={() => alert('Item Entered to your WishList')}>
                                  <Image style={{ width: 25, height: 25 }} source={require('../assets/wishlist.png')} />
                                </TouchableOpacity>
                              </TouchableOpacity>
                            ))
                        }
      </View>
    </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 10,
    height: 45,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  horizontalLine: {
    borderWidth: 1,
    borderColor: 'lightgrey',

  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 3,
    paddingLeft: 10,
    height: '7%',
  },
  sorttext: {
    margin: 7,
  },

  verticalline: {
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  touch: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    flexDirection: 'row',
    marginHorizontal: 15,
    alignItems: 'center',
  },
  optionslist: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#e6e9ea',
    borderRadius: 10,
    margin: 5,
  },
  listText: {
    fontSize: 15,
    fontWeight: '500',
  },
  icon: {
    width: 20,
    height: 20,
  },

  clothContainer: {
    marginTop: 5,
  },
  clothsInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 300,
  },
  listDesign: {
    margin: 5,
    height: 400,
    width: '46%',
  },
  images: {
    width: '100%',
    height: '100%',
  },
  midContainer: {
    height: '8%',
    marginLeft: 7,
    marginTop: 6,
  },
  detailsContainer: {
    paddingTop: 10,
  },
  new: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'green',
    padding: 7,
  },
  newText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
  wishlistContainer: {
    position: 'absolute',
    top: 6,
    right: 6,
    borderRadius: 100,
    padding: 6,
    backgroundColor: 'white',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  detail: {
    fontSize: 14,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
  },

});
export default HomeScreen;
