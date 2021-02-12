import { makeStyles } from '@material-ui/core/styles';

const styles = {
    container:{
        backgroundColor:'#fff',
        padding:'40px 20px 50px !important',
        maxWidth:'992px !important',
        marginTop:30,
        marginBottom:30,
        boxShadow:'0 5px 10px rgba(0, 0, 0, 0.2)'
    },
    floatRight:{
        float:'right'
    },
    h5:{
        margin: '10px 0 !important',
        textTransform:'uppercase',
    },
   
    margin:{
        margin:'8px 0'
    },
    halfWidth:{
     width:'49%',
     margin:'8px 0'   
    },
    addButton:{
        marginLeft:'10px !important'
    },
    list:{
        borderLeft:'4px solid #3f51b5',
        margin:'7px 0'
    },
 
name:{
textTransform:'capitalize'
},

}
export const useStyles = makeStyles(styles)

