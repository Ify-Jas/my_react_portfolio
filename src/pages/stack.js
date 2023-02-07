function Stack(){
    return (
        <div className='container'>
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li class="listHeader">Basic Language</li>
                    <li class="list-group-item">HTML</li>
                    <li class="list-group-item">CSS</li>
                    <li class="list-group-item">JavaScript</li>

                </ul>
            </div>
            <div className='row'>
                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li class="listHeader">Framework</li>
                        <li class="list-group-item">Bootstrap</li>
                        <li class="list-group-item">NodeJs</li>
                    </ul>
                </div>

                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li class="listHeader">Library</li>
                        <li class="list-group-item">ReactJS</li>
                        <li class="list-group-item">jQuery</li>
                    </ul>
                </div>

            </div>
                     
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li class="listHeader">Extra</li>
                    <li class="list-group-item">Git</li>
                    <li class="list-group-item">Github</li>
                    <li class="list-group-item">APIs</li>
                    <li class="list-group-item">VS Code</li>
               </ul>
            </div>
            
        </div>
  
    )
}


export default Stack;