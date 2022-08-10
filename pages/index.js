import { GlobalStyle } from "../styles/Global";
import PageContainer from "../components/PageContainer";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Header />
        <Main />
      </PageContainer>
    </>
  );
}

export async function getStaticProps() {
  console.log("service id", process.env.SERVICE_ID);
  console.log("service id", process.env.TEMPLATE_ID);
  console.log("whtever haheahe", process.env.PUBLIC_KEY);

  return {
    props: {},
  };
}
