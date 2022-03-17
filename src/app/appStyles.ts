import {makeStyles} from '@mui/styles';
import Paper from '@mui/material/Paper';
import {
  createTheme,
  styled,
} from '@mui/material/styles';

export const useAppStyles = makeStyles({
  field: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    background: 'white',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '65vw',
    height: '90vh',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    flex: 2,
  },
  headText: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  contentBox: {
    'flex': 5,
    'display': 'flex',
    'overflow': 'scroll',
    'flexDirection': 'column',
    'margin': 30,
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  smallContentBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  playButton: {
    minWidth: '250px !important',
    minHeight: '100px !important',
    fontSize: '1.875rem !important',
  },
  levelSelector: {
    maxWidth: '150px !important',
    marginBottom: '15px !important',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const Item = styled(Paper)(({
  theme,
}) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

