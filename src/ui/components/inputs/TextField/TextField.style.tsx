import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const TextFieldStyled = styled(TextField)`
    .MuiInputBase-root {
        background-color: ${({ theme }) => theme.palette.grey[50]};
        border: none;
        text-align: center;

        & input {
            text-align: center;
        }
    }
    .MuiOutlinedInput-notchedOutline {
        border: none;
    }
`;