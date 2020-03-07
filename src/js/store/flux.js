const getState = ({ getStore, setStore }) => {
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
			}
		}

		//(Arrow) Functions that update the Store
		// Remember to use the scope: scope.state.store & scope.setState()
	};
};

export default getState;
