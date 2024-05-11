import React from 'react';

const Pagination = ({ pageNumber, setPageNumber, pageSize, setPageSize }) => {
    const handlePageChange = (event) => {
        setPageNumber(Number(event.target.value));
    };

    const handlePageSizeChange = (event) => {
        setPageSize(Number(event.target.value));
    };

    return (
        <div>
            <label>
                Page Number:
                <input 
                    type="number" 
                    value={pageNumber} 
                    onChange={handlePageChange} 
                    min="1" 
                />
            </label>
            <label>
                Page Size:
                <input 
                    type="number" 
                    value={pageSize} 
                    onChange={handlePageSizeChange} 
                    min="1" 
                />
            </label>
        </div>
    );
};

export default Pagination;
