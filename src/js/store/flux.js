const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			saveContactToStore: data => {
				setStore({ contacts: data });
			},
			actions: {
				addContactToStore: data => {
					setStore({ saveContactToStore: data });
				}
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
