import React from 'react';

import Rive, {Alignment, Fit, Layout, useRive, useStateMachineInput} from 'rive-react';

// @ts-ignore: Unreachable code error
import FollowText from '../../animations/follow.riv';

const Follow = () => {
    const STATE_MACHINE_NAME = 'followMachineState';

    const {rive, RiveComponent} = useRive({
        src: FollowText,
        // animations: 'follow',
        artboard: 'WhiteVer',
        autoplay: true,
        layout: new Layout({
            fit: Fit.ScaleDown,
            maxY: 10
        })
    })

    const onClickRiveHandler = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'isFollow'
      )

    return (
        <>
            <RiveComponent onClick={() => onClickRiveHandler?.value}/>
        </>
    );
};

export default Follow;