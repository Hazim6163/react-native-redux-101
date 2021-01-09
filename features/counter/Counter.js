import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
} from './counterSlice';

import { View, Text, Button, TextInput } from 'react-native'


const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementMount, setIncrementMount] = useState('2');

    return (
        <View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Button title='+' onPress={() => dispatch(increment())} style={{ padding: 30 }} />
                <Text style={{ margin: 30, padding: 5 }}>{count}</Text>
                <Button title='-' onPress={() => dispatch(decrement())} style={{ padding: 30 }} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <TextInput value={incrementMount} onChangeText={text => { setIncrementMount(text) }} style={{ borderColor: 'gray', borderWidth: 1 }} />
                <Button title='increment' onPress={() => dispatch(incrementByAmount(Number(incrementMount) || 0))} style={{ padding: 30 }} />
                <Button title='increment Async' onPress={() => dispatch(incrementAsync(Number(incrementMount) || 0))} style={{ padding: 30 }} />
            </View>
        </View>
    );
}

export default Counter;