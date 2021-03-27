import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Products from '../screens/Product/index';
import ProductDetail from '../screens/ProductDetail/index';
import AddJob from '../screens/AddJob/index';

const Stack = createStackNavigator();

function Rootnavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigatior ScreenOptions={{
              headerShow: false
            }}>;
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Products" component={Products} />
               <Stack.Screen name="ProductDetail" component={ProductDetail} />
               <Stack.Screen name="AddJob" component={AddJob} />
            </Stack.Navigatior>
        
        </NavigationContainer>
    )
}


export default Rootnavigation;