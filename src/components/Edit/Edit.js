import Personal from "./Personal";
import Work from "./Work";
import Education from './Education';
import Skills from "./Skills";
import Languages from "./Languages";
export default function Edit({state, handleChange, setEducation, setWork, setSkill, setLanguage, remove}) {
    const {firstName, lastName, currentRole,
         address1, address2, linkedin, phone, email,
         compName,
        city,
        from,
        to,
        role,
        furDesc,
        uniOrSchName,
        leCity,
        leFrom,
        leTo,
        degree,
        furDescOrAch,
        skill,
        language,
        workList,
        educationList,
        skills,
        languages,
    } = state;
    const personalData = {firstName, lastName, currentRole,
        address1, address2, linkedin, phone, email
    } 
    const skillsData = {skill, skills};
    const languagesData = {language, languages};
    const workData= {compName,city, from, to, role, furDesc, workList
    }  
    const EducationData = {
        uniOrSchName,
        leCity,
        leFrom,
        leTo,
        degree,
        furDescOrAch,
        educationList,
    } 
    return (
        <div>
            <Personal data = {personalData} handleChange = {handleChange}/>
            <Work data = {workData} handleChange = {handleChange} setWork ={setWork} remove = {remove} />
            <Education 
            data = {EducationData} 
            handleChange = {handleChange}
            setEducation = {setEducation}
            remove = {remove}
            />
            <Skills data = {skillsData} handleChange = {handleChange} remove ={remove} setSkill = {setSkill}/>
            <Languages data = {languagesData} handleChange = {handleChange} remove = {remove} setLanguage = {setLanguage}/>

        </div>
    )
}
