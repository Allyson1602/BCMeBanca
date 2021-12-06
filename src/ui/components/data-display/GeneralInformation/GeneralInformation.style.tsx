import { Box, Grid, styled, Typography } from '@mui/material';
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
`;

export default GeneralInformationContainer;