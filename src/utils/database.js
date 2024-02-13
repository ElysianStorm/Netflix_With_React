export const UsersModule = (() => {
	// Private array
	const users = [];

	// Public methods
	return {
		addUser: function (user) {
			users.push(user);
		},
		getAllUsers: function () {
			return users;
		},
		findUser: function (email, password) {
			for (let user of users) {
				if (user.email == email && user.password == password) return user;
			}
			return false;
		},
		// You can add more public methods here to interact with the private array
	};
})();

// Usage
// UsersModule.addUser("John");
// UsersModule.addUser("Alice");
// console.log(UsersModule.getUsers()); // Output: ['John', 'Alice']
