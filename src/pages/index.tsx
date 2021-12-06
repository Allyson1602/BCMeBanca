import IndexApp from '@styles/pages/index.style';
import type { NextPage } from 'next';
import GeneralInformation from 'ui/components/data-display/GeneralInformation/GeneralInformation';
import TabelaContas from 'ui/components/data-display/TabelaContas/TabelaContas';

const Home: NextPage = () => {

  return (
    <IndexApp>
      
      <GeneralInformation />

      <div className="anuncio" style={{margin: "50px 0px", height: "70px", width: "100%", background: "lightBlue"}}>Anúncio</div>

      <TabelaContas />

    </IndexApp>
  );
}

export default Home;