import React from "react"
import { useEffect, useState } from "react"


const StudentList = () => {
    const [students, setStudents] = useState([])

    const fetchStudentsData = () => {
        fetch("http://localhost:8000/students")
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            const studentData = data.map((student) => ({
                first_name: student.first_name,
                last_name: student.last_name,
                id: student.id,
                real_id: student.real_id
            }))
            setStudents(studentData)
        }
    ).catch(err => console.log(err)) }
    useEffect(() => {fetchStudentsData()}, [students])
    return students
}   

export const GetStudentsPage = () => {
    const students = StudentList()
    return (
        <div>
            <div>
                <ol>
                    {Object.entries(students).map(([studentId, student]) => (
                    <li key={studentId}>{`${student.first_name} ${student.last_name}`}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
