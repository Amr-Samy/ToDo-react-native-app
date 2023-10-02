import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../styles';

const TodoDetails = () => {
    const params = useRoute().params;

    function convertMS(old, now) {
        const ms = parseInt(now) - parseInt(old);
        var d, h, m, s;
        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;

        var pad = function (n) { return n < 10 ? '0' + n : n; };

        var result = d + ' d ' + pad(h) + ' h ' + pad(m) + ' min';
        return result;
    };
    return (
        <View style={styles.container}>
            {params && (
                <>
                    <Text style={styles.text}>{params.title}</Text>

                    <Text style={styles.subText}>{params.description}</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Ionicons name="hourglass-outline" color={"#6F35A5"} size={25} />
                        <View style={styles.divider} />
                        <Text style={styles.subText}>Added since : {convertMS(params.id, Date.now())}</Text>
                    </View>
                </>
            )}
        </View>
    );
};

export default TodoDetails;
