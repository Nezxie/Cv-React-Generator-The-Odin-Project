import './App.css'
import Input  from './InputElements/Form.jsx'
import Output from './UIElements/CvOutput.jsx'

//dummy objects
// let style = 'style1';
let style = 'style2'
let personalInfo = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  phone: 'phone',
  website: 'website',
  github:'github',
  linkedIn: 'linkedIn',
  photoUrl:'https://images.dog.ceo/breeds/spaniel-sussex/n02102480_8269.jpg',
}

let JobInfo =  [
  {
    index:3,
    jobTitle: 'jobTitle',
    companyName: 'companyName',
    jobStartDate:'jobStartDate',
    jobEndDate: 'jobEndDate',
    jobDescription: 'jobDescription',
  },
]

let EducationInfo = [
  {
  index:1,
  major: 'major1',
  universityName: 'universityName1',
  eduStartDate:'eduStartDate1',
  eduEndDate: 'eduEndDate1',
  },
  {
    index: 2,
    major: 'major2',
    universityName: 'universityName2',
    eduStartDate:'eduStartDate2',
    eduEndDate: 'eduEndDate2',
    },
]

function App() {

  return (
    <div className="wrapper">
      <Input />
      <Output personalInfo={personalInfo} JobInfo={JobInfo} EducationInfo={EducationInfo} style={style}/>
    </div>
  )
}

export default App
