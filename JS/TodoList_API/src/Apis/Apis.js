export async function fetchData(params) {
  const username = params.username;
  const method = params.method;
  const res = await fetch(`https://todo-api.roto.codes/${username}`, {
    method: method,
  });
  return await res.json();
}

// export async function onClick(id) {
//   await fetch(`https://todo-api.roto.codes/test123/${id}/toggle`, {
//     method: "PUT",
//   });
//   const updatedData = await fetchData();
//   todoList.setState(updatedData);
// }

// export async function onRemove(id) {
//   await fetch(`https://todo-api.roto.codes/test123/${id}`, {
//     method: "DELETE",
//   });
//   const updatedData = await fetchData();
//   todoList.setState(updatedData);
// }

// export async function onAdd(inputData) {
//   await fetch(`https://todo-api.roto.codes/test123`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       content: `${inputData}`,
//     }),
//   });
//   const updatedData = await fetchData();
//   todoList.setState(updatedData);
// }
