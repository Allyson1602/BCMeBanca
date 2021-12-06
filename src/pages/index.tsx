import { Grid, Stack, InputAdornment } from '@mui/material';
import IndexApp, { BcoinInformations, MainInformations, MetaInfoBox, Title } from '@styles/pages/index.style';
import type { NextPage } from 'next';
import React from 'react';
import TextField from 'ui/components/inputs/TextField/TextField';
import theme from 'ui/themes/theme';

const Home: NextPage = () => {
  return (
    <IndexApp>
      <Grid container spacing={ theme.spacing(2) } justifyContent="space-between" columns={2}>
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
                disabled size={"small"} 
                value={"6,68"}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }} 
              />
              <TextField 
                disabled size={"small"} 
                value={"37,75"}
                InputProps={{
                  startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                }} 
              />
            </Stack>
          </MetaInfoBox>

          <MetaInfoBox>
            <Title>Quantidade bcoins</Title>
            <TextField size={"small"} value={"23,01"} sx={{ width: "100%" }} />
          </MetaInfoBox>
          
        </BcoinInformations>
      </Grid>

    </IndexApp>
  );
}

export default Home;
