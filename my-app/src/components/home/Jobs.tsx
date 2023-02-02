import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Jobs() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {

    let api = `https://jobs-api-1.vercel.app/api/v1/applications`

    axios.get(api, { headers: { "Authorization": `Bearer ${JSON.parse(sessionStorage.getItem("token") as string)}` } })
      .then(res => {
        console.log(res.data.jobs);
        setJobs(res.data.jobs)
      }
      )
  }, [])

  return (
    <div className='flex flex-wrap w-4/5 m-auto'>
      {jobs.map((job : any) =>
        <div className="card card-compact w-96 m-10 bg-blue-200 shadow-xl">
          {/* <figure><img src="" alt="job-banner" /></figure> */}
          <div className="card-body">
            <h2 className="card-title">{job.company}</h2>
            <p>{job.position}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Apply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Jobs