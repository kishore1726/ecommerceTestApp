import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, Button, IconButton } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

const CartScreen = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const renderCartItem = ({ item }) => (
    <Card style={styles.cartItem}>
      <Card.Content style={styles.cartItemContent}>
        <View style={styles.itemInfo}>
          <Text variant="titleMedium">{item.name}</Text>
          <Text variant="bodyMedium">${item.price}</Text>
        </View>
        <View style={styles.quantityControls}>
          <IconButton
            icon="minus"
            size={20}
            onPress={() => handleUpdateQuantity(item.id, item.quantity - 1)}
          />
          <Text variant="bodyLarge">{item.quantity}</Text>
          <IconButton
            icon="plus"
            size={20}
            onPress={() => handleUpdateQuantity(item.id, item.quantity + 1)}
          />
          <IconButton
            icon="delete"
            size={20}
            onPress={() => handleRemoveItem(item.id)}
          />
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => (
          <Text style={styles.emptyCart}>Your cart is empty</Text>
        )}
      />
      {items.length > 0 && (
        <Card style={styles.totalCard}>
          <Card.Content>
            <Text variant="titleLarge">Total: ${total.toFixed(2)}</Text>
            <Button mode="contained" style={styles.checkoutButton}>
              Proceed to Checkout
            </Button>
          </Card.Content>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  cartItem: {
    margin: 8,
  },
  cartItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemInfo: {
    flex: 1,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyCart: {
    textAlign: 'center',
    margin: 20,
  },
  totalCard: {
    margin: 8,
  },
  checkoutButton: {
    marginTop: 10,
  },
});

export default CartScreen;
