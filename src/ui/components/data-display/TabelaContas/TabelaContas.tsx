import { Box, Stack, Tabs, Tab } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React from 'react';
import { ContaInfosPaper, ContaInfosTypo } from './TabelaContas.style';

const TabelaContas: React.FC = () => {

    const [value, setValue] = React.useState(1);
    const [conta, setConta] = React.useState<IRows | undefined>(rows[1]);
  
    const quandoAlterarContaTab = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
  
      setConta(rows.find(conta => conta.id === newValue.toString()));
    };

    return (
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
  
          <ContaInfosPaper variant="outlined">
            <Stack>
              <ContaInfosTypo>dias totais</ContaInfosTypo>
              <ContaInfosTypo>25</ContaInfosTypo>
            </Stack>
            
            <Stack>
              <ContaInfosTypo>investimento total</ContaInfosTypo>
              <ContaInfosTypo>25</ContaInfosTypo>
            </Stack>
            
            <Stack>
              <ContaInfosTypo>saque total</ContaInfosTypo>
              <ContaInfosTypo>25</ContaInfosTypo>
            </Stack>
            
            <Stack>
              <ContaInfosTypo>lucro total</ContaInfosTypo>
              <ContaInfosTypo>25</ContaInfosTypo>
            </Stack>
            
            <Stack>
              <ContaInfosTypo>bcoin total</ContaInfosTypo>
              <ContaInfosTypo>25</ContaInfosTypo>
            </Stack>
          </ContaInfosPaper>
  
          <DataGrid 
            rows={conta ? conta.metadados : []}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            autoHeight
          />
        </Stack>
    );
};

export default TabelaContas;


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, type: "string", editable: true },
  { field: 'data', headerName: 'Data', width: 100, type: "date", editable: true },
  { field: 'investido', headerName: 'Investido', width: 140, type: "string", editable: true },
  { field: 'saque', headerName: 'Saque', width: 130, type: "string", editable: true },
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
  investido: string;
  saque: string;
  lucro: string;
  bcoin: string;
}

const rows: Array<IRows> = [
  {
    id: "0",
    metadados: [
      { id: "1", data: new Date(), investido: '', saque: '', lucro: '', bcoin: '' }
    ]
  },
  {
    id: "1",
    metadados: [
      { id: "1", data: new Date('01/05/2021'), investido: 'R$ 5000', saque: 'R$ 0', lucro: 'R$ -5000', bcoin: '5' },
      { id: "2", data: new Date('01/05/2021'), investido: 'R$ 0', saque: 'R$ 0', lucro: 'R$ 0', bcoin: '7' },
      { id: "3", data: new Date('01/05/2021'), investido: 'R$ 0', saque: 'R$ 0', lucro: 'R$ 0', bcoin: '4' },
      { id: "4", data: new Date('01/05/2021'), investido: 'R$ 3000', saque: 'R$ 0', lucro: 'R$ -3000', bcoin: '3' },
      { id: "5", data: new Date('01/05/2021'), investido: 'R$ 1000', saque: 'R$ 0', lucro: 'R$ -1000', bcoin: '11' },
      { id: "6", data: new Date('01/05/2021'), investido: 'R$ 0', saque: 'R$ 4000', lucro: 'R$ 4000', bcoin: '6' },
      { id: "7", data: new Date('01/05/2021'), investido: 'R$ 0', saque: 'R$ 1000', lucro: 'R$ 1000', bcoin: '4' },
      { id: "8", data: new Date(), investido: '', saque: '', lucro: '', bcoin: '' },
    ]
  },
  {
    id: "2",
    metadados: [
      { id: "1", data: new Date('02/07/2021'), investido: 'R$ 5000', saque: 'R$ 0', lucro: 'R$ -5000', bcoin: '5' },
      { id: "2", data: new Date('02/07/2021'), investido: 'R$ 0', saque: 'R$ 0', lucro: 'R$ 0', bcoin: '7' },
      { id: "3", data: new Date('02/07/2021'), investido: 'R$ 0', saque: 'R$ 0', lucro: 'R$ 0', bcoin: '4' },
      { id: "4", data: new Date('02/07/2021'), investido: 'R$ 3000', saque: 'R$ 0', lucro: 'R$ -3000', bcoin: '3' },
      { id: "5", data: new Date('02/07/2021'), investido: 'R$ 1000', saque: 'R$ 0', lucro: 'R$ -1000', bcoin: '11' },
      { id: "6", data: new Date('02/07/2021'), investido: 'R$ 0', saque: 'R$ 4000', lucro: 'R$ 4000', bcoin: '6' },
      { id: "7", data: new Date('02/07/2021'), investido: 'R$ 0', saque: 'R$ 1000', lucro: 'R$ 1000', bcoin: '4' },
      { id: "8", data: new Date(), investido: '', saque: '', lucro: '', bcoin: '' },
    ]
  },
  {
    id: "3",
    metadados: [
      { id: "1", data: new Date('03/10/2021'), investido: 'R$ 5000', saque: 'R$ 0', lucro: 'R$ -5000', bcoin: '5' },
      { id: "2", data: new Date('03/10/2021'), investido: 'R$ 0', saque: 'R$ 0', lucro: 'R$ 0', bcoin: '7' },
      { id: "3", data: new Date('03/10/2021'), investido: 'R$ 0', saque: 'R$ 0', lucro: 'R$ 0', bcoin: '4' },
      { id: "4", data: new Date('03/10/2021'), investido: 'R$ 3000', saque: 'R$ 0', lucro: 'R$ -3000', bcoin: '3' },
      { id: "5", data: new Date('03/10/2021'), investido: 'R$ 1000', saque: 'R$ 0', lucro: 'R$ -1000', bcoin: '11' },
      { id: "6", data: new Date('03/10/2021'), investido: 'R$ 0', saque: 'R$ 4000', lucro: 'R$ 4000', bcoin: '6' },
      { id: "7", data: new Date('03/10/2021'), investido: 'R$ 0', saque: 'R$ 1000', lucro: 'R$ 1000', bcoin: '4' },
      { id: "8", data: new Date(), investido: '', saque: '', lucro: '', bcoin: '' },
    ]
  }
];