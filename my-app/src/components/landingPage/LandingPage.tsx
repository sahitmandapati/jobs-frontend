import React from 'react';
import { Link } from "react-router-dom";


export default function LandingPage(props: any) {

  const content = {
    'header-p1': 'Udhyogam',
    'header-p2': '.com',
    'description': "We understand that finding the right job can be a daunting task, and that's where we come in. Our job portal is designed to connect job seekers with top employers across a variety of industries.With our easy-to-use search tools and comprehensive job listings, you can find the perfect opportunity that aligns with your skills, experience, and career goals.So why wait? Start your job search today and take the first step towards finding your dream job. And don't forget to create a profile and upload your resume, so that employers can find you too!",
    'primary-action': 'SignIn',
    'secondary-action': 'SignUp',
    'pattern': 'nereus-assets/img/bg/pattern2.png',
    ...props.content
  };

  return (
    <div>
      Landing Page
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}