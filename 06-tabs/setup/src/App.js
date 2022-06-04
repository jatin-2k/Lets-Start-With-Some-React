import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [jobs, setJobs] = useState({});
  const [selection, setSelection] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const responce = await fetch(url);
      const newJobs = await responce.json();
      const newCompanies = await [...newJobs.map((job) => job.company)];
      newJobs.sort((a, b) => a.order - b.order);
      setJobs(newJobs);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const selectJob = (company) => {
    const newSelection = jobs.filter((job) => job.company === company)[0];
    console.log(newSelection);
    setSelection(newSelection.order-1);
  }

  useEffect(() => {
    fetchJobs();
  },[]);

  if(loading){
    return (<section className='section'>
        <div className='title'>
          <h3>Loading...</h3>
          <div className='underline'/>
        </div>
      </section>);
  }
  else{
    return (
      <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setSelection(index)}
                className={`job-btn ${index === selection && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{jobs[selection].title}</h3>
          <h4>{jobs[selection].company}</h4>
          <p className="job-date">{jobs[selection].dates}</p>
          {jobs[selection].duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
    );
  }
}

export default App
