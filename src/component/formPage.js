import {useState} from "react";
import Accordion from 'react-bootstrap/Accordion';
import  ReactDOM from 'react-dom/client';

const apiKey = '0996c468cae7cea3ab5d1ac0d4db8218';
const appID = "a8f9fe6e";
const results = 40;








function FormPage(){
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        distance: '',
        minSalary: '',
        maxSalary: ''    
    })
    
    const handleChange = (event)=>{
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }
    const handleClick = ()=>{
        if(!formData.title|| !formData.location || !formData.distance || !formData.minSalary || !formData.maxSalary){
            return alert('Please complete all fields')
        } else{
            fetch(`http://api.adzuna.com:80/v1/api/jobs/gb/search/1?app_id=${appID}&app_key=${apiKey}&results_per_page=${results}&what=${formData.title}&where=${formData.location}&salary_min=${formData.minSalary}&salary_max=${formData.maxSalary}&distance=${formData.distance}&content-type=application/json`)

            .then((res) => res.json())
            .then((data)=>{
                console.log(data)
               setFormData({
                title: '',
                location: '',
                distance: '',
                minSalary: '',
                maxSalary: ''  
               }) 
               const result = data.results;
               display(result);  
            })
           
        }
    }
    const display = (result)=>{
        console.log(result)
        const list = document.getElementsByClassName('results');
        
        {result.map((result, index)=>(
                <div key={index}>
                    <h2>{result.title}</h2>
                    <p>Company: {result.company.display_name}</p>
                    <p>Location: {result.location.display_name}</p>
                    <p>Salary: {result.salary_min}</p>
                    <p>Contract time: {result.contract_time}</p>
                    <p>Contract type: {result.contract_type}</p>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>View Description</Accordion.Header>
                            <Accordion.Body>
                               {result.description}

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            
          
         ))}

    }
    
    return(
        <div>
            <form className="form" >
                <input 
                type='text' 
                placeholder="Job title"
                name='title'
                value={formData.title}
                onChange={handleChange}
                ></input>

                <input 
                type='text' 
                placeholder="Location"
                name='location'
                value={formData.location}
                onChange={handleChange}
                ></input>

                <select 
                className="formDistance" 
                placeholder="Distance"
                name='distance'
                value={formData.distance}
                onChange={handleChange}
                >
                    <option>Distance from Location(km)</option>
                    <option>1 </option>
                    <option>3 </option>
                    <option>5 </option>
                    <option>10</option>
                    <option>15 </option>
                    <option>20 </option>
                    <option>30 </option>
                    <option>50 </option>
                </select>

                <input 
                type="number" 
                placeholder="Min Salary £"
                name='minSalary'
                value={formData.minSalary}
                onChange={handleChange}
                ></input>

                <input 
                type="number" 
                placeholder="Max Salary £"
                name='maxSalary'
                value={formData.maxSalary}
                onChange={handleChange}
                ></input>

                <button 
                type="button" 
                className="formBtn"
                onClick={handleClick}
                >Search</button>
            </form>
            <section className="results">
                
                
            </section>      
        </div>
    )

}

export default FormPage;