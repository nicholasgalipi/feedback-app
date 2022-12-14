import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
  const headerStyles = {
    backgroundColor: 'rgba(0,0,0,0.4)' , 
    color: '#ff6a95'
  }
  
  return (
    <header style = {headerStyles}> 
        <div className="container">
            <h2>
                {props.text}
            </h2>
        </div>
    </header>
  )
}

Header.defaultProps = { 
  text: 'Feeadback APP'
}

Header.propTypes ={
  text: PropTypes.string
}

export default Header


