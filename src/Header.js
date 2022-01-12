import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

export default function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img className="header__logo" alt="" src="https://brandlogos.net/wp-content/uploads/2021/09/tinder-flame-logo-512x512.png" />

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  )
}
