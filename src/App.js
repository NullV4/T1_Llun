import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [formData2, setFormData2] = useReducer(formReducer, {});
  const [formData3, setFormData3] = useReducer(formReducer, {});
  const [formData4, setFormData4] = useReducer(formReducer, {});
  const [formData5, setFormData5] = useReducer(formReducer, {});
  
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    },7000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChange2 = event => {
    setFormData2({
      name: event.target.name,
      value: event.target.value,
    });
  }
  
  const handleChange3 = event => {
    setFormData3({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChange4 = event => {
    setFormData4({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChange5 = event => {
    setFormData5({
      name: event.target.name,
      value: event.target.value,
    });
  }

 
  return(
    <div className="estilo">
      <h1>Usando formularios y eventos en React</h1>
      {submitting &&
       <div>
         Tu realizaste Submit para la siguiente información:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>Nombres</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(formData2).map(([name, value]) => (
             <li key={name}><strong>Apellidos</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>Fecha_NAm</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(formData2).map(([name, value]) => (
             <li key={name}><strong>Telefono</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>Direccion</strong>: {value.toString()}</li>
           ))}
         </ul>
         
       </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Nombres</p>
            <input name="name" onChange={handleChange}/>
          </label>
          <label>
            <p>Apellidos</p>
            <input name="ape" onChange={handleChange2}/>
          </label>
          <label>
            <p>Fecha Nacimiento</p>
            <input name="name" onChange={handleChange3}/>
          </label>
          <label>
            <p>Telefono</p>
            <input name="ape" onChange={handleChange4}/>
          </label>
         
          
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}



export default App;
