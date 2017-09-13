import React from 'react'

const Dropdown = ({results, onClick, active}) => {

  return (
      <div className="dropdown show">
        <div className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
          {results.map((result, i) => (<a className="dropdown-item" key={i} href="#" onClick={()=>onClick(result, active)}>{result}</a>))}
        </div>
      </div>
  )
};

export default Dropdown;
