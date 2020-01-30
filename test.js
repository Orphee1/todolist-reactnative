const foo = ["a", "b", "c"];
const bar = ["d", "e", "f"];

const newFoo = ["z", ...foo];
// console.log(newFoo);

// const tab = [10, 1, 123, 4, 34, 56];
// const overTen = Number => {
//       return Number > 10;
// };

// const filtered = tab.filter(overTen);
// console.log(filtered);

const words = [
      "spray",
      "limit",
      "elite",
      "exuberant",
      "destruction",
      "present"
];

const wordFilterLength = word => {
      return word.length > 6;
};
// const filtered = words.filter((word, i) => i !== 5);

const filtered = words.splice(2, 1);

console.log(filtered);

// const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
// const x = foo.filter();

// onRemoveTodo = index => {
//       const { tasks } = this.state;
//       this.setState({
//             tasks: tasks.filter((task, i) => i !== index)
//       });
// };
// console.log(...newFoo);

// console.log(...foo);
// console.log(foo);
// console.log(...bar);
// console.log(...foo, ...bar);

// console.log([...foo, ...bar]);
