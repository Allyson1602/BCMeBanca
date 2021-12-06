import { Grid, styled, Typography, Paper } from '@mui/material';
import theme from 'ui/themes/theme';

export const GeneralInformationContainer = styled(Grid)`

`;

export const ContaInfosPaper = styled(Paper)`
    margin: ${theme.spacing(1)} 0px;
    padding: ${theme.spacing(0.5)} 0px;
    display: flex;
    justify-content: space-around;
    background: ${theme.palette.primary.main};
    color: #FFF;
`;

export const ContaInfosTypo = styled(Typography)`
    font-size: ${theme.typography.caption.fontSize};
    text-align: center;
`;