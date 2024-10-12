import { DescriptionBlock } from '../components/welcomePageParts/descriptionBlock';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { WelcomeBlock } from '../components/welcomePageParts/welcomeBlock';

export function WelcomePage() {
  return (
    <>
      <Header></Header>
      <main>
        <WelcomeBlock></WelcomeBlock>
        <DescriptionBlock></DescriptionBlock>
        <div style={{ height: "300px", width: "100%" }} />
      </main>
      <Footer></Footer>
    </>
  );
}