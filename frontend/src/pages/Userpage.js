// import CreateWorkout from '../components/CreateWorkout';

import { Link } from 'react-router-dom'
import { Button, Form, FormGroup } from 'react-bootstrap'

import {workouts} from '../workouts'

function Userpage() {
    return (
        <div className='content'>
            <h1>Userpage</h1>
            <br />
            <Link to={'/workout'}>
                <Button>Start Workout</Button>
            </Link>
        </div>
    )
}

export default Userpage