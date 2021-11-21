import React, {useState} from 'react';
import {Alerts, Holder, Header, Logo, NameHolder, BackText, Spinner, Terms, NavLinkElement} from './Home.elements';

import { PageBlueprint } from '../theme/globalStyle';

import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [loading, loadingSet] = useState<boolean>(false)
    const [alerts, alertsSet] = useState<boolean>(true)
    const [locate, locateSet] = useState<boolean>(false)
    const [isAuth, isAuthSet] = useState<boolean>(false);

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
                <Logo/>
                <Header>revide.</Header>
            </NameHolder>
            <NavLinkElement onClick={() => fakeLocate()}>
                {!loading ?
                    <BackText>{!locate ? 'Locate' : 'Report'}</BackText>
                    :
                    <Spinner/>
                }
            </NavLinkElement>
            <Alerts>{(alerts && locate) ? <>
                <span style={{fontWeight: 400}}>or</span> <span style={{fontStyle: 'italic', cursor: 'pointer', fontWeight: 800}}>see 2 alerts</span>
            </> : ''}</Alerts>
        </Holder>
        <Terms>Terms & Conditions</Terms>
        </PageBlueprint>
    );
};

export default Home;