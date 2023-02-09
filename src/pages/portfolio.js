import json from '../project.json'

function Portfolio(){
    const data = json.projects;
    
    
    
    return(
        <div className='mainPort'>
          {data.map((data, index) => (

        
            <div className='eachCard' key={index}>

              <img className='img' src={data.image} alt='image of the project'/>


              <div className='info'>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <a href={data.repo}>Github Repo</a>
                <a href={data.page}>Deployed Page</a>
                <p>Skills: {data.tech}</p>
              </div>
            </div>
            ))}
          
        </div>
          
    )
}

export default Portfolio;