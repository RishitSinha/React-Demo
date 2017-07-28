import React, { Component } from 'react';
import './css/App.css';
import CreateNote from './Components/CreateNote';
import DisplayNotes from './Components/DisplayNotes';

const initial_notes = [
  'This is the first note',
  'One more',
  'Yet another one',
  'Just populating the list',
  'Last.',
]

class App extends Component {
  constructor(){
    super();
    this.state = {
      noteList: initial_notes,
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">
          Notes App
        </h1>

        <CreateNote addNote={ (note) => {this.addNote(note)} } />
        <DisplayNotes noteList={this.state.noteList} />
      </div>
    );
  }

  addNote(note){
    let noteList = this.state.noteList;
    noteList.push(note);
    this.setState({
      noteList: noteList
    });
  }
}

export default App;
