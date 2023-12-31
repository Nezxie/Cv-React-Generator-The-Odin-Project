import ContactInfo from './ContactInfo.jsx'
import LifeEvent from './LifeEvent.jsx'
function Output({personalInfo, JobInfo, EducationInfo, style}){

    return(
        <div id="cvBackground" className={style}>
            <h1>{personalInfo.firstName+' '+personalInfo.lastName}</h1>
            {
                personalInfo.photoUrl.length>0 && <img src={personalInfo.photoUrl} alt={personalInfo.firstName+' '+personalInfo.lastName}/>
            }    
            <ContactInfo personalInfo={personalInfo} />
            
            <div className="experience-box">
                <h2>Experience</h2>
                <hr />
                {
                    JobInfo.map(item=><LifeEvent eventInfo={item} />)
                }
            </div>
            <div className="education-box">
                <h2>Education</h2>
                <hr />
                {
                    EducationInfo.map(function(item){
                        return <LifeEvent eventInfo={item} />
                    })
                }
            </div>
            <hr className='consent' />
            <p className='consent'>I hereby give consent for my personal data to be processed for the purpose of conducting recruitment for the position for which I am applying.</p>                        
        </div>
    )
}
export default Output;