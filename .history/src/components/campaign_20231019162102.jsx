import campaign from '../images/campaign-2021.jpg'
import signs from '../images/campaign-2.jpg'

const Campaign = () =>{



    return(
        <div className='campaign-container'>
            <div>
            <h1>Experience</h1>

            <img src={campaign}
        style={{height:'300px',
    width:'400px'}}
        />
  <p className='campaign-description'>In August of 2021, I was one of the lead campaign managers for Iain Rankin, the premier of Nova Scotia for the 2021 general election.
  My team and I knocked on every door in the Timberlea Prospect area and 
 
  </p>
  <div className='campaign-roles'>
  <h2>My primary roles included</h2>
  <ul >
    <li>Engaging with residents in the Timberlea Prospect area to gain insights into their voting preferences.</li>
    <li>Inquiring about the motivations underlying their opinions and identifying potential areas for improvement within Iain Rankin's campaign and office.
    </li>
    <li>Tracking voting data on database and planning our routes to door efficiently knock on doors</li>
    <li>Doing sign waves at popular areas</li>
  </ul>
  </div>

  

            </div>

            <img src={signs}
        style={{height:'300px',
    width:'400px'}}
        />
  
     

        <div className='campaign-learned'>
            <h2>What I learned</h2>
            <ul >
               <li>How to deal with people of all kinds of background and opinions</li> 
               <li>Dealing with angry residents</li>
               <li>How to plan effectively in a professional environnement</li>
               <li>How to maintain a genuine and enthusiastic approach when repeatedly asking the same questions to people throughout a full seven-hour workday.</li>
            </ul>
        </div>

        </div>
      
    )
}

export default Campaign