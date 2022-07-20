import React from 'react';
import Job from '../components/Job';
import Navbar from '../components/Navbar';
import './Jobs.css';

function Jobs() {
    var data = [
        {
            name: 'Accountant',
            applytime: '2022/08/22',
            company: 'Mero Job'
        }
    ]
  return (
    <div>
        <Navbar />
        <div className="jobs">
        <h1>JOBS:</h1>
        
        {
            data.map((job, index) => (
                <Job name={job.name} applytime={job.applytime} company={job.company} key={index} />
            ))
        }
        
        </div>
    </div>
  )
}

export default Jobs;