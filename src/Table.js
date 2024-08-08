import React, { useState } from 'react';
import './Table.css';
import data from './data.json';

const Table = () => {
    const [expandedRows, setExpandedRows] = useState([]);

    const toggleRow = (id) => {
        const currentIndex = expandedRows.indexOf(id);
        const newExpandedRows = [...expandedRows];
        if (currentIndex >= 0) {
            newExpandedRows.splice(currentIndex, 1);
        } else {
            newExpandedRows.push(id);
        }
        setExpandedRows(newExpandedRows);
    };

    const renderRows = (items, level = 0) => {
        return items.map((item) => (
            <React.Fragment key={item.id}>
                <tr
                    className={expandedRows.includes(item.id) ? 'expanded' : ''}
                    onClick={() => toggleRow(item.id)}
                    style={{ paddingLeft: `${level * 20}px` }}
                >
                    <td>{item.name}</td>
                    <td>{item.position}</td>
                    <td>{item.department}</td>
                    <td>{item.email}</td>
                </tr>
                {expandedRows.includes(item.id) && item.subItems && renderRows(item.subItems, level + 1)}
            </React.Fragment>
        ));
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Department</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {renderRows(data)}
            </tbody>
        </table>
    );
};

export default Table;
