import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { data } from "../datas/data.js";

export default function home({ jsonData }) {
  return (
    <>
      <Head>
        <title>{"Main"}</title>
      </Head>
      <img src="/Images/profile.jpg" height={144} width={144} alt="Your Name" />
      <br />
      {/* 최적화된 이미지로 출력  */}
      <Image
        src="/Images/profile.jpg"
        height={144}
        width={144}
        alt="Your Name"
      />
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
          {jsonData.map((e) => (
            <ul key={e.id}>
              {/* // url이 문자로 들어갈 경우 인코딩 형식 지키기 위해 사용  */}
              <Link href={`user/${encodeURIComponent(e.id)}?name=${e.name}`}>
                <a>{e.name}</a>
              </Link>
            </ul>
          ))}
        </li>
      </ul>
    </>
  );
}

// getStaticProps : 빌드시 딱 한 번만 호출됨, getServerSideProps : page가 요청받을 때마다 호출됨
export async function getStaticProps() {
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      jsonData: data,
    },
  };
}
