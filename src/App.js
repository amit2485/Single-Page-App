
import { useState,useEffect } from 'react';
import './App.css';
import DisplayForm from './components/DisplayForm';
import Form from './components/Form';
import Header from './components/Header';
import axios from "axios";

function App() {

  const  [results, setformResult ] = useState([]);

  useEffect( () => {
    getUser();

  },[])

  const getUser = () => {
    axios.get("http://localhost:3001/getUsers").then((response) => {
      console.log(response.data);
      setformResult(response.data)
    })

  }



  
  const createUser = (data) => {
    axios.post("http://localhost:3001/createUsers",data).then((response) => {
      //alert("User created");
      getUser();
    })
  }

  const deleteUserData = (id) => {
    axios.delete("http://localhost:3001/deleteUser/"+id).then((response) => {
      //alert("User deleted");
      getUser();

    })
   
  }
 
  function addFormData(newData){

    createUser(newData)
 
  }

  function deleteUser(id){
    console.log("id "+id);
    deleteUserData(id);

  }

  function editUser(id){
    console.log("edit "+id);
  }




  return (
    <div className='row'>
    <div className='col-lg-5'>
    <Header/>
    <Form 
      onButtonSubmit={addFormData}
    />
      </div>
     
      <div className='col-md-3'>
      {results.map((result) => {
        <br/>
        
        return ( <DisplayForm 
        key={result._id}
        id= {result._id}
        data = {result}
        onDelete = {deleteUser}
        onEdit = {editUser}

        />)
      })}

    {/* <DisplayForm data = {result}/> */}
    </div>
    </div>
  );
}

export default App;
