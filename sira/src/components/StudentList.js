import React, { useState, useEffect } from 'react';
import { getStudents } from '../services/api';
import Pagination from './Pagination';
import SortSelect from './SortSelect';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [sortBy, setSortBy] = useState('nombre');
    const [sortDirection, setSortDirection] = useState('desc');

    useEffect(() => {
        fetchStudents();
    }, [pageNumber, pageSize, sortBy, sortDirection]);

    const fetchStudents = async () => {
        try {
            const response = await getStudents(pageNumber, pageSize, sortBy, sortDirection);
            setStudents(response.data);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    return (
        <div>
            <h1>Student List</h1>
            <SortSelect setSortBy={setSortBy} setSortDirection={setSortDirection} />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Document Number</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.student_id}>
                            <td>{student.student_id}</td>
                            <td>{student.nombre}</td>
                            <td>{student.apellido}</td>
                            <td>{student.numero_identificacion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination 
                pageNumber={pageNumber} 
                setPageNumber={setPageNumber} 
                pageSize={pageSize} 
                setPageSize={setPageSize} 
            />
        </div>
    );
};

export default StudentList;
