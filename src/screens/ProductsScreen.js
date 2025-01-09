import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, Button, Searchbar } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Product 1', price: 99.99, description: 'Amazing product 1', image: 'https://placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 149.99, description: 'Amazing product 2', image: 'https://placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 199.99, description: 'Amazing product 3', image: 'https://placeholder.com/150' },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const renderProduct = ({ item }) => (
    <Card style={styles.productCard}>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Content>
        <Text variant="titleLarge">{item.name}</Text>
        <Text variant="bodyMedium">{item.description}</Text>
        <Text variant="titleMedium">${item.price}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => handleAddToCart(item)}>Add to Cart</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search products"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    margin: 16,
  },
  productList: {
    padding: 16,
  },
  productCard: {
    marginBottom: 16,
  },
});

export default ProductsScreen;
