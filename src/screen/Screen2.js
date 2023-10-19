import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Screen2 = ({route,navigation }) => {
    const products = [
        {
            "name": "Điện thoại VSmart Joy 3 Hàng chính hãng",
            "color": "Đỏ",
            "suplier": "Tiki Tradding",
            "price": "7.258.000",
            "image": "require('../image/vs_red.png')"
        },
        {
            "name": "Điện thoại VSmart Joy 3 Hàng chính hãng",
            "color": "Bạc",
            "suplier": "Tiki Tradding",
            "price": "7.258.000",
            "image": "require('../image/vs_silver.png')"
        },
        {
            "name": "Điện thoại VSmart Joy 3 Hàng chính hãng",
            "color": "Đen",
            "suplier": "Tiki Tradding",
            "price": "7.258.000",
            "image": "require('../image/vs_black.png')"
        },
        {
            "name": "Điện thoại VSmart Joy 3 Hàng chính hãng",
            "color": "Xanh dương",
            "suplier": "Tiki Tradding",
            "price": "7.258.000",
            "image": "require('../image/vs_blue.png')"
        },
    ]

    const [productInfo, setProductInfo] = useState(products[1]);

    const findProductByColor = (color, products) => {
        let product = products.find(element => element.color === color);
        return product;
    }
    
    const handleSlectedOnBlack = () => {
        setProductInfo(findProductByColor("Đen", products))
    }

    const handleSlectedOnBlue = () => {
        setProductInfo(findProductByColor("Xanh dương", products))
    }
    const handleSlectedOnSilver = () => {
        setProductInfo(findProductByColor("Bạc", products))
    }
    const handleSlectedOnRed = () => {
        setProductInfo(findProductByColor("Đỏ", products))
    }

    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: 'white'
                }}
            >
                <Image
                    /* source={productInfo.image} */ 
                    /* Note lại hỏi thầy vụ này  */
                    source={require('../image/vs_red.png')}
                    style={{
                        width: 112,
                        height: 132
                    }}
                />
                <View
                    style={{
                        flexDirection: 'column'
                    }}
                >
                    <Text
                        style={{
                            width: 250,
                            marginLeft: 10,
                            fontSize: 20,
                            color: 'black',
                            fontWeight: 500,
                            margin: 5
                        }}
                    >
                        {productInfo.name}
                    </Text>
                    <Text
                        style={{
                            marginLeft: 10,
                            fontSize: 16,
                            color: 'black',
                            margin: 5
                        }}
                    >
                        Màu : <Text style={{ fontWeight: 600 }}>{productInfo.color}</Text>
                    </Text>
                    <Text
                        style={{
                            marginLeft: 10,
                            fontSize: 16,
                            color: 'black',
                            margin: 5
                        }}
                    >
                        Cung cấp bởi <Text style={{ fontWeight: 600 }}>{productInfo.suplier}</Text>
                    </Text>
                    <Text
                        style={{
                            marginLeft: 10,
                            fontSize: 16,
                            color: 'black',
                            margin: 5
                        }}
                    >
                        Giá : <Text style={{ fontWeight: 600 }}>{productInfo.price}</Text>
                    </Text>
                </View>
            </View>
            <View
                style={{

                }}
            >
                <Text
                    style={{
                        textAlign: 'left',
                        fontSize: 20,
                        color: 'black',
                        margin: 10
                    }}
                >
                    Chọn một màu bên dưới :
                </Text>
                <View
                    style={{
                        alignItems: 'center',
                        margin: 10
                    }}
                >
                    <TouchableOpacity
                        onPress={handleSlectedOnBlack}
                    >
                        <Image
                            source={require('../image/black.png')}
                            style={{
                                width: 85,
                                height: 85,
                                margin: 5
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSlectedOnSilver}
                    >
                        <Image
                            source={require('../image/silver.png')}
                            style={{
                                width: 85,
                                height: 85,
                                margin: 5
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSlectedOnRed}
                    >
                        <Image
                            source={require('../image/red.png')}
                            style={{
                                width: 85,
                                height: 85,
                                margin: 5
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSlectedOnBlue}
                    >
                        <Image
                            source={require('../image/blue.png')}
                            style={{
                                width: 85,
                                height: 85,
                                margin: 5
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity
                        style={{

                            padding: 10,
                            backgroundColor: '#1952E2',
                            width: '90%',
                            borderRadius: 8
                        }}
                        onPress={()=>{
                            navigation.navigate('Screen4', productInfo)
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                color: "white",
                                fontWeight: 700,
                                textAlign: 'center'
                            }}
                        >
                            XONG
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default Screen2

const styles = StyleSheet.create({})
