import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_ROLES } from '../gql'

const roleIcons = {
  developer: '💻',
  designer: '🎨',
  planner: '📝'
}

const AsideItems = ({contentId, handleClickContent}) => {
  const { loading, error, data } = useQuery(GET_ROLES);
  if (loading) return <p className="loading">Loading...</p>
  if (error) return <p className="error">Error :(</p>

    return (
      <ul>
        {data.roles.map(({id}) => {
          return (
            <li key={id} className={'roleItem ' +  (contentId === 'id' ? 'on' : '')}
            onClick={() => {handleClickContent(id)}}>
              <span>{contentId === id ? '🔲' : '⬛'}</span>
              {roleIcons[id]} {id}
            </li>
          )
        })}
      </ul>
    )
}

export default AsideItems
