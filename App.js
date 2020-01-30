import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// Compos import

import List from "./components/List";
import Input from "./components/Input";
import Title from "./components/Title";

export default function App() {
      const [tasks, setTasks] = useState([
            "Click to remove",
            "Learn React Native",
            "Write Code",
            "Ship App"
      ]);

      // const onRemoveTodo = index => {
      //       setTasks(tasks.filter((task, i) => i !== index));
      // };
      const onRemoveTodo = index => {
            const newTasks = [...tasks];
            setTasks(newTasks.filter((task, i) => i !== index));
      };

      // const onRemoveTodo = index => {
      //       const newTasks = [...tasks];
      //       newTasks.splice(index, 1);
      //       setTasks(newTasks);
      // };

      return (
            <View>
                  {/* <Title>La super to-do list</Title> */}
                  <Title title="La to-do list" />
                  <Input
                        placeholder="Type a todo, then hit enter!"
                        tasks={tasks}
                        setTasks={setTasks}
                  />
                  <List list={tasks} onPressItem={onRemoveTodo} />
            </View>
      );
}
