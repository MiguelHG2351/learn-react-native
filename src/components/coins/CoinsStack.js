import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CoinsDetailsScreen from '../coinDetails/coinsDetailsScreen';

const Stack = createStackNavigator();

const CoinsStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#0d1117',
              shadowColor: '#3c6095',
            },
            headerTintColor: '#fff'
          }}>
            <Stack.Screen
                options={{
                    title: 'Es hacker ;)',
                    headerTitleAlign: 'center',
                }}
                name="Coins 1"
                component={CoinsScreen}
            />
            <Stack.Screen
                name="Coins2"
                component={CoinsDetailsScreen}
            />
        </Stack.Navigator>
    );
};

export default CoinsStack;
