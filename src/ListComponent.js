import React, { useState, useEffect } from 'react';

const ListComponent = ({ initialItems }) => {
    const firstList = initialItems;
    const [selectedItem, setSelectedItem] = useState(initialItems[0]);
    const [secondList, setSecondList] = useState([]);

    useEffect(() => {
        const updatedSecondList = firstList.filter(item => item !== selectedItem);
        setSecondList(updatedSecondList);
    }, [selectedItem, firstList]);

    const handleSelect = (selectedItem) => {
        setSelectedItem(selectedItem);
    };

    return (
        <div>
            <div>
                <h3>Первый список</h3>
                <select onChange={(e) => handleSelect(e.target.value)} size={initialItems.size}>
                    <option value="" disabled>Выберите вариант</option>
                    {firstList.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div>
                <h3>Второй список</h3>
                <select>
                    <option value="" disabled>Выберите вариант</option>
                    {secondList.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ListComponent;
