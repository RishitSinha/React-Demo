import React, {Component} from 'react';
import '../css/DisplayNotes.css';

export default class DisplayNotes extends Component{
  constructor(){
    super();
    this.state = {
      filteredList:'',
    }
  }

  render(){
    return(
        <div className='displayNotes'>
          <input type='text'
                placeholder='Search'
                className='filterInput'
                onChange={this.filterNotes.bind(this)} />
          <div className='noteList'>
              {
                this.state.filteredList ?
                  this.state.filteredList.map(function(note,index){
                      return <Note note={note} key={'note'+index} />;
                  })
                  :this.props.noteList.map(function(note,index){
                      return <Note note={note} key={'note'+index} />;
                  })
              }
          </div>
        </div>
    )
  }

  filterNotes(e){
    let filter = e.target.value.trim().toLowerCase();
    let filteredList = this.props.noteList.filter(function(note){
      return note.toLowerCase().indexOf(filter) !== -1;
    })
    this.setState({
      filteredList: filteredList
    })
  }
}

class Note extends Component {
  render(){
    return(
      <div className='note'>
        <p>
          {this.props.note}
        </p>
        <p onClick={this.delete.bind(this)}>
          X
        </p>
      </div>
    )
  }

  delete(){
    console.log('Try writing the code for this yourself...this should help with making all the concepts of passing props clear.');
  }
}
