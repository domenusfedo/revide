import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

import {
    UserData,
    UserPic,
    UserPersonal,
    Name,
    SmallStatictics,
    DataField,
    DataHihglight,
    DataNormal,
    UserIcon
} from './Profile.elements';

const Profile = () => {
    const {username} = useSelector((state: RootState) => state.auth)

    return (
        <>
            <UserData>
                <UserPic>
                    <UserIcon/>
                </UserPic>
                <UserPersonal>
                    <Name>{username ? username : 'CleverTiger069'}</Name>
                    <SmallStatictics>
                        <DataField>
                            <DataHihglight>2</DataHihglight>
                            <DataNormal>created</DataNormal>
                        </DataField>
                        <DataField>
                            <DataHihglight>100</DataHihglight>
                            <DataNormal>participated</DataNormal>
                        </DataField>
                    </SmallStatictics>
                </UserPersonal>
            </UserData>
        </>
    );
};

export default Profile;