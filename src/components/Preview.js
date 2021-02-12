import { Button, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import {createRef} from 'react'
import Pdf from "react-to-pdf";
import {useStyles} from '../styles'
export default function Preview({data}) {
    const ref = createRef();
    const classes = useStyles()
    const { 
    firstName,
    lastName,
    currentRole,
    address1,
    address2,
    phone,
    email,
    linkedin,
    workList,
    educationList,
    skills,
    languages} = data;
      return (
        <div>
        <div className = "preview" ref = {ref}
                    style = {{marginBottom:'12px'}}
        >
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
                <Typography className = {classes.name}>
                  FirstName:{firstName}
                </Typography>
                <Typography>
                  LastName:{lastName}
                </Typography>
                <Typography>
                   CurrentRole:{currentRole}
                </Typography>
              
        </Grid>
        <Grid item xs={6}
            container
            direction="column"
            style = {{textAlign:'right'}}>
                <Typography>
                    Address1:{address1}
                </Typography>
                <Typography>Address2:{address2}
                </Typography>
                
                <Typography>
                   Phone:{phone}
                </Typography>
              
                <Typography>
                     Email:{email}
                </Typography>          
                <Typography>
                   LinkedIn:{linkedin}
                </Typography>             
        </Grid>
        </Grid>
        </>
        {workList.length!==0&&
            <div className="work-experience">
            <Typography variant="h5" color="initial"
            className = {classes.h5}>
                Work Experience
            </Typography>
            <List>
                 {workList.map((work, i)=>{
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
                            
                                 </ListItem>
                     }
                    
                     )}
                </List>
            </div>
        }
        {
            educationList.length!==0&&
            <div className="education">
            <Typography variant="h5" color="initial"
            className = {classes.h5}>
                Education
            </Typography>
            <List className ="temprory-preview">
                    {educationList.map((education, i)=>{
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
                            </ListItem>
                     }
                    
                     )}
                </List>
            </div>
        }
        {
            skills.length!==0&&
                <div className="skills">
                <Typography variant="h5" color="initial"
                     className = {classes.h5}>
                      Skills
                 </Typography>
                 <List>
                 {skills.map((skill, i)=>{
                    return<ListItem alignItems="flex-start"
                            key = {i} className = {classes.list}>
                            <ListItemText
                                primary={skill}/>
                            </ListItem>
                     })}
                </List>
                </div>
        }
        {languages.length!==0&&
            <div className="languages"
            >
            <Typography variant="h5" color="initial"
            className = {classes.h5}>
             languages
        </Typography>
        <List>
        {languages.map((language, i)=>{
           return<ListItem alignItems="flex-start"
                   key = {i} className = {classes.list}>
                   <ListItemText
                       primary={language}
                   />
                </ListItem>
            })}
       </List>
            </div>
        }
          </div>
             <Pdf targetRef={ref} filename="my-cv.pdf"
                >
                  {({ toPdf }) =>
                  <Button
                   onClick={toPdf}
                   className = {classes.floatRight}
                   variant = 'contained'
                   color ='primary'
                   >Download</Button>}
            </Pdf>
        </div>
    )
}
