import Best from './Component/Best/best';
import Client from './Component/Clients/clients';
import Footer from './Component/Footer/footer';
import { Header } from './Component/HeaderComponent/Header';
import Main from './Component/MainComponent/Main';
import Next from './Component/Next/next';
import Page from './Component/Page/page';
import Servis from './Component/ServicComponent/Servic';
import Time from './Component/Time/time';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Servis />
      <Client />
      <Next />
      <Best />
      <Time />
      <Page />
      <Footer />
    </>

  );
}
export default App