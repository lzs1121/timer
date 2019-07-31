import React, { useEffect, useState } from 'react';

export default function FuncTimer() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        }
    }, []);

    return (
        <div>{date.toLocaleString()}</div>
    )
}