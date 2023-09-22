import React from 'react';
import Birthday from './components/Birthday';

const RouterBirthday = (props) => {
    const { params } = props.match;

    const { name, day, month } = params

    return (
        <>
            <Birthday name={name} month={month} day={day}></Birthday>
        </>
    );
};

export default RouterBirthday;