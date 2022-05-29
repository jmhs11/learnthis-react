import UsersList from './components/UsersList';

const USERS = [
	{
		id: 0,
		name: 'Juan',
		active: true,
		role: 'teacher'
	},
	{
		id: 1,
		name: 'Pablo',
		active: false,
		role: 'student'
	},
	{
		id: 2,
		name: 'Jose',
		active: true,
		role: 'other'
	}
];

const App = () => (
	<div className='App'>
		<UsersList initialUsers={USERS}></UsersList>
	</div>
);

export default App;
