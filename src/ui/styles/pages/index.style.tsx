import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from 'ui/themes/theme';

const IndexApp = styled(Container)`

`;

export const MetaInfoBox = styled(Box)`
    padding-top: ${theme.spacing(2)};
`;

export const MainInformations = styled(Grid)`

`;

export const BcoinInformations = styled(Grid)`

`;

export const Title = styled(Typography)`
    text-align: center;
    font-size: ${theme.typography.fontSize}px;
`;

export default IndexApp;
