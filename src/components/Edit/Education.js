import { Button, FormControl, InputLabel, List, ListItem, ListItemText, OutlinedInput, TextField, Typography } from '@material-ui/core';
import {useState} from 'react'
import { useStyles } from '../../styles';

export default function Education({data, handleChange, setEducation, remove}) {
    const classes = useStyles();

    const [click, setClick] = useState(false);  
    const handleClick = () =>{
      setClick(!click)
    }
    const handleSubmit = e =>{
        e.preventDefault();
        setEducation()
        setClick(false)
    }
    return (
        <div>
            <Typography variant="h5" color="initial"
            className = {classes.h5}>
                Education
            </Typography>
            <List>
                    {data.educationList.map((education, i)=>{
                        const {
                                                uniOrSchName,
                                                leCity,
                                                leFrom,
                                                leTo,
                                                degree,
                                                furDescOrAch,
                                                } = education;   
                            return<ListItem alignItems="flex-start"
                                     key = {i} className = {`${classes.list} ${classes.delOnClick}`}
                                     >
                                <ListItemText
                                primary={degree}
                                secondary={
                                    <>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        color="textPrimary"
                                    >
                                       at {uniOrSchName} in {leCity}, from {leFrom} to {leTo}
                                    </Typography>
                                    <Typography
                                    variant = 'subtitle1'
                                    >
                                    {furDescOrAch}
                                    </Typography>
                                    </>
                              }
                                 />
                                 <Button
                                 variant = "contained"
                                 color = "secondary"
                                 type = "button"
                                 onClick = {remove('educationList', i)}
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
                    +education
                    </Button>}
                  {click&&
                <form onSubmit = {handleSubmit}>
                 <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="school-name">School or University Name</InputLabel>
                        <OutlinedInput
                        id="school-name"
                        value = {data.uniOrSchName}
                        onChange = {handleChange('uniOrSchName')}
                        labelWidth={190}
                        type ="text"
                        required
                         />
                 </FormControl>
                 <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="lecity">City</InputLabel>
                        <OutlinedInput
                        id="lecity"
                        value = {data.leCity}
                        onChange = {handleChange('leCity')}
                        labelWidth={30}
                        type ="text"
                        required
                         />
                 </FormControl>
                 
                 <FormControl  className={classes.halfWidth} variant="outlined">
                    <InputLabel htmlFor="leFrom">From</InputLabel>
                        <OutlinedInput
                        id="leFrom"
                        value = {data.from}
                        onChange = {handleChange('leFrom')}
                        labelWidth={38}
                        type ="text"
                        required
                         />
                 </FormControl>
                 <FormControl style = {{marginLeft:'2%'}} className={classes.halfWidth} variant="outlined">
                    <InputLabel htmlFor="leTo">To</InputLabel>
                        <OutlinedInput
                        id="leTo"
                        value = {data.leTo}
                        onChange = {handleChange('leTo')}
                        labelWidth={20}
                        type ="text"
                        required
                         />
                 </FormControl>
                 <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="degree">Degree</InputLabel>
                        <OutlinedInput
                        id="degree"
                        value = {data.degree}
                        onChange = {handleChange('degree')}
                        labelWidth={50}
                        type ="text"
                        required
                         />
                 </FormControl>
                 <FormControl className = {classes.margin} 
                 fullWidth>
                 <TextField
                    label="Further Description"
                    multiline
                    rowsMax={5}
                    value={data.furDescOrAch}
                    variant="outlined"
                    onChange={handleChange('furDescOrAch')}
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
                      +education</Button>
                </div>
            </form>
            }
        </div>
    )

}
