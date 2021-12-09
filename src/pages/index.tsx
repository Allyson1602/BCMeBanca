import IndexApp from '@styles/pages/index.style';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import GeneralInformation from 'ui/components/data-display/GeneralInformation/GeneralInformation';
import TabelaContas from 'ui/components/data-display/TabelaContas/TabelaContas';
import { ApiService, ApiServiceConversor } from 'data/services/ApiService';
import { IMetadados } from 'data/@types/metadados';
import { IApiConversor, IApiCotacao, IDadosCoinGecko } from 'data/@types/api';

const Home: NextPage = () => {

  const [ metadados, setMetadados ] = useState<IMetadados>({
    investimento: 0,
    carteira: 0,
    saque: 0,
    lucro: 0,
    quantddBcoin: 0
  });

  const [ dolar, setDolar ] = useState<IApiCotacao | undefined>(undefined);

  useEffect(() => {

    ApiService.get('/USD-BRL').then(({data}) => {
      setDolar(data.USDBRL);
    });

  }, []);

  // const converterRealDolar = (valor: number, tipoMoeda: boolean): number => {
  //   let moeda = 0;

  //   if(tipoMoeda) {
  //     ApiServiceConversor.get('', {
  //       params: {
  //         q: 'BRL_USD'
  //       }
  //     }).then(({data}: IApiConversor) => {
  //       const convertido: number = data.BRL_USD.val;
  //       moeda = (valor * convertido);
  //       console.log(moeda);
  //     });

  //   }else {
  //     ApiServiceConversor.get('', {
  //       params: {
  //         q: 'USD_BRL'
  //       }
  //     }).then(({data}: IApiConversor) => {
  //       // console.log(data);
  //       const convertido: number = data.USD_BRL.val;
  //       moeda = (valor * convertido);
  //     });
  //   }

  //   return moeda;
  // };

  const changeMetadados = (md: IMetadados): void => { setMetadados(md); }

  return (
    <IndexApp>

      <GeneralInformation metadados={metadados} changeMetadados={changeMetadados} />

      <div className="anuncio" style={{margin: "50px 0px", height: "70px", width: "100%", background: "lightBlue"}}>Anúncio</div>

      <TabelaContas metadados={metadados} changeMetadados={changeMetadados} />

    </IndexApp>
  );
}

export default Home;