import { Box, Stack, InputAdornment, Tabs, Tab, Typography } from '@mui/material';
import IndexApp, { BcoinInformations, MainInformations, MetaInfoBox, Title, MetaGrid } from '@styles/pages/index.style';
import type { NextPage } from 'next';
import React from 'react';
import TextField from 'ui/components/inputs/TextField/TextField';
import theme from 'ui/themes/theme';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const Home: NextPage = () => {

  const [value, setValue] = React.useState(1);
  const [conta, setConta] = React.useState<IRows | undefined>(rows[1]);

  const quandoAlterarContaTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    setConta(rows.find(conta => conta.id === newValue.toString()));
  };

  return (
    <IndexApp>
      <MetaGrid container spacing={ theme.spacing(2) } columns={2}>
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
      </MetaGrid>

      <div className="anuncio" style={{margin: "50px 0px", height: "70px", width: "100%", background: "lightBlue"}}>Anúncio</div>

      <Stack>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={value} 
            onChange={quandoAlterarContaTab}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab label="Conta 1" value={1} />
            <Tab label="Conta 2" value={2} />
            <Tab label="Conta 3" value={3} />
            <Tab label="Adicionar conta +" value={0} />
          </Tabs>
        </Box>

        <DataGrid 
          rows={conta ? conta.metadados : []}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          autoHeight
        />
      </Stack>

    </IndexApp>
  );
}

export default Home;


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, type: "string", editable: true },
  { field: 'data', headerName: 'Data', width: 100, type: "date", editable: true },
  { field: 'totalInvestido', headerName: 'Total investido', width: 140, type: "string", editable: true },
  { field: 'totalSaque', headerName: 'Total saque', width: 130, type: "string", editable: true },
  { field: 'lucro', headerName: 'Lucro', width: 130, type: "string", editable: true },
  { field: 'bcoin', headerName: 'Bcoin', width: 70, type: "string", editable: true },
];

export interface IRows {
  id: string;
  metadados: Array<IMetadadosConta>;
}
export interface IMetadadosConta {
  id: string;
  data: Date;
  totalInvestido: string;
  totalSaque: string;
  lucro: string;
  bcoin: string;
}

const rows: Array<IRows> = [
  {
    id: "0",
    metadados: [
      { id: "1", data: new Date(), totalInvestido: '', totalSaque: '', lucro: '', bcoin: '' }
    ]
  },
  {
    id: "1",
    metadados: [
      { id: "1", data: new Date('01/05/2021'), totalInvestido: 'R$ 5000', totalSaque: 'R$ 0', lucro: 'R$ -5000', bcoin: '5' },
      { id: "2", data: new Date('01/05/2021'), totalInvestido: 'R$ 0', totalSaque: 'R$ 0', lucro: 'R$ 0', bcoin: '7' },
      { id: "3", data: new Date('01/05/2021'), totalInvestido: 'R$ 0', totalSaque: 'R$ 0', lucro: 'R$ 0', bcoin: '4' },
      { id: "4", data: new Date('01/05/2021'), totalInvestido: 'R$ 3000', totalSaque: 'R$ 0', lucro: 'R$ -3000', bcoin: '3' },
      { id: "5", data: new Date('01/05/2021'), totalInvestido: 'R$ 1000', totalSaque: 'R$ 0', lucro: 'R$ -1000', bcoin: '11' },
      { id: "6", data: new Date('01/05/2021'), totalInvestido: 'R$ 0', totalSaque: 'R$ 4000', lucro: 'R$ 4000', bcoin: '6' },
      { id: "7", data: new Date('01/05/2021'), totalInvestido: 'R$ 0', totalSaque: 'R$ 1000', lucro: 'R$ 1000', bcoin: '4' },
      { id: "8", data: new Date(), totalInvestido: '', totalSaque: '', lucro: '', bcoin: '' },
    ]
  },
  {
    id: "2",
    metadados: [
      { id: "1", data: new Date('02/07/2021'), totalInvestido: 'R$ 5000', totalSaque: 'R$ 0', lucro: 'R$ -5000', bcoin: '5' },
      { id: "2", data: new Date('02/07/2021'), totalInvestido: 'R$ 0', totalSaque: 'R$ 0', lucro: 'R$ 0', bcoin: '7' },
      { id: "3", data: new Date('02/07/2021'), totalInvestido: 'R$ 0', totalSaque: 'R$ 0', lucro: 'R$ 0', bcoin: '4' },
      { id: "4", data: new Date('02/07/2021'), totalInvestido: 'R$ 3000', totalSaque: 'R$ 0', lucro: 'R$ -3000', bcoin: '3' },
      { id: "5", data: new Date('02/07/2021'), totalInvestido: 'R$ 1000', totalSaque: 'R$ 0', lucro: 'R$ -1000', bcoin: '11' },
      { id: "6", data: new Date('02/07/2021'), totalInvestido: 'R$ 0', totalSaque: 'R$ 4000', lucro: 'R$ 4000', bcoin: '6' },
      { id: "7", data: new Date('02/07/2021'), totalInvestido: 'R$ 0', totalSaque: 'R$ 1000', lucro: 'R$ 1000', bcoin: '4' },
      { id: "8", data: new Date(), totalInvestido: '', totalSaque: '', lucro: '', bcoin: '' },
    ]
  },
  {
    id: "3",
    metadados: [
      { id: "1", data: new Date('03/10/2021'), totalInvestido: 'R$ 5000', totalSaque: 'R$ 0', lucro: 'R$ -5000', bcoin: '5' },
      { id: "2", data: new Date('03/10/2021'), totalInvestido: 'R$ 0', totalSaque: 'R$ 0', lucro: 'R$ 0', bcoin: '7' },
      { id: "3", data: new Date('03/10/2021'), totalInvestido: 'R$ 0', totalSaque: 'R$ 0', lucro: 'R$ 0', bcoin: '4' },
      { id: "4", data: new Date('03/10/2021'), totalInvestido: 'R$ 3000', totalSaque: 'R$ 0', lucro: 'R$ -3000', bcoin: '3' },
      { id: "5", data: new Date('03/10/2021'), totalInvestido: 'R$ 1000', totalSaque: 'R$ 0', lucro: 'R$ -1000', bcoin: '11' },
      { id: "6", data: new Date('03/10/2021'), totalInvestido: 'R$ 0', totalSaque: 'R$ 4000', lucro: 'R$ 4000', bcoin: '6' },
      { id: "7", data: new Date('03/10/2021'), totalInvestido: 'R$ 0', totalSaque: 'R$ 1000', lucro: 'R$ 1000', bcoin: '4' },
      { id: "8", data: new Date(), totalInvestido: '', totalSaque: '', lucro: '', bcoin: '' },
    ]
  }
];