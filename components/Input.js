import React, { useState, Component } from "react";
import { TextInput, StyleSheet } from "react-native";

// export default class Input extends Component {
export default function Input({
      placeholder,
      onSubmitEditing,
      tasks,
      setTasks
}) {
      const [text, setText] = useState();
      console.log("test " + text);

      return (
            <TextInput
                  style={styles.input}
                  value={text}
                  placeholder={placeholder}
                  onChangeText={text => {
                        setText(text);
                  }}
                  onSubmitEditing={() => {
                        const newTasks = [text, ...tasks];
                        setTasks(newTasks);
                        // const newTasks = [...tasks];
                        // newTasks.push(text);
                        // setTasks(newTasks);

                        // setTasks([text, ...tasks]);
                        console.log("submited");
                        setText("");
                  }}
            />
      );
}

const styles = StyleSheet.create({
      input: {
            padding: 15,
            height: 50
      }
});
