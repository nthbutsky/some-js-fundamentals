function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.substring(1);
}
console.log(capitalizeFirstLetter("front-end"));

// CSS option
// p::first-letter {
//   text-transform: uppercase;
// }
