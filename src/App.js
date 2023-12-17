
import './App.css';
import Mainpage from './Components/Mainpage';
import { createContext, useState } from 'react';

export const MyContext = createContext();

function App() {
  const [profile, setProfile] = useState({
    firstName: '',
    secondName: '',
    phoneNum: '',
    address: '',
  })
  console.log("profile: ", profile);
  const [education, setEducation] = useState({
    courseName: '',
    completionYear: '',
    college: '',
    percentage: ''
  })
  const [skills, setSkills] = useState({
    skill1: '',
    skill2: '',
    skill3: ''
  })
  const [project, setProject] = useState({
    projectName: '',
    skills: '',
    description: '',
  })
  const [experience, setExperience] = useState({
    companyName: '',
    joiningDate: '',
    relevingDate: '',
    address: '',
    description: '',
    isPresent: false,
  })
  const ContextStates = {
    profile, setProfile, education, setEducation, skills, setSkills, project, setProject, experience, setExperience
  }
  return (
    <MyContext.Provider value={ContextStates}>
      <Mainpage />
    </MyContext.Provider>
  );
}

export default App;
