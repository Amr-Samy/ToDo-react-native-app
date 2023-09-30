import {
    View,
    Text,
    SafeAreaView,
    Image,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    Keyboard,
    Modal,
    Alert,
    Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from '../../styles';
import Input from '../components/Input/Input';
import Todos from '../components/TodosSection';
import AsyncStorage from "@react-native-async-storage/async-storage"

const Home = () => {
    const [todoList, settodoList] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        syncStorage();
        // console.log(todoList);
    }, []);

    const syncStorage = async () => {
        const localTodos = await AsyncStorage.getItem('todoList');
        if (localTodos) settodoList(JSON.parse(localTodos));
    }

    const addTodo = async () => {
        let exist = todoList.find((item) => item.title === title);
        if (title && exist === undefined) {
            const newTodo = {
                id: Date.now(),
                isDone: false,
                title,
                description,
            };
            //? todoList.push(newTodo);
            //? newList.reverse();
            const newList = [newTodo, ...todoList];
            await AsyncStorage.setItem('todoList', JSON.stringify(newList));
            settodoList(newList);
            Keyboard.dismiss();
            // console.log("added:" + newTodo + "successfully");
        }
        else if (exist != undefined) {
            // console.log("u have added that one before : " + exist);
            setModalVisible(true);
        }
    };
    const removeTodo = async (todo) => {
        let newList = todoList.filter((item) => item.id !== todo.id);
        await AsyncStorage.setItem('todoList', JSON.stringify(newList));
        settodoList(newList);
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/portal.gif')}
                style={{ width: 200, height: 200, display: Platform.OS === 'android' ? "none" : 'flex' }} >
                <Image source={require('../../assets/todo1.png')} style={{ width: 100, height: 100, top: 50, left: 50 }} />
            </ImageBackground>

            <Text style={styles.text}>What needs to be done ?</Text>
            <Input
                placeholder='Title'
                onChangeText={(value) => setTitle(value)}
                value={title}
            >
            </Input>

            <Input
                placeholder='Description'
                onChangeText={(value) => setDescription(value)}

            >
            </Input>

            <TouchableOpacity style={styles.submitBtn} onPress={addTodo}>
                <Text style={styles.text}>save</Text>
            </TouchableOpacity>

            {todoList.length !== 0 && (
                <>
                    <View style={styles.divider} />
                    <Todos todoList={todoList} removeHandel={removeTodo} />
                </>
            )}

            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            // Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.textStyle}>U already have added that one before!</Text>
                                <TouchableOpacity
                                    style={[styles.button]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </TouchableOpacity>

        </View >
    );
};
export default Home;