import React from 'react'
import '../css/Post.css'
import Avatar from '@mui/material/Avatar';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOUtlinedIcon from '@mui/icons-material/SendOutlined';
import { Timestamp } from 'firebase/firestore';

interface Props {
    name?: string;
    description?: string;
    message?: string;
    photoUrl?: string; // make this optional
    timestamp?: Timestamp;
}

function Post({name, description, message, photoUrl, timestamp}: Props) {
const formattedTimestamp = timestamp ? timestamp.toDate().toLocaleString() : ''; // if timestamp exists, convert to date and format it to local string
  return (
    <div className="post">
        <div className="post__header">
            <Avatar className='avatar' src={photoUrl}/>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className="post__timestamp">
                <p>{formattedTimestamp}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray'/>
            <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray'/>
            <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray'/>
            <InputOption Icon={SendOUtlinedIcon} title='Send' color='gray'/>
        </div>
    </div>
  )
}

export default Post