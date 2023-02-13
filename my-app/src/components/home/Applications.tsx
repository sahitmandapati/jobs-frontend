import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeApplications } from '../../store/applicationData'

function Applications() {

  const applicationsState = useSelector((state: any) => state.applicationsData.applications)

  const dispatch = useDispatch()

  useEffect(() => {

    let api = 'https://jobs-api-1.vercel.app/api/v1/applications'

    axios.get(api, { headers: { "Authorization": `Bearer ${JSON.parse(sessionStorage.getItem("token") as string)}` } })
      .then(res => {
        // console.log(res.data.applicationsWithJobs);
        dispatch(changeApplications(res.data.applicationsWithJobs))
      }
      )
  }, [])

  return (
    <div className=''>
      {applicationsState.map((application: any) =>
        <div className="card card-compact w-11/12 mx-auto my-5 bg-blue-200 shadow-xl">
          {/* <figure><img src="" alt="job-banner" /></figure> */}
          <div className="card-body">
            <h2 className="card-title">
              {application.job.company}
            </h2>
            <p>
              {application.job.position}
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Apply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Applications