import { InputAdornment, Stack, TextField } from '@mui/material';
import React from 'react';
import theme from 'ui/themes/theme';
import GeneralInformationContainer, { BcoinInformations, MainInformations, MetaInfoBox, Title } from './GeneralInformation.style';

const GeneralInformation: React.FC = () => {

    return (
        <GeneralInformationContainer container spacing={ theme.spacing(2) } columns={2}>
            <MainInformations item>

                <MetaInfoBox>
                    <Title>Total investido</Title>

                    <Stack direction={"row"} spacing={1}>
                        <TextField 
                        size={"small"} 
                        value={"1.212,68"}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }} 
                        />
                        <TextField 
                        size={"small"} 
                        value={"6.855,52"}
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
                        value={"153,66"}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }} 
                        />
                        <TextField 
                        size={"small"} 
                        value={"868,69"}
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
                        value={""}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }} 
                        />
                        <TextField 
                        size={"small"} 
                        value={""}
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
                        value={"-1.212,68"}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }} 
                        />
                        <TextField 
                        size={"small"} 
                        value={"-6.855,52"}
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
                    value={"6,68"}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        readOnly: true
                    }} 
                    />

                    <TextField 
                    size={"small"} 
                    value={"37,75"}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                        readOnly: true
                    }} 
                    />
                </Stack>
                </MetaInfoBox>

                <MetaInfoBox>
                <Title>Quantidade bcoins</Title>
                <TextField size={"small"} value={"23,01"} sx={{ width: "100%" }} />
                </MetaInfoBox>
                
            </BcoinInformations>
        </GeneralInformationContainer>
    );
}

export default GeneralInformation;