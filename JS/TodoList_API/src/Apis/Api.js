export async function fetchAPI(params) {
  const option = params.option;
  const username = params.username;
  const id = params.id;
  const inputData = params.inputData;
  switch (option) {
    case "GET":
      const res = await fetch(`https://todo-api.roto.codes/${username}`);
      return res.json();

    case "DELAY_GET":
      const delayRes = await fetch(
        `https://todo-api.roto.codes/${username}?delay=1000`
      );
      return delayRes.json();

    case "ADD":
      await fetch(`https://todo-api.roto.codes/${username}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `${inputData}`,
        }),
      });
      break;

    case "TOGGLE":
      await fetch(`https://todo-api.roto.codes/${username}/${id}/toggle`, {
        method: "PUT",
      });
      break;

    case "REMOVE":
      await fetch(`https://todo-api.roto.codes/${username}/${id}`, {
        method: "DELETE",
      });
      break;

    case "REMOVE_ALL":
      const rmRes = await (
        await fetch(`https://todo-api.roto.codes/${username}`)
      ).json();
      rmRes.forEach(async (e) => {
        await fetch(`https://todo-api.roto.codes/${username}/${e._id}`, {
          method: "DELETE",
        });
      });
      break;

    case "GET_USER":
      const userRes = await fetch(`https://todo-api.roto.codes/users`);
      return userRes.json();
  }
}
