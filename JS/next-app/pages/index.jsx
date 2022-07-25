import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
// import css from "styled-jsx/css";
import { data } from "../datas/data.js";

export default function home({ jsonData }) {
  return (
    <>
      <Head>
        <title>{"Main"}</title>
      </Head>

      <img
        src="/Images/profile.jpg"
        height={144}
        width={144}
        alt="Your Name"
        className="profile"
      />
      <br />
      {/* nextjs의 Image태그, 이미지 최적화 및, viewport에 표시될 때 lazy loading되는 등 기능 제공 
      기본적으로 제공되는 css로 인해 css가 제대로 먹지 않음, div로 감싸는 등 필요*/}
      <div className="profile">
        <Image
          src="/Images/profile.jpg"
          height={144}
          width={144}
          alt="Your Name"
          className="profile"
        />
      </div>

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
                <a className="users">{e.name}</a>
              </Link>
            </ul>
          ))}
        </li>
      </ul>
      <style jsx>{`
        .users {
          font-size: 20px;
        }
        .profile {
          transform: rotate(45deg);
          // opacity: 0.5;
        }
      `}</style>
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
