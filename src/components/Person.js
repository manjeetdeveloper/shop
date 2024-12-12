import React , {Component } from 'react';
import Man from './Man';
 class Person extends Component {
    render() {
        return (
            <div>
                <div>Name: Manjeet Kuamr</div>
                <div>Age: 21</div>
                <Man></Man>
            </div>
        );
    }
 }
 export default Person;