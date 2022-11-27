import React, { useState } from 'react';



function Form(props) {

    const [formData, setFormData ] = useState({
        name:"",
        email:"",
        contact:"",
        image:""
    })

    function handleChange(event){
        const { name, value } = event.target;
       // console.log(name +" "+value);
        setFormData( prevData => {
            return{
               ...prevData,
                [name]:value
            }
            
        })

    }



    function submitForm(event){

       event.preventDefault();
       
       props.onButtonSubmit(formData)
       setFormData({
        name:"",
        email:"",
        contact:"",
        image:""
    })

      

    }
    return (
        <div>
            <form className='spa_form col-md-6'>
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input type="text" className='form-control' name='name' onChange={handleChange}/>
                </div>
                <br />
                <div className='form-group'>
                    <label htmlFor="name">Email</label>
                    <input type="text" className='form-control' name='email' onChange={handleChange}/>
                </div>
                <br />
                <div className='form-group'>
                    <label htmlFor="name">Phone</label>
                    <input type="text" className='form-control' name='contact' onChange={handleChange} />
                </div>
                <br />
                <div className='form-group'>
                    <label htmlFor="name">Image</label>
                    <input type="text" className='form-control' name='image' onChange={handleChange}/>
                </div>
                <br/>
                <div>
                    <button className='btn btn-primary' onClick={submitForm}>Submit</button>
                </div>
        
      </form>
        </div>
    );
}

export default Form;