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
        padding: '25px', background: '#fff', paddingTop: '0'
    },
    darkModeContainer: {
        padding: '25px', background: '#2C2C2C', color: '#fff', paddingTop: '0'
    },
    marginBottom: {
        marginBottom: '30px',
    },
    list: {
        height: '75vh', overflow: 'auto',
    },
   filterRestaurantsWrapper:{
       marginBottom: '1rem', marginTop: '1rem', display: 'flex', color: '#000'
   },
   filterRestaurantsWrapperDarkMode:{
         marginBottom: '1rem', marginTop: '1rem', display: 'flex', color: '#fff'
    },

    darkModeTextField: {
         color: '#fff !important', width: '90%'
    },
    lightModeTextField: {
        color: '#000', width: '90%'
    },
    searchBtnDark: {
        color: '#47cfb0' 
    },
    searchBtnLight: {
        color: '#000'
    },
    darkModeChip: {
        color: '#fff !important', background: '#47cfb0', marginBottom: '0.5rem'
    },
    lightModeChip: {
        color: '#000 !important', background: '#47cfb0', marginBottom: '0.5rem'
    },


}));