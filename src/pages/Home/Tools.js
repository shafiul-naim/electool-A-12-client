import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, SetTools] = useState([]);

    useEffect(() => {
        fetch('tools.json')
        .then(res => res.json())
        .then(data => SetTools(data))
    }, ([]));
    return (
        <div className='grid grid-rows-3 gap-10'>
            {
                tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
            }
        </div>
    );
};

export default Tools;