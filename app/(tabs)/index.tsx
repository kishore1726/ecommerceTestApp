import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const featuredProducts = [
    { id: 1, name: 'Product 1', price: 99.99, image: 'https://picsum.photos/200' },
    { id: 2, name: 'Product 2', price: 149.99, image: 'https://picsum.photos/200' },
    { id: 3, name: 'Product 3', price: 199.99, image: 'https://picsum.photos/200' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.banner}>
        <Card.Cover source={{ uri: 'https://picsum.photos/800/400' }} />
        <Card.Content>
          <Text variant="headlineMedium">Welcome to ShopEase</Text>
          <Text variant="bodyMedium">Discover amazing products at great prices!</Text>
        </Card.Content>
      </Card>

      <Text variant="titleLarge" style={styles.sectionTitle}>Featured Products</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productsScroll}>
        {featuredProducts.map((product) => (
          <Card key={product.id} style={styles.productCard}>
            <Card.Cover source={{ uri: product.image }} />
            <Card.Content>
              <Text variant="titleMedium">{product.name}</Text>
              <Text variant="bodyLarge">${product.price}</Text>
            </Card.Content>
            <Card.Actions>
              <Link href={`/products/${product.id}`} asChild>
                <Button mode="contained">View Details</Button>
              </Link>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>

      <View style={styles.categoriesSection}>
        <Text variant="titleLarge" style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoriesGrid}>
          <Link href="/products?category=electronics" asChild>
            <Card style={styles.categoryCard}>
              <Card.Content>
                <Text variant="titleMedium">Electronics</Text>
              </Card.Content>
            </Card>
          </Link>
          <Link href="/products?category=fashion" asChild>
            <Card style={styles.categoryCard}>
              <Card.Content>
                <Text variant="titleMedium">Fashion</Text>
              </Card.Content>
            </Card>
          </Link>
          <Link href="/products?category=home" asChild>
            <Card style={styles.categoryCard}>
              <Card.Content>
                <Text variant="titleMedium">Home</Text>
              </Card.Content>
            </Card>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}

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
  productsScroll: {
    paddingHorizontal: 8,
  },
  productCard: {
    width: 200,
    margin: 8,
  },
  categoriesSection: {
    marginTop: 16,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  categoryCard: {
    width: '45%',
    margin: 8,
  },
});
