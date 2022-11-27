import React from 'react';
import './DisplayForm.css';
import Image from './Image';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";


function DisplayForm(props) {
    console.log(props.data.image);

    function deleteData(){
        props.onDelete(props.id)
    }

    function editData(){
      props.onEdit(props.id)
    }

    return (
         <div className="card">
      <div className="top">
       
        <h2 className="name">{props.data.name}</h2>
        <Image img={props.data.image} />
        
        
      </div>
      <div className="bottom">
        <p className='info'>{props.data.email}</p>
        <p>{props.data.contact}</p>
      </div>
      <div className='link'>
        <button onClick={editData}>Edit</button>
        <button onClick={deleteData}>Delete</button>
       
        </div>
    </div>
    );
}

export default DisplayForm;