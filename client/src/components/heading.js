import React from 'react';
import { Link } from "react-router-dom";


export default function Header() {

    return (
        <header className="heading" >
            <h1>Student Management System</h1>
            <div>

                <Link to="/" className="button--head btn btn-success">Show Students</Link>
                <Link to="/create-student" className="button--head btn btn-success">Create Students</Link>
            </div>

        </header>

    )
}
