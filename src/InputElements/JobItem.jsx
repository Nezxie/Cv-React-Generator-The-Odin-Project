import CustomInput from './CustomInputElement.jsx'
function JobItem({jobTitle,companyName, jobStartDate, jobEndDate, jobDescription}){
    let setValue = 2;

    return(
        <>
        <div className='small-box'>
        <CustomInput type="Job Title" value={jobTitle} setValue={setValue}/>
        <CustomInput type="Company Name" value={companyName} setValue={setValue}/>
        <CustomInput type="Start date" value={jobStartDate} setValue={setValue} date={true}/>
        <CustomInput type="End date" value={jobEndDate} setValue={setValue} date={true}/>
        <CustomInput type="Description" value={jobDescription} setValue={setValue} longText={true}/>
        </div>

        </>
    )
}export default JobItem;