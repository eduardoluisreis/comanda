import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductCard = ({ product }) => {
  const { title, description, price, image  } = product;
  
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.descriptio}>{description}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
    
  );
};



const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default ProductCard;

