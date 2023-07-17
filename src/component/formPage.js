function FormPage(){
    return(
        <div>
            <form>
                <input type='text' placeholder="keyword"></input>
                <input type='text' placeholder="location"></input>
                <input type='range' placeholder="miles"></input>
                <input type="number" placeholder="min"></input>
                <input type="number" placeholder="max"></input>
            </form>
        </div>
    )

}

export default FormPage;