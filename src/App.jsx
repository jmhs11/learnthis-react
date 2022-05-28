import UsersList from './components/UsersList';

const USERS = [
	{
		name: 'Juan',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Pablo',
		active: false,
		role: 'student'
	},
	{
		name: 'Jose',
		active: true,
		role: 'other'
	}
];

const App = () => (
	<div className='App'>
		<UsersList users={USERS}></UsersList>
	</div>
);

export default App;
