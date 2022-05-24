import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, SetTools] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tools')
        .then(res => res.json())
        .then(data => SetTools(data))
    }, ([]));
    return (
        <div className='grid grid-row-3 gap-10 px-12 sm:px-6'>
            {
                tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
            }
        </div>
    );
};

export default Tools;