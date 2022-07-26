import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../../components/Layout.js";
import utilStyles from "../../styles/utils.module.css";
import Alert from "../../components/Alert.js";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>[Introduction]</p>
          <p>
            something blabla~{" "}
            <a href="https://nextjs.org/learn">next.js tutorial</a>
          </p>
        </section>
      </Layout>
      <Alert type="success">
        <p>meow===cat</p>
      </Alert>
      <Alert type="error">
        <p>meow===dog</p>
      </Alert>
    </>
  );
}
