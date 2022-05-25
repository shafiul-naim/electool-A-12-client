import React from 'react';

const UserRow = ({user, refetch}) => {
    const { email, role } = user;
    return (
        <tr>
            <th>1</th>
            <td>{user.email}</td>
            <td>cy gurdian</td>
            <td>blue</td>
        </tr>
    );
};

export default UserRow;