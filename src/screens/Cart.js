import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const Cart = () => {
    const [cart, setCart] = useState([
        { id: '1', name: 'Producto 1', price: 10.99 },
        { id: '2', name: 'Producto 2', price: 15.49 },
        { id: '3', name: 'Producto 3', price: 7.99 },
    ]);

    const handleRemoveItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
        Alert.alert('Eliminado', 'El producto ha sido eliminado del carrito');
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    const renderCartItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name} - ${item.price.toFixed(2)}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleRemoveItem(item.id)}>
                <Text style={styles.buttonText}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Carrito de Compras</Text>
            <FlatList
                data={cart}
                keyExtractor={item => item.id}
                renderItem={renderCartItem}
            />
            <Text style={styles.total}>Total: ${calculateTotal()}</Text>
            <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutText}>Comprar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    itemContainer: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
    itemText: { fontSize: 18 },
    button: { backgroundColor: 'red', padding: 8, borderRadius: 5 },
    buttonText: { color: 'white', fontSize: 16 },
    total: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
    checkoutButton: { backgroundColor: 'green', padding: 15, alignItems: 'center', borderRadius: 5 },
    checkoutText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});

export default Cart;