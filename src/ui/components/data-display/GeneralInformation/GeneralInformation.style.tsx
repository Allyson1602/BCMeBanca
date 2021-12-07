import { Box, Grid, styled, TextField, Typography } from '@mui/material';
import theme from 'ui/themes/theme';

export const GeneralInformationContainer = styled(Grid)`
    justify-content: space-between;
    flex-wrap: nowrap; 
`;

export const MainInformations = styled(Grid)`

`;

export const BcoinInformations = styled(Grid)`

`;

export const MetaInfoBox = styled(Box)`
    padding-top: ${theme.spacing(2)};
`;

export const Title = styled(Typography)`
    text-align: center;
    font-size: ${theme.typography.fontSize}px;
    color: ${theme.palette.primary.main};
`;

export const QuantddBcoin = styled(TextField)`
    width: 100%;

    & input {
        text-align: center;
    }
`;

export default GeneralInformationContainer;