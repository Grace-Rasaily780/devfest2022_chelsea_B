import React from 'react';
import './Job.css';

function Job({ name, applytime, company }) {
  return (
    <div className="job">
        <div className="job_text">
        <p className="job_name">{name}</p>
        <p className="job_desciption">{applytime} | {company}</p>
        </div>
        <div>
            <a href="/signup" target="_blank">apply</a>
        </div>
        
    </div>
  )
}

export default Job;