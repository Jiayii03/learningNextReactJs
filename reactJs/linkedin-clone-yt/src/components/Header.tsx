import '../css/Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

// install material ui icons: npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src="https://cdn.discordapp.com/attachments/1124938936414904441/1125057428250177536/001-linkedin.png" alt="" />

            <div className="header__search">
                <SearchIcon/>
                <input type="text" />
            </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatIcon} title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption avatar="https://yt3.ggpht.com/yti/AHyvSCAfPMUxIn34zI-BQDKnEi0UQ_Db7roTXrxbNA=s88-c-k-c0x00ffffff-no-rj-mo" title='me'/>
            
        </div>
    </div>
  )
}

export default Header