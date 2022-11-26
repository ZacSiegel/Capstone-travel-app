import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    lightModeFormControl: {
        margin: theme.spacing(1), minWidth: 120, marginBottom: '30px', color: '#000 !important'
    },
    darkModeFormControl: {
        margin: theme.spacing(1), minWidth: 120, marginBottom: '30px', color: '#fff !important'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    loading: {
        height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#47cfb0'
    },
    container: {
        padding: '25px', background: '#fff',
    },
    darkModeContainer: {
        padding: '25px', background: '#2C2C2C', color: '#fff'
    },
    marginBottom: {
        marginBottom: '30px',
    },
    list: {
        height: '75vh', overflow: 'auto',
    },
   
}));