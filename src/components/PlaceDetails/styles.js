import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    chip: {
        margin: '5px 5px 5px 0', 
    },
    subtitle: {
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
    },
    spacing: {
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    },
    darkSubtitle: {
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', color: '#fff'
    },
    darkSpacing: {
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff'
    },
    darkCard: {
        background: '#3c3c3c', color: '#fff'
    },
    lightCard: {
        background: '#fff'
    },

    darkLink: {
        color: '#47cfb0'
    },
    lightLink: {
        color: '#3f50b5'
    },
    darkLike: {
        color: '#47cfb0'
    },
    lightLike: {
        color: '#3f50b5'
    }
}));