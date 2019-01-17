import React from 'react';
import { Tr } from './Tr';

export const TableBody = (props) => {
    return <tbody>
        {
            props.data.map((value, index) => {
                return <Tr key={'abc'+index} index={index} data={value} />
            })
        }
    </tbody>
}