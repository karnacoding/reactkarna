import { createTheme, responsiveFontSizes } from '@mui/material/styles';
  
const lightTheme = responsiveFontSizes(createTheme({
    palette: {
        background: {
            default: '#FFFFFF'
        }
    },
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif',
        h1: {
          fontSize: '3.5rem',
          lineHeight: '1.2',
          color: '#333333',
        },
        h2: {
          fontSize: '2rem',
          lineHeight: '1.4',
          color: '#555555',
        },
        button: {
          fontSize: '1.6rem',
          lineHeight: '1.4',
          color: '#FFFFFF',
          backgroundColor: '#D72C16',
        },
      },
    }));
  
const darkTheme = responsiveFontSizes(createTheme({
    palette: {
        background: {
            default: '#121212'
        }
    },
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif',
        h1: {
          fontSize: '3.5rem',
          lineHeight: '1.2',
          color: '#FFFFFF',
        },
        h2: {
          fontSize: '2rem',
          lineHeight: '1.4',
          color: '#CCCCCC',
        },
        button: {
          fontSize: '1.6rem',
          lineHeight: '1.4',
          color: '#FFFFFF',
          backgroundColor: '#D72C16',
        },
      },
    }));
  
export default lightTheme ;
export {darkTheme} ;
