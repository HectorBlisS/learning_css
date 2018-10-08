import React from 'react';
import {Button} from "antd";

export const Header = ({loading, handleShow}) => {
  return (
    <div className='header'>
      <a className='logoanchor' href='https://www.ironhack.com/es' target="_blank" rel="noopener noreferrer" >
        <img src='https://cdn-images-1.medium.com/max/1200/1*69RcxrWXuk385lSxkIYYLA.png' alt='banner' />
      </a>
      {/* <Button loading={loading} onClick={handleShow} size='large' type='primary'>Agrégate a la lista</Button> */}
    </div>
  )
};

