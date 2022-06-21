export default function checkValidity(data) {
  if (!Array.isArray(data)) {
    throw new Error("Data type is not an Array!!!");
  }
  data.forEach((data) => {
    if (
      typeof data.content !== "string" ||
      typeof data.isCompleted !== "boolean"
    ) {
      throw new Error("Invalid Data!!!");
    }
  });
}
