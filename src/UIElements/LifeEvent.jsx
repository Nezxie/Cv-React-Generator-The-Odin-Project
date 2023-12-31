function LifeEvent({eventInfo}){
    return(
        <>    
            {
                Object.hasOwn(eventInfo, 'major')?
                <div className="lifeEventBox" key={eventInfo.index}>
                    <h3>{eventInfo.major}</h3>
                    <p>at {eventInfo.universityName}</p>
                    <p className = 'eventDate'>since {eventInfo.eduStartDate}{eventInfo.eduEndDate && ` until ${eventInfo.eduEndDate}`}</p>
                </div> :
                <div className="lifeEventBox" key={eventInfo.index}>
                    <h3>{eventInfo.jobTitle}</h3>
                    <p>at {eventInfo.companyName}</p>
                    <p className = 'eventDate'>since {eventInfo.jobStartDate}{eventInfo.jobEndDate && ` until ${eventInfo.jobEndDate}`}</p>
                    <p>{eventInfo.jobDescription}</p>
                </div>
             }
             </>
            )
}
export default LifeEvent