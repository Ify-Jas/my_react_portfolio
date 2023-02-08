import json from '../project.json'

function Portfolio(){
    const data = json.projects;
    return(
        <div>
          {data.map((data, index) => (
            <div className='eachCard' key={index}>
                <img src={data.image} alt='image of the project'/>
                <div>
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