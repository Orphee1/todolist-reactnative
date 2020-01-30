import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

export default function Title({ title }) {
      return (
            <View style={styles.header}>
                  <Text style={styles.title}>{title}</Text>
            </View>
      );
}

const styles = StyleSheet.create({
      header: {
            backgroundColor: "skyblue",
            paddingTop: Constants.statusBarHeight,
            padding: 15
      },
      title: {
            textAlign: "center",
            color: "white"
      }
});
