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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/slices/Todo.sclice";


const Home = () => {
    // const [todoList, settodoList] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch();
    const { todoList } = useSelector((state) => state.todo);

    useEffect(() => {
        // syncStorage();
        // console.log(todoList);
    }, []);

    const syncStorage = async () => {
        const localTodos = await AsyncStorage.getItem('todoList');
        if (localTodos) settodoList(JSON.parse(localTodos));
    }

    const createTodo = () => {
        let exist = todoList.find((item) => item.title === title);
        if (title && exist === undefined) {
            dispatch(addTodo({ title, description }));
            Keyboard.dismiss();
        }
        else if (exist != undefined) {
            setModalVisible(true);
        }
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

            <TouchableOpacity style={styles.submitBtn} onPress={createTodo}>
                <Text style={styles.text}>save</Text>
            </TouchableOpacity>

            {todoList.length !== 0 && (
                <>
                    <View style={styles.divider} />
                    <Todos />
                </>
            )}

            {/* <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
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
            </TouchableOpacity> */}

        </View >
    );
};
export default Home;