import React, { useState } from 'react';
import { View, Text, FlatList, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const categories = [
    { id: '1', title: 'Nintendo Hardware', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Micrologo_Nintendo.svg/999px-Micrologo_Nintendo.svg.png' },
    { id: '2', title: 'Mario Bros', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6KDh8_6q8PZy5QanQEsAw14KqW71LkeoQA&s' },
    { id: '3', title: 'The Legend of Zelda', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzn7dwpxQ8fk8-i9u5alZx7ms7IPZS1ZRAV3MZAr4a8XrhEhIP-LFmv43JpLk7ApPduM&usqp=CAU' },
    { id: '4', title: 'Mortal Kombat', imageUrl: 'https://i.pinimg.com/originals/f1/16/9b/f1169b9523324b3c89dcc39c1dcb3ea4.png' },
    { id: '5', title: 'Yakuza: Like a Dragon', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/ca/Yakuza_original_logo.png' },

];

const carouselImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_j4qjdOtt26_vlfApnYjDTr_m1qbuOP4fHw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFsGnqU1_KYg3y6QdxVKts3hgzu5O2eOglQlBtoFV2u1Ox53nkmvBBMnT4DPEFhRliow&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDLcob128RhS9C8TO_v3RKNpMM-jhpxKL4Dw&s',
];

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Bienvenido a MariShop</Text>
            
            <Text style={styles.sectionTitle}>Categorías</Text>
            <FlatList
                data={categories}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.categoryItem}>
                        <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
                        <Text style={styles.categoryText}>{item.title}</Text>
                    </View>
                )}
            />
            
            <Text style={styles.sectionTitle}>Ofertas especiales</Text>
            <View style={styles.carouselContainer}>
                <TouchableOpacity onPress={prevImage}>
                    <Text style={styles.carouselButton}>{'<'}</Text>
                </TouchableOpacity>
                <Image source={{ uri: carouselImages[currentImage] }} style={styles.carouselImage} />
                <TouchableOpacity onPress={nextImage}>
                    <Text style={styles.carouselButton}>{'>'}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
    sectionTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
    categoryItem: { alignItems: 'center', marginRight: 15 },
    categoryImage: { width: 100, height: 100, borderRadius: 10 },
    categoryText: { marginTop: 5, fontSize: 16 },
    carouselContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20 },
    carouselImage: { width: Dimensions.get('window').width * 0.8, height: 150, borderRadius: 10 },
    carouselButton: { fontSize: 24, fontWeight: 'bold', paddingHorizontal: 10 },
});

export default Home;
