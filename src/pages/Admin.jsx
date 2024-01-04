import React from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";
import { withAuthenticator } from '@aws-amplify/ui-react';
import { JunkTableHeader, JunkTableRowCollection } from '../ui-components'
import '../App.css'

const Admin = () => {
	const navigate = useNavigate();
	return (
		<div className='splashContainer flex w-full justify-evenly'>

		 	<div className='w-[1440px] m-auto '>

		 		<JunkTableHeader className = '!mt-5 ' />
		 		<JunkTableRowCollection overrideItems={(item, index) =>{
					const id = item.item.id
					return {
						overrides: {
							EditButton: {onClick: () => navigate(`/junkitemshow/${id}`)}
						}
					}
				}} className = '!mt-2 !w-full' />
				
		 	</div>

		</div>
	)
}

// export default withAuthenticator(Admin)
export default Admin
