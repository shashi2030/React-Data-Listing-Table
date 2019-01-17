import React, { Component } from 'react';
import {TableBody} from './TableBody';

require('./list.css');
const userlist = [
    {
        id: 1,
        personalinfo: {
            name: "Michael",
            contact: 9868458547,
            address: {
                building: 202,
                street: '1st street 22nd',
                zip: 20202,
                state: 'MP',
                country: 'India'
            }
        },
        officeinfo: {
            contact: 12001212121,
            address: {
                building: 635,
                street: '2nd street 1st',
                zip: 989898,
                state: 'UP',
                country: 'India'
            },
            location: {
                lat: 121.00,
                lang: 2124.00
            }
        }
    },
    {
        id: 2,
        personalinfo: {
            name: "Smith",
            contact: 9868458547,
            address: {
                building: 23402,
                street: '1dst street 22nd',
                zip: 2023302,
                state: 'MP',
                country: 'India'
            }
        },
        officeinfo: {
            contact: 12001212121,
            address: {
                building: 633435,
                street: '2ssnd street 1st',
                zip: 9898333398,
                state: 'UP',
                country: 'India'
            },
            location: {
                lat: 1231.00,
                lang: 21234.00
            }
        }
    }
]
class Listing extends Component {
    render() {
        return (
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Personal Information</th>
                            <th>Office Information</th>
                        </tr>
                    </thead>
                    <TableBody data={userlist} />
                </table>
            </div>
        )
    }
}
export default Listing;