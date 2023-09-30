import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../../styles";

const Todo = ({ todo, removeHandel }) => {
    const navigation = useNavigation();
    return (
        <View style={{}}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Todo-details', todo)}
                style={styles.todo}
            >
                <Text style={{ color: '#fff', flex: 4 }}>{todo.title}</Text>
                <Ionicons
                    name="trash-outline"
                    color={"#6F35A5"} size={25}
                    onPress={() => removeHandel(todo)}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Todo;
