import { Button, FormControl, IconButton, InputLabel, List, ListItem, ListItemSecondaryAction, ListItemText, OutlinedInput, Typography } from '@material-ui/core';
import {useState} from 'react';
import {MdDelete} from 'react-icons/md';
import { useStyles } from '../../styles';

export default function Skills({data, handleChange, remove, setSkill}) {
    const [click, setClick] = useState(false)
    const classes = useStyles()
    const handleClick =()=>{
        setClick(!click);
    }
    const handleSubmit = e =>{
        e.preventDefault();
        setSkill()
        setClick(false)
    }
    return (
        <div>
                 <Typography variant="h5" color="initial"
                     className = {classes.h5}>
                      Skills
                 </Typography>
                 <List>
                 {data.skills.map((skill, i)=>{
                    return<ListItem alignItems="flex-start"
                            key = {i} className = {classes.list}>
                            <ListItemText
                                primary={skill}
                            />
                            <ListItemSecondaryAction
                                onClick = {remove('skills', i)}
                            >
                                <IconButton edge="end" aria-label="delete">
                                    <MdDelete
                                    />
                                </IconButton>
                            </ListItemSecondaryAction>
                            </ListItem>
                     })}
                </List>
               
                {!click&&
                    <Button variant="contained"
                        onClick = {handleClick}
                    >
                        +skills
                    </Button>}

           {click&&
           <form onSubmit = {handleSubmit}>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="skill">Skill</InputLabel>
                        <OutlinedInput
                        id="skill"
                        value = {data.skill}
                        onChange = {handleChange('skill')}
                        labelWidth={30}
                        type = "text"
                        required
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
                      +skill</Button>
                </div>
              </form>
           }
        </div>
    )
}
