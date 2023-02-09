import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { changeJobs } from '../../store/jobData'

function Jobs() {

  const jobState = useSelector((state: any) => state.jobData.jobs)
  const userAccountType = useSelector((state: any) => state.userData.userAccountType)
  // console.log(jobState)
  const dispatch = useDispatch()

  useEffect(() => {

    let api = userAccountType === 'applier' ? `https://jobs-api-1.vercel.app/api/v1/jobs/applier` : `https://jobs-api-1.vercel.app/api/v1/jobs/poster`

    axios.get(api, { headers: { "Authorization": `Bearer ${JSON.parse(sessionStorage.getItem("token") as string)}` } })
      .then(res => {
        // console.log(res.data.jobs);
        dispatch(changeJobs(res.data.jobs))
      }
      )
  }, [])

  return (
    <div className=''>
      {jobState.map((job: any) =>
        <div className="card card-compact w-11/12 mx-auto my-5 bg-blue-200 shadow-xl">
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