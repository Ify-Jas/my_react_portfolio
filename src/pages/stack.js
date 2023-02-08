
function Stack(){
    return (
        <div className='container'>
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li className='listHeader'>Basic Language</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>

                </ul>
            </div>
            <div className='row'>
                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className='listHeader'>Framework</li>
                        <li>Bootstrap</li>
                        <li>NodeJs</li>
                    </ul>
                </div>

                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className='listHeader'>Library</li>
                        <li>ReactJS</li>
                        <li>jQuery</li>
                    </ul>
                </div>

            </div>
                     
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li className='listHeader'>Extra</li>
                    <li>Git</li>
                    <li>Github</li>
                    <li>APIs</li>
                    <li>VS Code</li>
               </ul>
            </div>
            
        </div>
  
    )
}


export default Stack;