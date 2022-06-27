export async function fetchAPI(params) {
  const option = params.option;
  const username = params.username;
  const id = params.id;
  const inputData = params.inputData;

  const fetching = async ({ username = "", others = "", type = "GET" }) => {
    const url = "https://todo-api.roto.codes/";
    try {
      // console.log(`${url}${username}${others}`);
      const res = await fetch(`${url}${username}${others}`, {
        method: `${type}`,
      });
      console.log(res);
      if (!res.ok) {
        throw new Error("Response Error");
      }
      return res;
    } catch (error) {
      alert(`API 요청이 실패했습니다.`);
    }
  };

  switch (option) {
    case "GET":
      const res = await fetching({ username: username });
      return res.json();

    case "DELAY_GET":
      const delayRes = await fetching({
        username: username,
        others: "?delay=50",
      });
      return delayRes.json();

    case "ADD":
      try {
        const res = await fetch(`https://todo-api.roto.codes/${username}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: `${inputData}`,
          }),
        });
        if (!res.ok) {
          throw new Error("Response Error");
        }
      } catch (error) {
        alert("API 요청이 실패했습니다.(ADD)");
      }
      break;

    case "TOGGLE":
      await fetching({
        username: username,
        others: `/${id}/toggle`,
        type: "PUT",
      });
      break;

    case "REMOVE":
      await fetching({
        username: username,
        others: `/${id}`,
        type: "DELETE",
      });
      break;

    case "REMOVE_ALL":
      const rmRes = await (await fetching({ username: username })).json();
      rmRes.forEach(async (e) => {
        await fetching({
          username: username,
          others: `/${e._id}`,
          type: "DELETE",
        });
      });
      break;

    case "GET_USER":
      const userRes = await fetching({ others: "users" });
      return userRes.json();

    default:
      console.log("fetch API - default Case");
      break;
  }
}
