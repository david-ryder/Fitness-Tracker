import React from 'react';
import { exercises } from '../exercises'
import { Button, Form, FormGroup } from 'react-bootstrap'

import { Link } from 'react-router-dom'


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
	this.setState({ searchTerm: '' });
  }

  handleRemove = valueToRemove => {
	this.setState(prevState => ({
	  selectedExercises: prevState.selectedExercises.filter(value => value !== valueToRemove)
	}));
  }

  render() {
	return (
	  <div className='content'>
		<Form>
			<FormGroup className='mb-3'>
				<Form.Label>Workout name</Form.Label>
				<Form.Control type='text' placeholder='Enter name'></Form.Control>
			</FormGroup>

			<FormGroup className='mb-3'>
				<Form.Label>Add exercises</Form.Label>
				<Form.Control type="text" placeholder="Enter exercise" value={this.state.searchTerm} onChange={this.handleQuery}/>
				<div className='scroll'>
					{exercises.filter(item => !this.state.selectedExercises.includes(item.name)).filter(item => item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())).map((item, index) => (
						<div key={index} style={{display:'flex', justifyContent: 'space-between', padding: '0px 5px', backgroundColor: 'rgb(240, 240, 240)' }}>
							{/* <p type='button' value={item.name} onClick={this.handleAdd}>{item.name}</p> */}
							<button className='add' type='button' variant="primary" value={item.name} onClick={this.handleAdd}>{item.name}</button>
						</div>
					))}
				</div>
				
			</FormGroup>
		</Form>

		<div>
			<h1>Workout Plan:</h1>
			<p>
				Enter in the target number of Sets and Reps for each exercise. 
				When you are able to hit this goal, you will have met your goal and you can increase the weight! 
				We recommend setting a goal of 2-4 reps higher than what you could normally lift (ex: 3 sets of 12
				Barbell Curls)
			</p>
			<br />
			{this.state.selectedExercises.map((item, index) => (
				<div key={index} style={{display: 'flex', padding: '5px'}}>
					<p style={{flex: '1'}} key={item}>{item}</p>
					<div style={{flex: '3', display: 'flex', justifyContent: 'right', gap: '5%'}}>
						{/* <p>Sets:</p> */}
						<Form.Control type='text' style={{width: '70px', height: 'fit-content'}} pattern="[0-9]*" placeholder='Sets'></Form.Control>
						{/* <p>Reps:</p> */}
						<Form.Control type='text' style={{width: '70px', height: 'fit-content'}} pattern="[0-9]*" placeholder='Reps'></Form.Control>
						<Button style={{height: 'fit-content'}} variant="danger" value={item} onClick={() => this.handleRemove(item)}>Remove</Button>
					</div>
					
				</div>
				
			))}
		</div>
		<br />
		<Link to={"/userpage"} className='flex-item'>
			<Button style={{float: 'right'}} variant='success'>Create Workout</Button>
		</Link>
		{/* <Button style={{float: 'right'}} variant='success'>Create Workout</Button> */}
	  </div>
	);
  }
}

export default SearchBar;