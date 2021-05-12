import React, { useState } from 'react'
import './Header.css'
import MenuSharpIcon from '@material-ui/icons/MenuSharp'
import SearchIcon from '@material-ui/icons/SearchSharp'
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'

function Header() {
  const [inputSearch, setInputSearch] = useState('')

  return (
    <div className='header'>
      <div className='header_left'>
        <MenuSharpIcon />
        <Link to='/'>
          <img
            className='header_logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/640px-YouTube_Logo_2017.svg.png'
            alt=''
          />
        </Link>
      </div>

      <div className='header_input'>
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          type='text'
          placeholder='Search'
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='search'></SearchIcon>
        </Link>
      </div>

      <div className='header_icons'>
        <VideoCallSharpIcon className='header_icon' />
        <AppsIcon className='header_icon' />
        <NotificationsSharpIcon className='header_icon' />
        <Avatar
          alt='ronny'
          src='https://avatars.githubusercontent.com/u/78593839?v=4'
        />
      </div>
    </div>
  )
}

export default Header
