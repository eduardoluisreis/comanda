import React from 'react';
import { View, Text } from 'react-native';
import ProductCard from './components/Card/index'; 

const App = () => {
  const productData1 = {
    title: 'Beef Burguer',
    description: '70 calorias',
    price: 12.99,
    image: './assets/hamburguer.jpg',
  };
  
    const productData2 = {
      title: 'Pancakes',
      description: '50 calorias',
      price: 15.99,
      image: './assets/panqueca.png',
    };

  return (
    <View>
      <Text>COMANDA</Text>
      <ProductCard product={productData1} />     
      <ProductCard product={productData2} />
    </View>
  );
};

export default App;
