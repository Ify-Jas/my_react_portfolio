function FormPage(){
    return(
        <div>
            <form className="form" >
                <input type='text' placeholder="Job title"></input>
                <input type='text' placeholder="Location"></input>
                <select className="formDistance" placeholder="Distance">
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
                <input type="number" placeholder="Min Salary £"></input>
                <input type="number" placeholder="Max Salary £"></input>
                <button type="button" className="formBtn">Search</button>
            </form>
        </div>
    )

}

export default FormPage;