import { InputAdornment, Stack, TextField } from '@mui/material';
import { IApiConversor, IDadosCoinGecko } from 'data/@types/api';
import { IMetadados } from 'data/@types/metadados';
import { ApiServiceConversor } from 'data/services/ApiService';
import React, { useEffect, useState } from 'react';
import theme from 'ui/themes/theme';
import GeneralInformationContainer, { BcoinInformations, MainInformations, MetaInfoBox, Title, QuantddBcoin } from './GeneralInformation.style';

export interface ITabelaContasProps {
    metadados: IMetadados;
    changeMetadados: (md: IMetadados) => void;
    converterRealDolar: (valor: number, moeda: boolean) => number;
}

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

const GeneralInformation: React.FC<ITabelaContasProps> = ({ metadados, changeMetadados, converterRealDolar }) => {
    
    const [ investimento, setInvestimento ] = useState(metadados.investimento);
    const [ carteira, setCarteira ] = useState(metadados.carteira);
    const [ lucro, setLucro ] = useState(metadados.lucro);
    const [ saque, setSaque ] = useState(metadados.saque);
    const [ valorBcoin, setValorBcoin ] = useState(0);
    const [ quantddBcoin, setQuantddBcoin ] = useState(metadados.quantddBcoin);

    const [ investimentoReal, setInvestimentoReal ] = useState(0);
    const [ carteiraReal, setCarteiraReal ] = useState(0);
    const [ lucroReal, setLucroReal ] = useState(0);
    const [ saqueReal, setSaqueReal ] = useState(0);
    const [ valorBcoinReal, setValorBcoinReal ] = useState(0);

    useEffect(() => {

        const dadosCoinGecko: Promise<IDadosCoinGecko> = CoinGeckoClient.coins.fetch("bomber-coin");
        dadosCoinGecko.then((dados) => {
          setValorBcoin(dados.data.tickers[0].converted_last.usd);
        });

        ApiServiceConversor.get('', {
          params: {
            q: 'BRL_USD'
          }
        }).then(({data}: IApiConversor) => {
          const convertido: number = data.BRL_USD.val;
          setValorBcoinReal(valorBcoin * convertido);
        });
        
        console.log(valorBcoinReal);
    }), [];

    // useEffect(() => {
    //     setValorBcoin(metadados.valorBcoin);
        
    //     console.log(metadados.valorBcoin);

    //     // console.log(converterRealDolar(metadados.valorBcoin, true));
    //     setValorBcoinReal(converterRealDolar(metadados.valorBcoin as number, true));
    // }, []);

    const changeValue = (ev: React.ChangeEvent<HTMLInputElement>, campo: string, moeda: boolean = false) => {
        let tValue = ev.target.value;

        if(tValue === "") {
            tValue = "0";
        }else {
            if(isNaN(parseInt(tValue))) return;
        }

        const value = parseInt(tValue);

        switch(campo) {
            case "investimento": 
                setInvestimento(value);
                metadados.investimento = investimento;

                if(moeda) {
                    setInvestimentoReal(converterRealDolar(value, true));
                }else {
                    setInvestimento(converterRealDolar(value, false));
                }

                break;

            case "carteira": 
                setCarteira(value);
                metadados.carteira = carteira;

                if(moeda) {
                    setCarteiraReal(converterRealDolar(value, true));
                }else {
                    setCarteira(converterRealDolar(value, false));
                }

                break;

            case "lucro": 
                setLucro(value);
                metadados.lucro = lucro;

                if(moeda) {
                    setLucroReal(converterRealDolar(value, true));
                }else {
                    setLucro(converterRealDolar(value, false));
                }

                break;

            case "quantddBcoin": 
                setQuantddBcoin(value);
                metadados.quantddBcoin = quantddBcoin;

                break;

            case "saque": 
                setSaque(value);
                metadados.saque = saque;

                if(moeda) {
                    setSaqueReal(converterRealDolar(value, true));
                }else {
                    setSaque(converterRealDolar(value, false));
                }

                break;
        }

        changeMetadados(metadados);
    };

    return (
        <GeneralInformationContainer container spacing={ theme.spacing(2) } columns={2}>
            <MainInformations item>

                <MetaInfoBox>
                    <Title>Total investido</Title>

                    <Stack direction={"row"} spacing={1}>
                        <TextField 
                            size={"small"} 
                            value={investimento}
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => changeValue(ev, "investimento", true)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }} 
                        />
                        <TextField 
                            size={"small"} 
                            value={investimentoReal}
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => changeValue(ev, "investimento")}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                            }} 
                        />
                    </Stack>
                </MetaInfoBox>

                <MetaInfoBox>
                    <Title>Carteira</Title>

                    <Stack direction={"row"} spacing={1}>
                        <TextField 
                            size={"small"} 
                            value={carteira}
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => changeValue(ev, "carteira", true)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }} 
                        />
                        <TextField 
                            size={"small"} 
                            value={carteiraReal}
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => changeValue(ev, "carteira")}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                            }} 
                        />
                    </Stack>
                </MetaInfoBox>

                <MetaInfoBox>
                    <Title>Saque total</Title>

                    <Stack direction={"row"} spacing={1}>
                        <TextField 
                            size={"small"} 
                            value={saque}
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => changeValue(ev, "saque", true)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }} 
                        />
                        <TextField 
                            size={"small"} 
                            value={saqueReal}
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => changeValue(ev, "saque")}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                            }} 
                        />
                    </Stack>
                </MetaInfoBox>

                <MetaInfoBox>
                    <Title>Lucro</Title>

                    <Stack direction={"row"} spacing={1}>
                        <TextField 
                            size={"small"} 
                            value={lucro}
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => changeValue(ev, "lucro", true)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }} 
                        />
                        <TextField 
                            size={"small"} 
                            value={lucroReal}
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => changeValue(ev, "lucro")}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                            }} 
                        />
                    </Stack>
                </MetaInfoBox>

            </MainInformations>
            
            <BcoinInformations item>

                <MetaInfoBox>
                <Title>bcoin</Title>

                <Stack direction={"row"} spacing={1}>
                    <TextField 
                        size={"small"} 
                        value={valorBcoin}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            readOnly: true
                        }} 
                    />

                    <TextField 
                        size={"small"} 
                        value={valorBcoinReal}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                            readOnly: true
                        }} 
                    />
                </Stack>
                </MetaInfoBox>

                <MetaInfoBox>
                    <Title>Quantidade bcoins</Title>
                    <QuantddBcoin 
                        size={"small"} 
                        value={quantddBcoin}
                        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => changeValue(ev, "quantddBcoin")}
                    />
                </MetaInfoBox>
                
            </BcoinInformations>
        </GeneralInformationContainer>
    );
}

export default GeneralInformation;