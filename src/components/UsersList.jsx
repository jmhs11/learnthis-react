import { useState } from 'react';
import UserRow from './UserRow';
import style from './UsersList.module.css';

const UsersList = ({ users, children }) => {
	const [search, setSearch] = useState('J');

	const usersFiltered = search
		? users.filter(user =>
				user.name.toLowerCase().startsWith(search.toLowerCase())
		  )
		: users;

	const usersRendered = usersFiltered.length ? (
		usersFiltered.map(user => <UserRow key={user.name} {...user} />)
	) : (
		<p>No hay usuarios</p>
	);

	return (
		<div className={style.list}>
			{children}
			<input
				type='text'
				name='search'
				value={search}
				onChange={ev => setSearch(ev.target.value)}
			/>
			{usersRendered}
		</div>
	);
};

export default UsersList;
