import '../css/Sidebar.css';
import {Avatar} from '@mui/material';

function Sidebar() {

    const recentItem = (topic: string) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className = 'sidebar'>
        <div className="sidebar__top">
            <img src="https://cdn.discordapp.com/attachments/1124938936414904441/1125093769692324021/greg-bulla-neXcVVvm7No-unsplash.jpg" alt="" />
            <Avatar src="" className='sidebar__avatar'/>
            <h2>Jia Yi Chau</h2>
            <h4>AI intern at Meta Research</h4>
            
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Who followed you</p>
                <p className="sidebar__statNumber">2,448</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
        </div>
    </div>
  )
}

export default Sidebar