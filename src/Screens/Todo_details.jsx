import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { styles } from '../../styles';

const TodoDetails = () => {
    const params = useRoute().params;
    return (
        <View style={styles.container}>
            {params && (
                <>
                    <Text style={styles.text}>{params.title}</Text>

                    <Text style={styles.subText}>{params.description}</Text>
                </>
            )}
        </View>
    );
};

export default TodoDetails;
