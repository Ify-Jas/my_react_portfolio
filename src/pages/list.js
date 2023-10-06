// import Accordion from "react-bootstrap/Accordion";



// function List(){
//     return(
//         <div>
//            {data.map((data, index)=>{
//             return(
//                 <div key={index}>
//                     <h2>{data.title}</h2>
//                     <p>Company: {data.company.display_name}</p>
//                     <p>Location: {data.location.display_name}</p>
//                     <p>Salary: {data.salary_min}</p>
//                     <p>Contract time: {data.contract_time}</p>
//                     <p>Contract type: {data.contract_type}</p>
//                     <Accordion defaultActiveKey="0">
//                         <Accordion.Item eventKey="0">
//                             <Accordion.Header>View Description</Accordion.Header>
//                             <Accordion.Body>
//                                {data.description}

//                             </Accordion.Body>
//                         </Accordion.Item>
//                     </Accordion>
//                     <button 
//                     className="applyBtn"
//                     target="_blank" 
//                     href={data.redirect_url}>
//                       Apply Now
//                     </button>
//                 </div>
//             )
          
//          })}

//         </div>
//     )
// }

// export default List;