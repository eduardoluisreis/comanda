import React from 'react';
import { View, Text } from 'react-native';
import ProductCard from './components/Card/index'; // Importe o componente ProductCard

const App = () => {
  const productData = {
    title: 'Beef Burguer',
    description: '70 calorias',
    price: 12.99,
    image: 'https://br.freepik.com/fotos-gratis/hamburguer-saboroso-isolado-no-fundo-branco-fastfood-de-hamburguer-fresco-com-carne-e-queijo_38117312.htm#query=hamburger&position=0&from_view=keyword&track=sph&uuid=673bdb6b-9872-43e1-8304-e1dc7dce6afd',
  };

  return (
    <View>
      <Text>COMANDA</Text>
      <ProductCard product={productData} /> {/* Passando os dados do produto para o componente ProductCard */}
    </View>
  );
};

export default App;
