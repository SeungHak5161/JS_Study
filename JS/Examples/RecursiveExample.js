// const btnEl = document.getElementById(".button");

export default function RecursiveExample(elm) {
  if (elm.nodeType == 3) {
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
    console.log(`i : ${i}`);
    count += RecursiveExample(child);
  }
  return count;
}
