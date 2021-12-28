import React, {useEffect, useState} from 'react';
import {Alerts, Holder, Header, LogoHolder, LogoSVGHolder, NameHolder, BackText, Spinner, Terms, NavLinkElement} from './Home.elements';

import { PageBlueprint } from '../theme/globalStyle';

import { useNavigate } from "react-router-dom";
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';

const Home = () => {
    const {isAuth} = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();

    const [loading, loadingSet] = useState<boolean>(false);
    const [alerts, alertsSet] = useState<boolean>(true);
    const [locate, locateSet] = useState<boolean>(false);

    const fakeLocate = () => {
        if(locate) {
            if(isAuth) {
                navigate('/board');
                return;
            } else {
                navigate('/signin');
                return;
            }
        }
            loadingSet(true);
            setTimeout(() => {
            loadingSet(false);
            locateSet(true);
        }, 1000)
    }


    return (
        <PageBlueprint>
            <Holder>
            <NameHolder>
                <LogoHolder>
                    <LogoSVGHolder />
                </LogoHolder>
                <Header>Revide.</Header>
                {/* re.portage */}
            </NameHolder>
            <NavLinkElement onClick={() => fakeLocate()}>
                {!loading ?
                    <BackText>{!locate ? 'Locate' : 'Report'}</BackText>
                    :
                    <Spinner/>
                }
            </NavLinkElement>
            <Alerts>{(locate) ? <>
                <span style={{fontWeight: 400}}>or</span> <span style={{fontStyle: 'italic', cursor: 'pointer', fontWeight: 800}}>go to events</span>
            </> : ''}</Alerts>
        </Holder>
        <Terms>Terms & Conditions</Terms>
        </PageBlueprint>
    );
};

export default Home;