import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function Header() {
	return (
		<Navbar className='nav'>
			<div style={{all: 'revert', display: 'flex', width: '100%'}}>
				<Link className='nav-item link' to={"/"}>Fitness App</Link>
				<div style={{flex: '3', display: 'flex', justifyContent: 'right', gap: '5%'}}>
					<Link className='nav-item link' to={"/login"}>Login</Link>
					<Link className='nav-item link' to={"/create"}>Create Workout</Link>
				</div>
			</div>
		</Navbar>
	);
}

export default Header;