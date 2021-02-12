import {useState, createRef} from 'react'
import Edit from './components/Edit/Edit'
import Preview from './components/Preview'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';
export default function App() {
    const classes = useStyles ();
    const [state, setState] = useState({
        firstName:'First Name',
        lastName:'Last Name',
        currentRole:'Current Role',
        address1:'Address1',
        address2:'Address2',
        phone:'Phone',
        email:'Email',
        linkedin:'Linkedin',
        compName:'',
        city:'',
        from:'',
        to:'',
        role:'',
        furDesc:'',
        uniOrSchName:'',
        leCity:'',
        leFrom:'',
        leTo:'',
        degree:'',
        furDescOrAch:'',
        skill:'',
        language:'',
        workList:[],
        educationList:[],
        skills:[],
        languages:[],
    })
    const [mode, setMode] = useState('edit')
    const ref = createRef();
    
    // listen for input changes
    const handleChange = input => e =>{
        setState({
            ...state, [input]:e.target.value
        })
        console.log(state[input])
    }
    const remove = (input, index) => () =>{
        state[input].splice(index, 1);
        setState({
            ...state
        })
    }
    // add new work experience
    const setWork = () =>{
        const {compName,
        city,
        from,
        to,
        role,
        furDesc} = state;
       state.workList.push({
        compName,
        city,
        from,
        to,
        role,
        furDesc,
       })
       setState({
        ...state,   
        compName:'',
        city:'',
        from:'',
        to:'',
        role:'',
        furDesc:'',
       })
    }
    // add new education
    const setEducation = () =>{
        const {
            uniOrSchName,
        leCity,
        leFrom,
        leTo,
        degree,
        furDescOrAch,
        } = state;
        state.educationList.push({
            uniOrSchName,
            leCity,
            leFrom,
            leTo,
            degree,
            furDescOrAch,
        })
        setState({
            ...state,
            uniOrSchName:'',
            leCity:'',
            leFrom:'',
            leTo:'',
            degree:'',
            furDescOrAch:'',
        })
    }
    // add new skill
    const setSkill = () =>{
        const {skill} = state;
        state.skills.push(skill)
        setState({
            ...state, skill:''
        })
    }
    // add new language
    const setLanguage = () =>{
        const {language} = state;
        state.languages.push(language)
        setState({
            ...state, language:''
        })
    }
  
    switch(mode){
        case 'edit':
            return  (
                <Container className = {classes.container}>
                    <Button variant="contained" color="primary"
                    onClick = {()=>setMode('preview')}
                    className ={classes.floatRight}
                    >Preview
                    </Button>
                <Edit state = {state} 
                 handleChange = {handleChange}
                 setEducation ={setEducation}
                 setWork = {setWork}
                 setSkill = {setSkill}
                 setLanguage = {setLanguage}
                 remove = {remove}
                 />
                </Container>
            )

        case 'preview':
            return  <Container className = {classes.container}>
                    <Button variant="contained" color="primary"
                    onClick = {()=>setMode('edit')}
                    >Edit
                    </Button>          
                    <Preview data = {state} ref = {ref}/>
                    </Container>
        default : 
        return (
            <Container className = {classes.container}>
            <Edit state = {state} 
             handleChange = {handleChange}
             setEducation ={setEducation}
             setWork = {setWork}
             setSkill = {setSkill}
             setLanguage = {setLanguage}
             remove = {remove}/>
            </Container>
        )
    }

  
}
