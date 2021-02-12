import {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import {MdEdit, MdPhone, MdEmail} from 'react-icons/md';
import {ImLinkedin} from 'react-icons/im';
import TextField from '@material-ui/core/TextField'
import { useStyles } from '../../styles';
import Typography from '@material-ui/core/Typography'
export default function Personal({data, handleChange}) {
    const classes = useStyles ();

    const [state, setState] = useState({
        fNameClick:false,
        lNameClick:false,
        cRoleClick:false,
        ad1Click:false,
        ad2Click:false,
        phoneClick:false,
        emailClick:false,
        lininClick:false
    })
    const handleClick = TextField => () =>{
        setState({
        fNameClick:false,
        lNameClick:false,
        cRoleClick:false,
        ad1Click:false,
        ad2Click:false,
        phoneClick:false,
        emailClick:false,
        lininClick:false,
        [TextField]:true
        })
    }
    const { fNameClick,
        lNameClick,
        cRoleClick,
        ad1Click,
        ad2Click,
        phoneClick,
        emailClick,
        lininClick} = state;
    return (
        <>
      <Typography variant="h5"
       color="initial"
       className = {classes.h5}
       >Personal Information</Typography>
       <Grid
        container
        spacing = {3}
        direction="row"
        justify="center"
        alignItems="center"
        >
        <Grid item xs={6}>
            <div className={classes.formControll}>
                {!fNameClick&&
                <Typography
                 onClick = {handleClick('fNameClick')}>{data.firstName}
                <MdEdit/>
                </Typography>
                }
                {fNameClick&&
                 <TextField 
                 defaultValue = {data.firstName} 
                 onChange ={handleChange('firstName')}/>

                }
            </div>
            <div className={classes.formControll}>
            {!lNameClick&&
                <Typography
                 onClick = {handleClick('lNameClick')}>{data.lastName}
                    <MdEdit/>
                </Typography>
                }
                {lNameClick&&
                 <TextField 
                 defaultValue = {data.lastName}
                  onChange ={handleChange('lastName')}/>
                }
            </div>
            <div className={classes.formControll}>
            {!cRoleClick&&
                <Typography
                 onClick = {handleClick('cRoleClick')}>{data.currentRole}
                   <MdEdit/>
                </Typography>
                }
                {cRoleClick&&
                 <TextField 
                 defaultValue = {data.currentRole} onChange ={handleChange('currentRole')}/>
                }
            </div>
        </Grid>
        <Grid item xs={6}
            container
            direction="column"
            style = {{textAlign:'right'}}    
        >
            <div className={classes.formControll}>
            {!ad1Click&&
                <Typography
                 onClick = {handleClick('ad1Click')}>{data.address1}
                     <MdEdit/>
                </Typography>
                }
                {ad1Click&&
                <TextField
                type="text"
                defaultValue = {data.address1} onChange ={handleChange('address1')}/>
                }            </div>
            <div className={classes.formControll}>
            {!ad2Click&&
                <Typography
                 onClick = {handleClick('ad2Click')}>{data.address2}
                    <MdEdit/>
                </Typography>
                }
                {ad2Click&&
                <TextField type="text"
                defaultValue = {data.address2} onChange ={handleChange('address2')}/>
                }
            </div>
            <div className={classes.formControll}>
            {!phoneClick&&
                <Typography
                 onClick = {handleClick('phoneClick')}>
                    <MdPhone/>
                    {data.phone}
                    <MdEdit/>
                </Typography>
                }
                {phoneClick&&
                <TextField type="text"
                defaultValue = {data.phone} onChange ={handleChange('phone')}/>
                }
            </div>
            <div className={classes.formControll}>
            {!emailClick&&
                <Typography
                 onClick = {handleClick('emailClick')}>
                    <MdEmail/>
                    {data.email}
                    <MdEdit/>
                </Typography>
                }
                {emailClick&&
                <TextField type="text"
                defaultValue = {data.email} onChange ={handleChange('email')}/>
                }
            </div>
            <div className={classes.formControll}>
            {!lininClick&&
                <Typography
                 onClick = {handleClick('lininClick')}>
                    <ImLinkedin/>
                    {data.linkedin}
                    <MdEdit/>
                </Typography>
                }
                {lininClick&&
                <TextField type="text"
                value = {data.linkedin} onChange ={handleChange('linkedin')}/>
                }
            </div>
        </Grid>
        </Grid>
        </>
    )
}
