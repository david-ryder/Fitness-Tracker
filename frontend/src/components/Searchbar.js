import React, { useState } from 'react';
import { exercises } from '../exercises'
import { Button, Form, FormGroup } from 'react-bootstrap'


class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div style={{ padding: '0 20%'}}>
        <FormGroup>
                <Form.Label>Search exercises</Form.Label>
                <Form.Control type="text" placeholder="Enter exercise" value={this.state.searchTerm} onChange={this.handleChange}/>
                {exercises.filter(item => item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())).map(item => (
                    <div style={{display:'flex', justifyContent: 'space-between', padding: '5px' }}>
                        <option key={item.name}>{item.name}</option>
                        <Button variant="primary">Add</Button>
                    </div>
                ))}
        </FormGroup>
      </div>
    );
  }
}

export default SearchBar;