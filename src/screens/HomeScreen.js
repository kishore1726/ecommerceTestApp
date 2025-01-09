import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  const featuredProducts = [
    { id: 1, name: 'Product 1', price: 99.99, image: 'https://placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 149.99, image: 'https://placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 199.99, image: 'https://placeholder.com/150' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.banner}>
        <Card.Cover source={{ uri: 'https://placeholder.com/banner' }} />
        <Card.Content>
          <Text variant="headlineMedium">Welcome to ShopEase</Text>
          <Text variant="bodyMedium">Discover amazing products at great prices!</Text>
        </Card.Content>
      </Card>

      <Text variant="titleLarge" style={styles.sectionTitle}>Featured Products</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {featuredProducts.map((product) => (
          <Card key={product.id} style={styles.productCard}>
            <Card.Cover source={{ uri: product.image }} />
            <Card.Content>
              <Text variant="titleMedium">{product.name}</Text>
              <Text variant="bodyLarge">${product.price}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.navigate('Products', { id: product.id })}>
                View Details
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  banner: {
    margin: 16,
  },
  sectionTitle: {
    margin: 16,
    fontWeight: 'bold',
  },
  productCard: {
    width: 200,
    margin: 8,
  },
});

export default HomeScreen;
