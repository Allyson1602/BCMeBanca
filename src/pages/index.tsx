import IndexApp from '@styles/pages/index.style';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import GeneralInformation from 'ui/components/data-display/GeneralInformation/GeneralInformation';
import TabelaContas from 'ui/components/data-display/TabelaContas/TabelaContas';
import { ApiService } from 'data/services/ApiService';
import axios from 'axios';

export interface IMetadados {
  investimento: number;
  carteira: number;
  saque: number;
  lucro: number;
  valorBcoin: number;
  quantddBcoin: number;
}

export interface ICotacaoDolar {
  USDBRL: IApiCotacao;
}

export interface IApiCotacao {
  ask: string;
  bid: string;
  code: string;
  codein: string;
  create_date: string;
  high: string;
  low: string;
  name: string;
  pctChange: string;
  timestamp: string;
  varBid: string;
}

const Home: NextPage = () => {

  const [ metadados, setMetadados ] = useState<IMetadados>({
    investimento: 0,
    carteira: 0,
    saque: 0,
    lucro: 0,
    valorBcoin: 0,
    quantddBcoin: 0
  });

  const [ dolar, setDolar ] = useState<IApiCotacao | undefined>({} as IApiCotacao);

  useEffect(() => {
    ApiService.get('/USD-BRL').then(({data}) => {
      setDolar(data.USDBRL);
    });
  }, []);

  const changeMetadados = (md: IMetadados): void => {
    setMetadados(md);
  }

  return (
    <IndexApp>
      <GeneralInformation metadados={metadados} changeMetadados={changeMetadados} />
      dolar: {dolar && dolar.low}

      <div className="anuncio" style={{margin: "50px 0px", height: "70px", width: "100%", background: "lightBlue"}}>Anúncio</div>

      <TabelaContas metadados={metadados} changeMetadados={changeMetadados} />

    </IndexApp>
  );
}

export default Home;