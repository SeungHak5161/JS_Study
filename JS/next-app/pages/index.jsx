import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Date from "../components/date";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../library/post";
import { getPostData } from "../lib/posts";
// import css from "styled-jsx/css ";

export default function home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{"Main"}</title>
      </Head>

      <Layout home>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ category, id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
// getStaticProps : 빌드시 딱 한 번만 호출됨, getServerSideProps : page가 요청받을 때마다 호출됨
// export async function getStaticProps() {
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {
//       jsonData: data,
//     },
//   };
// }
