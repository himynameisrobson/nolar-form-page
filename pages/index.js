import Head from "next/head";
import { GlobalStyle } from "../styles/Global";
import PageContainer from "../components/PageContainer";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nolar.net</title>
        <meta name="keywords" content="nolar.net" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        </style>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        </style>
      </Head>
      <GlobalStyle />
      <PageContainer>
        <Header />
        <Main />
        <Footer />
      </PageContainer>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
