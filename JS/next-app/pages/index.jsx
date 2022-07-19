import Link from "next/link";

const users = [
  { id: 1, name: "서래", age: 35 },
  { id: 2, name: "해준", age: 39 },
];

export default function home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="about">
          <a>About us</a>
        </Link>
      </li>
      <li>
        {users.map((e) => (
          <ul key={e.id}>
            {/* url이 문자로 들어갈 경우 인코딩 형식 지키기 위해 사용 */}
            <Link href={`/user/${encodeURIComponent(e.id)}?name=${e.name}`}>
              <a>{e.name}</a>
            </Link>
          </ul>
        ))}
      </li>
    </ul>
  );
}
