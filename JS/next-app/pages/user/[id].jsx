import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();

  // router의 url 쿼리에 존재하는 user 의 값을 가져온다. 이는 [user].jsx의 user와 대응된다.
  const { id, name, age } = router.query;
  console.log(id, name, age);

  return (
    <h3>
      사용자 이름 : {name}
      <br />
      나이 : {age}
    </h3>
  );
};

export default User;
