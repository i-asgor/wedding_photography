import React from 'react';

const Service = ({service}) => {
    const {name} = service
    return (
        <div>
            <p>Service: {name}</p>
        </div>
    );
};

export default Service;