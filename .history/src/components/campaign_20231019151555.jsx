import campaign from '../images/campaign-2021.jpg'


const Campaign = () =>{



    return(
        <div className='campaign-container'>
            <div>
            <h3>Experience</h3>
  <p className='campaign-description'>In August of 2021, I was one of the lead campaign managers for Iain Rankin, the premier of Nova Scotia for the 2021 general election.
  My primary roles included:
  </p>

            </div>
  
        <img src={campaign}
        style={{height:'300px',
    width:'400px'}}
        
        />

        </div>
      
    )
}

export default Campaign