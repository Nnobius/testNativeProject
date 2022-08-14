import {View} from 'react-native';
import axios from "axios";
import React, {useState} from "react";
import {useFonts} from 'expo-font';
import AppLoading from "expo-app-loading";
import {gStyles} from "./styles/style";
import News from "./components/News/News";
import Header from "./components/Header";

export default function App() {
    const [items, setItems] = React.useState([])

    const [fontsLoaded] = useFonts({
        MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
        MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
        MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
        MontserratSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
    });

    React.useEffect(() => {
        axios.get(`https://app-api.sm117.ru/api/v1/contract/news_for_test/`).then(res => {
            setItems(res.data)
        })
    }, [])

    if (!fontsLoaded || !items) {
        return <AppLoading/>
    } else {
        return (
            <View style={gStyles.content}>
                <Header />
                <News items={items}/>
            </View>
        )
    }
}

