import {useState} from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import { useStyles } from '../../styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput'

export default function Work({data, handleChange,setWork, remove}) {
    const classes = useStyles();
    const [click, setClick] = useState(false);  
    const handleClick = () =>{
      setClick(!click)
    }
    const handleSubmit = e =>{
        e.preventDefault();
        setWork()
        setClick(false)
    }
    return (
        <div>
            <Typography variant="h5" color="initial"
            className = {classes.h5}>
                Work Experience
            </Typography>
            <List>
                 {data.workList.map((work, i)=>{
                const {
                compName,city, from, to, role, furDesc, } = work;  
                return<ListItem alignItems="flex-start"
                            key = {i} className = {classes.list} 
                            >
                    <ListItemText
                    primary={role}
                    secondary={
                        <>
                        <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                >
                    at {compName} in {city}, from {from} to {to}
                </Typography>
                <Typography
                variant = 'subtitle1'
                >
                {furDesc}
                </Typography>
                </>
            }
                />
                <Button
                variant = "contained"
                color = "secondary"
                type = "button"
                onClick = {remove('workList', i)}
                style ={{alignSelf:'center'}}
                >Remove</Button>
                </ListItem>
        }

                     )}
                </List>

                {!click&&
                    <Button variant="contained"
                        onClick = {handleClick}
                    >
                    +Work Experience
                    </Button>}
                  {click&&
                <form onSubmit = {handleSubmit}>
                 <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="company-name">Company Name</InputLabel>
                        <OutlinedInput
                        id="company-name"
                        value = {data.compName}
                        onChange = {handleChange('compName')}
                        labelWidth={120}
                         type ="text"
                        required
                         />
                 </FormControl>
                 <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="city">City</InputLabel>
                        <OutlinedInput
                        id="city"
                        value = {data.city}
                        onChange = {handleChange('city')}
                        labelWidth={30}
                        type ="text"
                        required/>
                 </FormControl>
                 
                 <FormControl  className={classes.halfWidth} variant="outlined">
                    <InputLabel htmlFor="from">From</InputLabel>
                        <OutlinedInput
                        id="from"
                        value = {data.from}
                        onChange = {handleChange('from')}
                        labelWidth={38}
                        type ="text"
                        required/>
                 </FormControl>
                 <FormControl style = {{marginLeft:'2%'}} className={classes.halfWidth} variant="outlined">
                    <InputLabel htmlFor="to">To</InputLabel>
                        <OutlinedInput
                        id="to"
                        value = {data.to}
                        onChange = {handleChange('to')}
                        labelWidth={20}
                        type ="text"
                        required/>
                 </FormControl>
                 <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="role">Role</InputLabel>
                        <OutlinedInput
                        id="role"
                        value = {data.role}
                        onChange = {handleChange('role')}
                        labelWidth={32}
                        type ="text"
                        required/>
                 </FormControl>
                 <FormControl className = {classes.margin} 
                 fullWidth>
                 <TextField
                    label="Further Description"
                    multiline
                    rowsMax={5}
                    value={data.furDesc}
                    variant="outlined"
                    onChange={handleChange('furDesc')}
                  />
                 </FormControl>
                
                <div className="buttons">
                    <Button type ="button"
                     onClick ={handleClick}
                     variant="contained"
                     color="secondary"  
                     >
                    Cancel</Button>
                    <Button type ="submit"
                    variant="contained"
                    className = {classes.addButton}   
                    >
                      +Work Experience</Button>
                </div>
            </form>
            }
        </div>
    )
}
