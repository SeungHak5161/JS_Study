export default function checkValidity({ data, isNew }) {
  // setState에서 호출한 경우
  if (arguments[0].isNew === undefined) {
    const data = arguments[0];
    data.every((data) => {
      if (
        typeof data.text !== 'string' ||
        typeof data.isCompleted !== 'boolean'
      ) {
        throw new Error('Invalid Data!!!');
      }
    });
  } else {
    if (!isNew) {
      throw new Error('Function must be declared with "new" keyword!!!');
    }
    if (!Array.isArray(data)) {
      throw new Error('Data type is not an Array!!!');
    }
    data.every((data) => {
      if (
        typeof data.text !== 'string' ||
        typeof data.isCompleted !== 'boolean'
      ) {
        throw new Error('Invalid Data!!!');
      }
    });
  }
}
