import PersonalInfo from './PersonalInfo.jsx'
import ExperienceInfo from './ExperienceInfoItem.jsx'
import EducationInfo from './EducationInfo.jsx'
import StyleButton from './StyleButton.jsx'
import ColorPicker from './ColorPicker.jsx'
import SaveBar from './SaveBar.jsx'

function Input() {

  return (
    <div className="form">
      <div className='buttons'>
        <StyleButton />
        <ColorPicker />
      </div>
        <PersonalInfo />
        <ExperienceInfo />
        <EducationInfo />
        <SaveBar />
    </div>
  )
}

export default Input
