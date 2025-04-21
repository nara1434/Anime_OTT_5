import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    let nav = useNavigate();
  return (
    <>
        <div className="container">
            <h4 className="text-center text-danger" onClick={()=>nav('/romanticThemeHome')}>Go To Home Page</h4>
        </div>
    </>
  )
}

export default PageNotFound