import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

import {} from './Profile.elements';

const Profile = () => {
    const {user} = useSelector((state: RootState) => state.auth)

    console.log(user)
    return (
        <div>
            Hello, {user} 
        </div>
    );
};

export default Profile;