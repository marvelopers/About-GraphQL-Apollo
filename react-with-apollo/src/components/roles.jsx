
import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_ROLES, GET_ROLE } from '../gql'

import './components.css';


const Roles = () => {

  
  
  const MainContents = () => {
    const { loading, error, data } = useQuery(GET_ROLE, {
      variables: {id: contentId}
    })
  
    if (loading) return <p className="loading">Loading...</p>
    if (error) return <p className="error">Error :(</p>
    if (contentId === '') return (<div className="roleWrapper">Select Role</div>)
    
    return (
      <div className="roleWrapper">
        <h2>{data.role.id}</h2>
        <div className="requirement"><span>{data.role.requirement}</span> required</div>
        <h3>Members</h3>
        <ul>
          {data.role.members.map((member) => {
            return (<li>{member.last_name}</li>)
          })}
        </ul>
        <h3>Equipments</h3>
        <ul>
          {data.role.equipments.map((equipment) => {
            return (<li>{equipment.id}</li>)
          })}
        </ul>
        <h3>Softwares</h3>
          {data.role.softwares.map((software) => {
            return (<li>{software.id}</li>)
          })}
        <ul>
        </ul>
      </div>
    );
  }

  const { loading, error, data } = useQuery(GET_ROLES);
  if (loading) return <p className="loading">Loading...</p>
  if (error) return <p className="error">Error :(</p>


  return (
    <Layout>
      {MainContents()}
    </Layout>
  )
}


export default Roles;

