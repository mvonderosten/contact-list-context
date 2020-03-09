import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
// import { Link, withRouter } from "react-router-dom";
import { AddContactCard } from "../component/AddContactCard.js";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [contacts, setContacts] = useState();

	return (
		<div>
			<div
				value={contacts}
				onChange={e => setContacts(e.target.value)}
				onKeyPress={e => {
					if (e.key === "Enter") {
						actions.saveContact();
						setContacts("");
					}
				}}>
				<AddContactCard change={item} />
			</div>
		</div>
	);
};
