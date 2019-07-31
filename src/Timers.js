import React, { Component, useEffect, useState } from 'react';

function FuncTimer() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date());
        }, 1000);
    }, [])

    return (
        <div>{date.toLocaleTimeString()}</div>
    );
}

export default function Timers() {
    return (
        <div>
            <FuncTimer />
        </div>
    );
}