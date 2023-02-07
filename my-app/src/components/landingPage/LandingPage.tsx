import React from 'react'
import hero from '../../images/undraw_job_hunt_re_q203.svg'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className=''>
      <header className='flex justify-evenly border-gray-100 border-b-2'>
        <div className="btn btn-ghost font-black text-xl sm:text-2xl text-blue-500">UDHYOGAM</div>
        <div className='flex'>
          <ul className='flex justify-evenly font-serif text-xs mt-2 max-[640px]:grid '>
            <li className="px-4 m-2">Home</li>
            <li className="px-4 m-2">Find Jobs</li>
            <li className="px-4 m-2">Find Candidates</li>
            <li className="px-4 m-2">Articles</li>
          </ul>
        </div>
        <div>
          <Link to="login"><button className='m-2 bg-white hover:bg-gray-300 text-blue-500 font-bold px-4 border-b-4 border-gray-300 hover:border-gray-500 rounded w-24'>Login</button></Link>
          <Link to="register"><button className='m-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Register</button></Link>
        </div>
      </header>

      <main className='flex justify-evenly w-9/12 m-auto max-[640px]:flex-col-reverse'>
        <img className='' src={hero} alt="hero" />
        <section className='uppercase'>
          <h1 className="text-4xl font-black text-blue-500 pt-2">Get The Right Job You Deserve</h1>
          <p className='text-sm font-mono pt-4'>We understand that finding the right job can be a daunting task, and that's where we come in. Our job portal is designed to connect job seekers with top employers across a variety of industries.With our easy-to-use search tools and comprehensive job listings, you can find the perfect opportunity that aligns with your skills, experience, and career goals.So why wait? Start your job search today and take the first step towards finding your dream job. And don't forget to create a profile and upload your resume, so that employers can find you too!</p>
        </section>
      </main>

      <footer className='py-2'>
        <ul className='flex justify-evenly font-serif text-xs mt-2 border-gray-100 border-t-2'>
          <li className="px-4 m-2">About</li>
          <li className="px-4 m-2">Jobs</li>
          <li className="px-4 m-2">Contact Us</li>
          <li className="px-4 m-2">Terms</li>
          <li className="px-4 m-2">Privacy Policy</li>
        </ul>
      </footer>
    </div>
  )
}

export default LandingPage