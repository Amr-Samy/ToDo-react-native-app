import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { styles } from '../../styles';

const TodoDetails = () => {
    const params = useRoute().params;

    function convertMS(old, now) {
        const ms = parseInt(now) - parseInt(old);
        console.log(ms);
        var d, h, m, s;
        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;

        var pad = function (n) { return n < 10 ? '0' + n : n; };

        var result = d + ' days ' + pad(h) + ' houres ' + pad(m) + ' minutes';
        return result;
    };
    return (
        <View style={styles.container}>
            {params && (
                <>
                    <Text style={styles.text}>{params.title}</Text>

                    <Text style={styles.subText}>{params.description}</Text>

                    <Text style={styles.subText}>Added since : {convertMS(params.id, Date.now())}</Text>
                </>
            )}
        </View>
    );
};

export default TodoDetails;
