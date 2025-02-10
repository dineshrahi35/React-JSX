// import React, { Component } from 'react'

// export class MyForm extends Component {
//   render() {
//     return (
//       <div>
//         <form>
//             <label>Student</label>
//             <input type='text' ></input>
//         </form>
//       </div>
//     )
//   }
// }
import React, { Component } from 'react'
import './components/formStyles.css'

export class myForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       textValue: '',
       skillValue: 'skill not selected'
    }
  }
  
  changeTextValue =(event) =>{
    this.setState({
        textValue: event.target.value
    })
  }

  changeSkillValue =(event) =>{
     this.setState({
        skillValue: event.target.value
     })
     
  }

  submitted = (event) =>{
   alert("Form is submitted "+ `${this.state.textValue} and ${this.state.skillValue}`)
   event.preventDefault();   

  }


  render() {
    return (
      <div>
        <form onSubmit={this.submitted}>
          <label>CollegeName</label>
          <input type='text' value={this.state.textValue} onChange={this.changeTextValue}>
          </input>
          <br></br>
          <label>Skill</label> 
          <select onChange={this.changeSkillValue}>
          <option>React</option> 
          <option>Angular</option>
          <option>Springboot</option> 
          <label>password</label> 
          </select> 
          <button type='submit'>Submit</button>
        
        </form>
        
      </div>
    )
  }
}

export default myForm
