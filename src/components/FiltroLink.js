import React from 'react';

const FiltroLink = ({children, filtro, current, onClick}) => (
  <span>
  	{current === filtro?
  		<span>{children}</span>
  		:
  		<a
  		onClick={onClick}
  		href="#!">
        	{children}
        </a>
  	}
  </span>
);

export default FiltroLink;