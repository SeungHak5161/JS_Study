export default function checkValidity(data) {
  // setState에서 호출한 경우

  // if (!new.target) {
  //   throw new Error('Function must be declared with "new" keyword!!!');
  // }
  if (!Array.isArray(data)) {
    throw new Error("Data type is not an Array!!!");
  }
  data.forEach((data) => {
    if (
      typeof data.text !== "string" ||
      typeof data.isCompleted !== "boolean"
    ) {
      throw new Error("Invalid Data!!!");
    }
  });
}
