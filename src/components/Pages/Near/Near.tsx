import React, { useRef, useState } from 'react';

import { Form } from '../..';
import { Data, ProvidedData, StructureData } from '../../Form/types';

import Map from './Map/Map';

import {
    NearHolder
} from './Near.elements'

const Near = () => {
    const [isLoading, isLoadingSet] = useState<boolean>(false);//dummy value //should be from reducer
    const [error, errorSet] = useState<string>(''); //dummy value //should be from reducer

    const titleRef = useRef<HTMLDivElement>(null);
    const descriptiondRef = useRef<HTMLDivElement>(null);

    const onSubmit = (userData: ProvidedData) => {
        console.log(userData)
    }
    
    const userSignInData: Data[] = [
        {
            ref: titleRef,
            name: 'title',
            value: '',
            type: 'text',
            error: '',
            isValid: false,
            mirror: false,
            config: {
                lengthCheck: {
                    min: 6,
                    max: 15
                },
                isAlphaNumeric: true
            }
        },
        {
            ref:  descriptiondRef,
            name: 'description',
            value: '',
            type: 'text',
            error: '',
            isValid: false,
            mirror: false,
            config: {
                lengthCheck: {
                    min: 6,
                    max: 30
                },
                isAlphaNumeric: true
            }
        }
    ];

    const structureData: StructureData = {
        link: '/',
        buttonLabel: 'Report',
        directLabel: "",
        directLink: '',
        extra: false,
        loading: isLoading,
        error: error,
        submitAction: onSubmit
    }

    return (
        <NearHolder>
            <Form
                 header='Report an accident'
                 initialData={userSignInData}
                 structureData={structureData}
            />
            <Map />
        </NearHolder>
    );
};

export default Near;