import React from 'react'
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import {generateClient} from 'aws-amplify/api'
import { getJunk } from '../graphql/queries';

const client = generateClient()

export async function loader({ params }) {
    const id = params.id
	const junk = await client.graphql({
        query: getJunk,
        variables: {id: id}
    })
	return  {junk} ;
}



const JunkRowEdit = () => {
    const { junk } = useLoaderData();
    const {id, header, body, image, price, date, createdAt, updatedAt} = junk.data.getJunk
    
    
  return (
    <div>
      {header} <br /> {body}
    </div>
  )
}

export default JunkRowEdit
