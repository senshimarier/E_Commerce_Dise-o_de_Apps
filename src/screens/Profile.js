import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
    const [name, setName] = useState('Prueba de ejemplo');
    const [email, setEmail] = useState('prueba@gmail.com');
    const [image, setImage] = useState('https://img.freepik.com/vector-premium/icono-perfil-simple-color-blanco-icono_1076610-50204.jpg?semt=ais_hybrid');

    const handleNameChange = (text) => {
        setName(text);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handleChangeProfileImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert('Permiso requerido', 'Se necesitan permisos para acceder a la galería');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        console.log("Resultado de selección de imagen: ", result);

        if (!result.canceled && result.assets.length > 0) {
            const imageUri = result.assets[0].uri;
            console.log("Imagen seleccionada URI: ", imageUri);
            setImage(imageUri);
            Alert.alert('Imagen actualizada', 'Tu imagen de perfil ha sido actualizada.');
        }
    };

    const handleSaveChanges = () => {
        Alert.alert('Cambios guardados', 'Tu perfil ha sido actualizado.');
    };

    return (
        <View style={styles.container}>

            <View style={styles.profileImageContainer}>
                <Image source={{ uri: image }} style={styles.profileImage} />
                <TouchableOpacity onPress={handleChangeProfileImage} style={styles.changeImageButton}>
                    <Text style={styles.changeImageText}>Cambiar Imagen</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.label}>Nombre:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={handleNameChange}
            />

            <Text style={styles.label}>Correo Electrónico:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
            />

            <Button title="Guardar Cambios" onPress={handleSaveChanges} color="#625dff" />

        </View>
    );    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    profileImageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    changeImageButton: {
        backgroundColor: '#625dff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    changeImageText: {
        color: 'white',
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 20,
    },    
});

export default Profile;