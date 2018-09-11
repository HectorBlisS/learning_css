import React from 'react'
import {Avatar, Menu, Dropdown,Button, Divider} from 'antd'
import { Link } from 'react-router-dom';
import { logOut } from '../../services/firebase';


const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/profile">
            Tu Perfil
        </Link>
      </Menu.Item>
      <Divider/>
      <Menu.Item>
        <Button 
            type="danger"
        onClick={logOut}>
            Cerrar sesión
        </Button>
      </Menu.Item>
    </Menu>
  );

const ActiveUser = ({user={}}) => {
    return(
        <Dropdown overlay={menu}>
            <Avatar style={{cursor:"pointer"}} src={user.photoURL} />
        </Dropdown>
    )
}

export default ActiveUser