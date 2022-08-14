import React, {useState} from 'react';
import {Text, View} from "react-native";
import {gStyles} from "../../../styles/style";
import ImagePost from "./NewsBlocks/ImagePost";
import BodyPost from "./NewsBlocks/BodyPost";
import MyButton from "./NewsBlocks/MyButton";

const NewsItem = ({obj}) => {
    const [openText, setOpenText] = useState(false)

    const onOpen = () => {
        setOpenText(!openText)
    }

    let img = String(obj.body).match(/\"https\:\/\/[\w\-\.\/]+\"/)

    return (
        <View style={gStyles.newsBlock}>
            <Text style={gStyles.titleItem}>{obj.title}</Text>

            <BodyPost openText={openText} obj={obj}/>

            {
                img ? <ImagePost img={img}/> : <View/>
            }

            <View style={gStyles.blockDownItem}>
                <Text style={gStyles.dateItem}>{obj.date}</Text>
                <MyButton onOpen={onOpen} openText={openText} />
            </View>
        </View>
    );
};

export default NewsItem;