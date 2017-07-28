import React,{Component} from 'react';
import '../css/createNote.css'

export default class CreateNote extends Component{
  constructor(){
    super();
    this.state = {
    }
  }

  render(){
    return(
      <div className="createNote">
        <form onSubmit={this.addNote.bind(this)}>
            <input type='text' placeholder='Enter your note...' ref='note'/>
            <input type='submit' value='Save' />
        </form>
      </div>
    )
  }

  addNote(e){
    e.preventDefault(); //To prevent the default form submit behaviour which includes page reloading.
    let note = this.refs.note.value.trim();
    if(!note){
      alert('Enter a note!');
    }
    else{
      this.props.addNote(note);
      this.refs.note.value="";
    }
  }
}
