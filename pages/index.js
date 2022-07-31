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
