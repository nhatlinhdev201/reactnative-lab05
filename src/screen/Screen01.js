import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Rating from '@mui/material/Rating';
import HelpIcon from '@mui/icons-material/Help';

const Screen01 = ({route, navigation }) => {

    return (
        <View style={styles.container}>
            <View
                style={{
                    justifyContent : 'center',
                    alignItems : 'center'
                }}
            >
                <Image
                    source={require('../image/vs_black.png')}
                    style={styles.imageProductMain}
                />
            </View>
            <Text style={{
                textAlign: 'left',
                fontSize: 17,
            }}>
                Điện Thoại Vsmart Joy 3 - Hàng chính hãng
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 15
                }}
            >
                <Rating
                    name="size-large"
                    defaultValue={5}
                    size="large"
                    style={{
                        marginRight: 10
                    }}
                />
                <Text>(Xem 828 đánh giá)</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 15
            }}>
                <Text
                    style={{
                        marginRight: 40,
                        fontSize: 18,
                        fontWeight: 700
                    }}
                >
                    1.790.000 đ
                </Text>
                <Text
                    style={{
                        marginRight: 40,
                        fontSize: 18,
                        fontWeight: 600,
                        textDecorationLine: 'line-through'
                    }}
                >
                    1.790.000 đ
                </Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 15
                }}
            >
                <Text
                    style={{
                        color: 'red',
                        fontSize: 15,
                        fontWeight: 700,
                        marginRight: 20
                    }}
                >
                    Ở ĐÂU RẺ HƠN HOÀN TIỀN
                </Text>
                <TouchableOpacity
                    onPress={() => {

                    }}
                >
                    <HelpIcon />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 8,
                    padding: 5,
                    marginTop: 20
                }}
                onPress={() =>{
                    navigation.navigate('Screen2')
                }}
            >
                <Text style={{
                    fontSize: 15,
                    color: 'black',
                    fontWeight: 600,
                    textAlign : 'center',
                }}>
                    4 MẪU CHỌN MÀU  
                    <ArrowForwardIosIcon
                        style={{
                            fontSize : 14,
                            marginLeft : 20
                        }}
                    />
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 8,
                    padding: 10,
                    marginTop: 20,
                    backgroundColor : '#CA1536'
                }}
            >
                <Text style={{
                    fontSize: 15,
                    color: 'white',
                    fontWeight: 600,

                }}>
                    CHỌN MUA
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen01

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20
    },
    imageProductMain: {
        width: 300,
        height: 350
    }
})
