//import React from 'react'

export default function Header() {
  return (
    <header>
        <div className="profile-card">
          <img className="profile-pic" src="./images/profile-pic.png" alt="profile-pic" />
          <h1 className="name">Laura Smith</h1>
          <h3 className="job">Frontend Developer</h3>
          <p>laurasmith.website</p>
          <div className="btn-wrapper">
            <button className="email">Email</button>
            <button className="linkedIn">LinkedIn</button>
          </div>
        </div>
    </header>
  )
}
