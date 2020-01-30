import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function List({ onPressItem, list }) {
      const renderItem = (text, i) => {
            return (
                  <TouchableOpacity
                        style={styles.item}
                        onPress={() => onPressItem(i)}
                  >
                        <Text>{text}</Text>
                  </TouchableOpacity>
            );
      };

      return <View>{list.map(renderItem)}</View>;
}

const styles = StyleSheet.create({
      item: {
            backgroundColor: "whitesmoke",
            marginBottom: 5,
            padding: 15
      },
      boxSmall: {
            width: 200,
            height: 200,
            marginBottom: 10,
            marginRight: 10,
            backgroundColor: "skyblue"
      }
});
