import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Avatar, List, Divider } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!isAuthenticated) {
    return (
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>Welcome</Text>
        <Button mode="contained" style={styles.authButton}>
          Sign In
        </Button>
        <Button mode="outlined" style={styles.authButton}>
          Create Account
        </Button>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Text size={80} label={user?.name?.[0] || 'U'} />
        <Text variant="headlineSmall" style={styles.name}>{user?.name || 'User'}</Text>
        <Text variant="bodyMedium">{user?.email}</Text>
      </View>

      <List.Section>
        <List.Subheader>Account Settings</List.Subheader>
        <List.Item
          title="Edit Profile"
          left={props => <List.Icon {...props} icon="account-edit" />}
        />
        <Divider />
        <List.Item
          title="My Orders"
          left={props => <List.Icon {...props} icon="package-variant" />}
        />
        <Divider />
        <List.Item
          title="Shipping Addresses"
          left={props => <List.Icon {...props} icon="map-marker" />}
        />
        <Divider />
        <List.Item
          title="Payment Methods"
          left={props => <List.Icon {...props} icon="credit-card" />}
        />
        <Divider />
        <List.Item
          title="Notifications"
          left={props => <List.Icon {...props} icon="bell" />}
        />
      </List.Section>

      <Button 
        mode="contained" 
        onPress={handleLogout}
        style={styles.logoutButton}
      >
        Logout
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  name: {
    marginTop: 10,
    marginBottom: 5,
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
  },
  authButton: {
    margin: 10,
  },
  logoutButton: {
    margin: 16,
    backgroundColor: '#ff3b30',
  },
});

export default ProfileScreen;
