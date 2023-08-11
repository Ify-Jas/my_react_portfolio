import {useState} from "react";

const apiKey = '0996c468cae7cea3ab5d1ac0d4db8218';
const appID = "a8f9fe6e";








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
        if(!formData.title|| !formData.location){
            return alert('Please add a job title and/or location')
        } else{
            fetch()
        }
    }
    return(
        <div>
            <form className="form" >
                <input 
                type='text' 
                placeholder="Job title"
                name='title'
                onChange={handleChange}
                ></input>

                <input 
                type='text' 
                placeholder="Location"
                name='location'
                onChange={handleChange}
                ></input>

                <select 
                className="formDistance" 
                placeholder="Distance"
                name='distance'
                onChange={handleChange}
                >
                    <option>Distance from Location</option>
                    <option>1 mile</option>
                    <option>3 miles</option>
                    <option>5 miles</option>
                    <option>10 miles</option>
                    <option>15 miles</option>
                    <option>20 miles</option>
                    <option>30 miles</option>
                    <option>50 miles</option>
                </select>

                <input 
                type="number" 
                placeholder="Min Salary £"
                name='minSalary'
                onChange={handleChange}
                ></input>

                <input 
                type="number" 
                placeholder="Max Salary £"
                name='maxSalary'
                onChange={handleChange}
                ></input>

                <button 
                type="button" 
                className="formBtn"
                onClick={handleClick}
                >Search</button>
            </form>
        </div>
    )

}

export default FormPage;