import React from 'react';
import GridRow from '../components/gridRow';

const UserGrid = ({ users, edit, deleteUser }) => {
	return (
		<div>
			{users.map((user, idx) =>
						<GridRow column={user} key={idx}
							left={
								<button className='btn btn-info btn-sm' onClick={() => edit(user.id)} >Edit</button>
							}
							right={
								<button className='btn btn-danger btn-sm' onClick={() => deleteUser(user.id)}>Delete</button>
							} />
					)}
		</div>
	);
}

export default UserGrid;


