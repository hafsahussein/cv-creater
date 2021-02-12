import { Button, FormControl, IconButton, InputLabel, List, ListItem, ListItemSecondaryAction, ListItemText, OutlinedInput, Typography } from '@material-ui/core';
import {useState} from 'react'
import { MdDelete } from 'react-icons/md';
import { useStyles } from '../../styles';

export default function Languages({data, handleChange, setLanguage, remove}) {
    const classes = useStyles()
    const [click, setClick] = useState(false)
    const handleClick =()=>{
        setClick(!click);
    }
    const handleSubmit = e =>{
        e.preventDefault();
        setLanguage()
        setClick(false)
    }
    return (
        <div>
        <Typography variant="h5" color="initial"
            className = {classes.h5}>
             languages
        </Typography>
        <List>
        {data.languages.map((language, i)=>{
           return<ListItem alignItems="flex-start"
                   key = {i} className = {classes.list}>
                   <ListItemText
                       primary={language}
                   />
                   <ListItemSecondaryAction
                       onClick = {remove('languages', i)}
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
               +languages
           </Button>}

  {click&&
  <form onSubmit = {handleSubmit}>
       <FormControl fullWidth className={classes.margin} variant="outlined">
           <InputLabel htmlFor="language">Language</InputLabel>
               <OutlinedInput
               id="language"
               value = {data.language}
               onChange = {handleChange('language')}
               labelWidth={75}
               type ="text"
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
             +language</Button>
       </div>
  
  </form>
  }
</div>

    )
}
