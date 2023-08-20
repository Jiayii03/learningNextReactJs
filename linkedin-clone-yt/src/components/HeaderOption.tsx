import '../css/HeaderOption.css';
import { Icon } from '@mui/material'; 
import { Avatar } from '@mui/material'; // import this from material ui to use <Avatar/>

interface HeaderOptionProps{
  Icon?: any, // ? means it is optional
  title: string
  avatar?: any
}

function HeaderOption({Icon, title, avatar}: HeaderOptionProps) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption__icon'/>}
      {avatar && (
        <Avatar className='headerOption__icon' src={avatar}/>
      )}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption