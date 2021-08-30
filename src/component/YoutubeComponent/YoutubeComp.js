import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className= "youtube-wraper">
            <div className= "img-thumb">
                <img src="https://picsum.photos/seed/picsum/150/180" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    );
}

YoutubeComp.defaultProps = {
    time: '00.00',
    title: 'Title Here',
    desc: 'Desc Here'
}

export default YoutubeComp;
