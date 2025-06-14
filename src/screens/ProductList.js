import React, { useState } from 'react';
import { View, Text, FlatList, Modal, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
    const [cart, setCart] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        { id: '1', name: 'Peluche Goro Majima Pirata', price: '$300.00 USD', image: 'https://www.picclickimg.com/ua0AAOSw9EFnu9pK/Mu%C3%B1eco-de-peluche-Ryu-Ga-Gotoku-Goro-Majima.webp'},
        { id: '2', name: 'Peluche Kiryu Kazuma', price: '$250.00 USD', image: 'https://i.ebayimg.com/images/g/NBwAAOSw3i1llo7j/s-l1200.jpg'},
        { id: '3', name: 'Peluche Akira Nishikiyama', price: '$150.00 USD', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEz5qJu9ILK84wnC0_mxBmIAIAM8CmtXANww&s'},
        { id: '4', name: 'Peluche Goro Majima', price: '$200.00 USD', image: 'https://i.ebayimg.com/images/g/O9MAAOSwph1ljFZa/s-l400.jpg'},

    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalVisible(true);
    };

    const renderItem = ({ item }) => (
        <ProductCard product={item} onAddToCart={() => addToCart(item)} onPress={() => openModal(item)} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
            <Modal visible={modalVisible} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    {selectedProduct && (
                        <View style={styles.modalContent}>
                            <Image source={{ uri: selectedProduct.image }} style={styles.image} />
                            <Text style={styles.title}>{selectedProduct.name}</Text>
                            <Text style={styles.price}>{selectedProduct.price}</Text>
                            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
                        </View>
                    )}
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default ProductList;
