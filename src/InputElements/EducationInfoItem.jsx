import CustomInput from './CustomInputElement.jsx'
function EducationItem({major, universityName, eduStartDate, eduEndDate}){
let setValue = 2;
    return(
        <>
        <div className='small-box'>
        <CustomInput type="Major" value={major} setValue={setValue}/>
        <CustomInput type="University Name" value={universityName} setValue={setValue}/>
        <CustomInput type="Start date" value={eduStartDate} setValue={setValue} date={true}/>
        <CustomInput type="Finish date" value={eduEndDate} setValue={setValue} date={true}/>
        </div>

        </>
    )
}export default EducationItem;