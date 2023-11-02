import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    FlatList,
} from 'react-native';
import { ContactContent } from './content';
export default function ContactScreen() {
    return (
        <View>
            <FlatList
                data={ContactContent}
                renderItem={({ item, key }) =>
                    <View key={key} className={`flex items-center flex-row bg-white shadow-sm mt-[1px] p-2`}>
                        <View className={`flex items-center`}>
                            <Text className={`text-[35px] text-center w-[50px] h-[50px] rounded-full`} style={[{ backgroundColor: `${item.color}` }]}>{item.name[0].toUpperCase()}</Text>
                        </View>
                        <View className={`pl-3 w-[85%]`}>
                            <Text className={`text-[20px]`}>{item.name}</Text>
                        </View>
                    </View>

                }
            />

        </View>
    )
}
