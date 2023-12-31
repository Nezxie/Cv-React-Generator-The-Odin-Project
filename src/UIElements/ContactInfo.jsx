function ContactInfo({personalInfo}){
    return(
        <div className='contactInfo'>
                <p><span className="material-symbols-outlined">call</span>{personalInfo.phone}</p>
                <p><span className="material-symbols-outlined">mail</span>{personalInfo.email}</p>
                {
                    personalInfo.website && <p><span className="material-symbols-outlined">language</span>{personalInfo.website}</p>
                }
                {
                    personalInfo.github && <p><span className="material-symbols-outlined">terminal</span>{personalInfo.github}</p>
                }
                {
                    personalInfo.linkedIn && <p><span className="material-symbols-outlined">group</span>{personalInfo.linkedIn}</p>
                }
            </div>
    )
}
export default ContactInfo;