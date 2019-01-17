import React from 'react';

export const Tbody = (props) => {
    return <tbody keys={props.index}>
    <tr>
        {
            Object.values(props.data).map((addressdata, addressind) => {
                return <td key={addressind}>{addressdata}</td>
            })
        }
    </tr>
</tbody>
}