import React from 'react';
import {Thead} from './Thead';
import {Tbody} from './Tbody';

export const Tr = (props) => {
    return <tr key={props.index}>
        {
            Object.values(props.data).map((val, ind) => {
                if (typeof val === 'object') {
                    return <td key={ind}><table>
                        <Thead data={val} />
                        <tbody>
                            <tr>
                                {
                                    Object.values(val).map((vdata, vind) => {
                                        if (typeof vdata === 'object') {
                                            return <td key={vind}><table>
                                                <Thead data={vdata} index={vind} />
                                                <Tbody data={vdata} index={vind} />
                                            </table>
                                            </td>
                                        }
                                        return <td key={vdata}>{vdata}</td>
                                    })
                                }
                            </tr>
                        </tbody>
                    </table></td>
                }
                return <td key={ind}>{val}</td>
            })
        }
    </tr>;
}