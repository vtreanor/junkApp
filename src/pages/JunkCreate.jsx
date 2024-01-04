import React from 'react'
import { JunkCreateForm } from '../ui-components'
import { NewJunk } from '../ui-components';
import '../App.css'
import '../css/pages.css'

const JunkNew = () => {
	return (
		<div className='splashContainer flex w-full justify-evenly'>

			<div className='w-[40%] '>

				<NewJunk />
				{/* <JunkCreateForm /> */}

			</div>

		</div>
	)
}

export default JunkNew