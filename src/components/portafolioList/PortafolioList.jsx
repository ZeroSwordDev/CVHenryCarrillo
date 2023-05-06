import React from 'react'

const PortafolioList = ({folio ,active, setActivebtn}) => {
  return <li className={ active ? " active" : null} onClick={()=> setActivebtn(folio.id) }> {folio.name} </li>
}

export default PortafolioList;
