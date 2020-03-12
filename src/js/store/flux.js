const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadContact: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/markvon")
					.then(resp => resp.json())
					.then(data => {
						console.log("contacts", data);
						setStore({ contacts: data });
					});
			},

			addContact: contactsToAdd => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/markvon", {
					method: "POST",
					body: JSON.stringify(contactsToAdd),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log("addContact", data);
						getActions().loadContact();
					});
			}

			// editContact: contactsToEdit => {
			// 	fetch("https://assets.breatheco.de/apis/fake/contact/agenda/markvon", {
			// 		method: "POST",
			// 		body: JSON.stringify(contactsToEdit),
			// 		headers: {
			// 			"Content-Type": "application/json"
			// 		}
			// 	})
			// 		.then(resp => {
			// 			return resp.json();
			// 		})
			// 		.then(data => {
			// 			console.log("editContact", data);
			// 			getActions().loadContact();
			// 		});
			// }
		}

		//(Arrow) Functions that update the Store
		// Remember to use the scope: scope.state.store & scope.setState()
	};
};

export default getState;
