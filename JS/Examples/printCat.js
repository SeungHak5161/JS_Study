const users = [
  {
    name: "roto",
    type: "human",
  },
  {
    name: "nana",
    type: "cat",
  },
  {
    name: "chai",
    type: "cat",
  },
];

function printCats() {
  let str = "";
  users.forEach((el) => {
    if (el.type == "cat") {
      str = str + el.name;
    }
  });
  console.log(str);
}
printCats();
