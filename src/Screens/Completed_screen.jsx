import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../../styles';

const CompletedTodos = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/todo2.png')} style={{ width: 100, height: 100 }} />
            <Text style={styles.text}>You Already have done that!</Text>
            {/* map isDone */}
        </View>
    )
}

export default CompletedTodos