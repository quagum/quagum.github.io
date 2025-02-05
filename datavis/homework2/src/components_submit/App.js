import './App.css';
import Header from './components/Header'
import PersonalProfile from './components/PersonalProfile'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Education from './components/Education'

function App(){
  const personalInfo = {
        name: "Zh Rimel",
        occupation: "Data Scientist"
      }
  const contactInfo = {
        email: "abc@gmail.com",
        web: "abc.github.io/abc",
        mobile: "01234567890"
      }
  const profile = {
        title: "Personal Profile",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
  const workExperience = {
        title: "Work Experience",
        job1: "Job Title at Company (August 2022 – December 2023)",
        job1Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        job2: "Job Title 2 at Company 2 (August 2020 – December 2021)",
        job2Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
  const keySkills = {
        title: "Key Skills",
        content1: "A Key skill"
      }
  const education = {
        title: "Education",
        bsInstitution: "New Jersey Institute of Technology",
        bsDegree: "BS in Computer Science",
        bsDates: "2018 - 2022",
        bsGpa: "3.9",
        msInstitution: "New Jersey Institute of Technology",
        msDegree: "MS in Data Science",
        msDates: "2022 - 2023",
        msGpa: "4.0"
      }

  return (
    <div class="page">
      <Header personalInfo={personalInfo} contactInfo={contactInfo}></Header>
      <hr class="yellow-line"/>
      <PersonalProfile profile={profile}></PersonalProfile>
      <hr class="black-line"/>
      <WorkExperience workExperience={workExperience}></WorkExperience>
      <hr class="black-line"/>
      <Skills keySkills={keySkills}></Skills>
      <hr class="black-line"/>
      <Education education={education}></Education>
    </div>
  );
}

export default App;
