import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Rating from '@mui/material/Rating';
import HelpIcon from '@mui/icons-material/Help';

const Screen4 = ({ route, navigation }) => {

    const product = route.params;
    console.log(product)
    return (
        <View style={styles.container}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }} 
            >
                <Image
                    /* source={{ uri: product.image }} */
                    /* Note lại hỏi thầy vụ này */
                    source={require('../image/vs_red.png')}
                    style={{
                        width: 300,
                        height: 350 
                    }}
                />
            </View>
            <Text style={{
                textAlign: 'left',
                fontSize: 17,
            }}>
                {product.name}
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
                    {product.price}
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
                onPress={() => {
                    navigation.navigate('Screen2')
                }}
            >
                <Text style={{
                    fontSize: 15,
                    color: 'black',
                    fontWeight: 600,
                    textAlign: 'center',
                }}>
                    4 MẪU CHỌN MÀU
                    <ArrowForwardIosIcon
                        style={{
                            fontSize: 14,
                            marginLeft: 20
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
                    backgroundColor: '#CA1536'
                }}
                onPress={() => {
                    /* product?Alert.alert('Đặt hàng thành công'):Alert.alert('Chưa có thông tin sản phẩm') */
                    product?alert(`Đặt hàng thành công sản phẩm ${product.name} màu ${product.color} giá ${product.price} vnđ `):alert('Chưa có thông tin sản phẩm')
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

export default Screen4

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20
    }
})
