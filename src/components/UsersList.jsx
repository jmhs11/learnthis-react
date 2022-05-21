import UserRow from './UserRow';
import style from './UserRow.module.css';

const UsersList = ({ users, children }) => {
	const usersRendered = users.map(user => (
		<UserRow key={user.name} {...user} />
	));

	return (
		<div className={style.list}>
			{children}
			{usersRendered}
		</div>
	);
};

export default UsersList;
