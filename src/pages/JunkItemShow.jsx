import React from 'react'
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { generateClient } from 'aws-amplify/api'
import { getJunk } from '../graphql/queries';
import JunkDetail from '../ui-components/JunkDetail';

const client = generateClient()

export async function loader({ params }) {
  const id = params.id
  const junk = await client.graphql({
    query: getJunk,
    variables: { id: id }
  })
  return { junk };
}

const JunkItemShow = () => {
  const { junk } = useLoaderData();
  const { id, header, body, image, price, date, createdAt, updatedAt } = junk.data.getJunk
  const detail = junk.data.getJunk
  return (
    <div className='flex justify-center'>
      <JunkDetail junk = {detail} className='' />
    </div>
  )
}

export default JunkItemShow
