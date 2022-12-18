import React from 'react';
import { exercises } from '../exercises'
import { Button, Form, FormGroup } from 'react-bootstrap'


class SearchBar extends React.Component {
  state = {
    searchTerm: '',
    selectedExercises: []
  };

  handleQuery = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleAdd = (event) => {
    this.setState(prevState => ({
        selectedExercises: [...prevState.selectedExercises, event.target.value]
    }));
  }

  handleRemove = valueToRemove => {
    this.setState(prevState => ({
      selectedExercises: prevState.selectedExercises.filter(value => value !== valueToRemove)
    }));
  }



  render() {
    return (
      <div style={{ padding: '0 20%'}}>
        <Form>
            <FormGroup className='mb-3'>
                <Form.Label>Workout name</Form.Label>
                <Form.Control type='text' placeholder='Enter name'></Form.Control>
            </FormGroup>


            <FormGroup className='mb-3'>
                <Form.Label>Search exercises</Form.Label>
                <Form.Control type="text" placeholder="Enter exercise" value={this.state.searchTerm} onChange={this.handleQuery}/>
                {exercises.filter(item => item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())).map((item, index) => (
                    <div key={index} style={{display:'flex', justifyContent: 'space-between', padding: '5px' }}>
                        <option>{item.name}</option>
                        <Button variant="primary" value={item.name} onClick={this.handleAdd}>Add</Button>
                    </div>
                ))}
            </FormGroup>
        </Form>

        <div>
            <h1>Exercise Plan:</h1>
            {this.state.selectedExercises.map((item, index) => (
                <div key={index} style={{display:'flex', justifyContent: 'space-between', padding: '5px' }}>
                    <option key={item}>{item}</option>
                    <Button variant="danger" value={item} onClick={() => this.handleRemove(item)}>Remove</Button>
                </div>
                
            ))}
        </div>


      </div>
    );
  }
}

export default SearchBar;