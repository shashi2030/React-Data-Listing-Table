import React from 'react';
export const Thead = (props) => {
    return <thead keys={props.index}>
        <tr>
            {
                Object.keys(props.data).map((value, index) => {
                    return <th key={index}>{value}</th>
                })
            }
        </tr>
    </thead>
}