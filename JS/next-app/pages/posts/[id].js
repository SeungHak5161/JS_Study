import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  console.log(paths);
  return {
    // path:[{params:{id :'ssg-ssr'}}] 형태
    paths,
    // fallback은 paths 페이지가 없을 경우 처리 방법. false일 경우 바로 404를 띄우고,
    // true일 경우 적절하게 처리가 돼있을 경우 fallback 버전의 page를 띄움
    fallback: false,
    // fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  // props인 postData가 페이지 로딩 전에는 전달되지 않아서 에러 발생하는데 이를 방지하기 위해 isFallback check
  const router = useRouter();

  useEffect(async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    alert(data.text);
  }, []);
  if (router.isFallback) {
    return <div>Loading</div>;
  }
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="utilStyles.headingXl">{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
