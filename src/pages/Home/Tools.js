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
        <div className='grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-8 sm:px-6'>
            {
                tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
            }
        </div>
    );
};

export default Tools;