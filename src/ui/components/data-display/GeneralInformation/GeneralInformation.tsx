import { InputAdornment, Stack, TextField } from '@mui/material';
import { IMetadados } from 'pages';
import React, { useState } from 'react';
import theme from 'ui/themes/theme';
import GeneralInformationContainer, { BcoinInformations, MainInformations, MetaInfoBox, Title, QuantddBcoin } from './GeneralInformation.style';

export interface ITabelaContasProps {
    metadados: IMetadados;
    changeMetadados: (md: IMetadados) => void;
}

const GeneralInformation: React.FC<ITabelaContasProps> = ({ metadados, changeMetadados }) => {
    
    const [ valorBcoin ] = useState(metadados.valorBcoin);

    const [ investimento, setInvestimento ] = useState(metadados.investimento);
    const [ carteira, setCarteira ] = useState(metadados.carteira);
    const [ lucro, setLucro ] = useState(metadados.lucro);
    const [ saque, setSaque ] = useState(metadados.saque);
    const [ quantddBcoin, setQuantddBcoin ] = useState(metadados.quantddBcoin);

    const changeValue = (ev: React.ChangeEvent<HTMLInputElement>, campo: string) => {
        let value = ev.target.value;

        if(value === "") {
            value = "0";
        }else {
            if(isNaN(parseInt(value))) return;
        }

        switch(campo) {
            case "investimento": 
                setInvestimento(parseInt(value));
                metadados.investimento = investimento;
                break;

            case "carteira": 
                setCarteira(parseInt(value));
                metadados.carteira = carteira;
                break;

            case "lucro": 
                setLucro(parseInt(value));
                metadados.lucro = lucro;
                break;

            case "quantddBcoin": 
                setQuantddBcoin(parseInt(value));
                metadados.quantddBcoin = quantddBcoin;
                break;

            case "saque": 
                setSaque(parseInt(value));
                metadados.saque = saque;
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
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => changeValue(ev, "investimento")}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }} 
                        />
                        <TextField 
                            size={"small"} 
                            value={investimento}
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
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => changeValue(ev, "carteira")}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }} 
                        />
                        <TextField 
                            size={"small"} 
                            value={carteira}
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
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => changeValue(ev, "saque")}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }} 
                        />
                        <TextField 
                            size={"small"} 
                            value={saque}
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
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => changeValue(ev, "lucro")}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }} 
                        />
                        <TextField 
                            size={"small"} 
                            value={lucro}
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
                        value={valorBcoin}
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