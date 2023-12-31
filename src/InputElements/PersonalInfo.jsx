import CustomInput from './CustomInputElement.jsx'
function PersonalInfo({firstName, lastName, email, phone, website, github, linkedIn, photoUrl}) {
  let setValue = 2;

    return (
      <>
          <div className="box">
          <div className='small-box'>
            <CustomInput type="First Name" value={firstName} setValue={setValue}/>
            <CustomInput type="Last Name" value={lastName} setValue={setValue}/>
            <CustomInput type="Email" value={email} setValue={setValue}/>
            <CustomInput type="Phone" value={phone} setValue={setValue}/>
            <CustomInput type="Website" value={website} setValue={setValue}/>
            <CustomInput type="Github" value={github} setValue={setValue}/>
            <CustomInput type="LinkedIn" value={linkedIn} setValue={setValue}/>
            <CustomInput type="Photo URL" value={photoUrl} setValue={setValue}/>
            </div>
          </div>
      </>
    )
  }
  
  export default PersonalInfo;
  