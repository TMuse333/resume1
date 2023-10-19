import campaign from '../images/campaign-2021.jpg'


const Campaign = () =>{



    return(
        <div className='campaign-container'>
            <div>
            <h1>Experience</h1>
  <p className='campaign-description'>In August of 2021, I was one of the lead campaign managers for Iain Rankin, the premier of Nova Scotia for the 2021 general election.
 
  </p>
  <p>My primary roles included</p>
  <ul>
    <li>Engaging with residents in the Timberlea Prospect area to gain insights into their voting preferences.</li>
    <li>Why they had their opinions and if there was anything
        Iain could and his office could do better
    </li>
  </ul>

            </div>
  
        <img src={campaign}
        style={{height:'300px',
    width:'400px'}}
        
        />

        </div>
      
    )
}

export default Campaign