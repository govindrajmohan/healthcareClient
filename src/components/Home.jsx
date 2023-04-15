import React, { useEffect , useState} from 'react'
import axios from 'axios'

const Home = (props) => {
      const[token,setToken]=useState(null);
      const[patient,setPatient] = useState([])
      const[appointment,setAppointment]=useState([]);
      const[record,setRecord]=useState([]);
      const[inventory,setInventory]=useState([]);


      const getUser = () => {
        axios.get("http://localhost:5000/auth/login/success", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => {
        if (response.status === 200) return response.data;
        throw new Error("authentication has been failed!");
      })
      .then((res) => {
        setToken(res.user.accessToken)
        // console.log(res.user.accessToken)
      })
      .catch((err) => {
        console.log(err);
      });
      };

      useEffect(() => {
        getUser();
      }, []);
    


  const getPatient = async() => {

    try {
      await axios.get("http://localhost:5000/auth/patient",{
        headers: {
          'Content-Type': 'application/json',
          "Authorization":token,  
        },
        
      })
      .then((res) => {
        setPatient(res.data);
        // console.log(res.data[0].patientId)
      });
    } catch (err) {
      console.log(err);
    }
  
  };

  
  const getAppointment = async() => {

    try {
      await axios.get("http://localhost:5000/auth/appointment",{
        headers: {
          'Content-Type': 'application/json',
          "Authorization":token,  
        },
        
      })
      .then((res) => {
        setAppointment(res.data);
        // console.log(res.data)
      });
    } catch (err) {
      console.log(err);
    }
  
  };

  const getRecord = async() => {

    try {
      await axios.get("http://localhost:5000/auth/record",{
        headers: {
          'Content-Type': 'application/json',
          "Authorization":token,  
        },
        
      })
      .then((res) => {
        setRecord(res.data);
        // console.log(res.data)
      });
    } catch (err) {
      console.log(err);
    }
  
  };

  const getInventory = async() => {

    try {
      await axios.get("http://localhost:5000/auth/inventory",{
        headers: {
          'Content-Type': 'application/json',
          "Authorization":token,  
        },
        
      })
      .then((res) => {
        setInventory(res.data);
        // console.log(res.data)
      });
    } catch (err) {
      console.log(err);
    }
  
  };
  useEffect(() => {
    setTimeout(()=>{
      getPatient();
      getAppointment();
      getRecord();
      getInventory();
    },500)
  }, [token]);
 
  return (
    <>
    {props.user? (<div className='components'>
      <h4>HEALTH CARE MANAGEMENT</h4>
       <div className="container-fluid">
         <div className="row dashboard-row">
             <div className="col-xs-12 col-sm-6 col-md-6 dashboard-col">
               <h4 >Patient Details</h4>
               <hr />
                {patient.map((val,index)=>{
                  return(
                  <>
                    <li >Patient ID : {val.patientId} , Gender : {val.gender}</li>
                    <li >First Name : {val.firstName} ,  Last Name : {val.lastName}</li>
                    <li >Email : {val.email}</li>
                    <li >DOB : {val.dateOfBirth}</li>
                  <hr />

                  </>
                  )
                })}
               </div>

             <div className="col-xs-12 col-sm-6 col-md-6 dashboard-col">
             <h4>Appointments</h4>
             <hr />
                {appointment.map((val,index)=>{
                  return(
                  <>
                    <li >Appointment ID : {val.appointmentId} , Patient ID : {val.patientId}</li>
                    <li >Reason : {val.reason}</li>
                    <li >Notes : {val.notes}</li>
                    <li >Date : {val.date}</li>
                    <hr />

                  </>
                  )
                })}
                
             </div>
            
         </div>
         <div className="row dashboard-row">
             <div className="col-xs-12 col-sm-6 col-md-6 dashboard-col">
               <h4 >Medical Record</h4>
               <hr />
                {record.map((val,index)=>{
                  return(
                  <>
                  <li >Patient ID : {val.patientId}</li>
                  <hr />
                  <h6>Medications</h6>

                    <li >Name : {val.medications[0].name} ,  Frequency : {val.medications[0].frequency}</li>
                    <li >Dosage : {val.medications[0].dosage}</li>
                    <hr />
                    <h6>Allergies</h6>
                    <li >Name : {val.allergies[0].name} ,  Reaction : {val.allergies[0].reaction}</li>
                    <hr />
                    <h6>Diagnosis</h6>
                    <li >Name : {val.diagnoses[0].name} ,  Description : {val.diagnoses[0].description}</li>

                  </>
                  )
                })}
               </div>

             <div className="col-xs-12 col-sm-6 col-md-6 dashboard-col">
             <h4>Inventory</h4>
             <hr />
                {inventory.map((val,index)=>{
                  return(
                  <>
                    <li >Inventory ID : {val.inventoryId}</li>
                    <li >Name : {val.name}</li>
                    <li >Quantity : {val.quantity}</li>
                    <li >Unit Price : {val.unitPrice}</li>
                    <hr />

                  </>
                  )
                })}
                
             </div>
            
         </div>
    </div>
      
    </div>):
    <p>You are not logged in </p>
    }
    </>
  );
}

export default Home