import React from 'react';
import Profile from '../components/Profile';
import Hero from '../components/Hero';

export default function ProfilePage(props) {
    return(
        <div className="profile-page">
            <Hero title={props.title} />
            <Profile />
        </div>
        
    )
} 