import React from 'react';

const SortSelect = ({ setSortBy, setSortDirection }) => {
    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleSortDirectionChange = (event) => {
        setSortDirection(event.target.value);
    };

    return (
        <div>
            <label>
                Sort By:
                <select onChange={handleSortByChange}>
                    <option value="nombre">Name</option>
                    <option value="apellido">Last Name</option>
                    <option value="numero_identificacion">Document Number</option>
                </select>
            </label>
            <label>
                Sort Direction:
                <select onChange={handleSortDirectionChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </label>
        </div>
    );
};

export default SortSelect;
