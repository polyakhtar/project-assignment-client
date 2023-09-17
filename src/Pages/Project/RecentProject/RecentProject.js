import React, { useEffect, useState } from 'react';
import './RecentProject.css';

const RecentProject = () => {
  const [projects, setProjects] = useState([]);
  const [clickedProjectImage, setClickedProjectImage] = useState(null);

  const fetchProjects = () => {
    fetch('http://localhost:5000/projects')
      .then((res) => res.json())
      .then((data) => {
        const reserveProjects = data.reverse();
        setProjects(reserveProjects);
      });
  };

  useEffect(() => {
    fetchProjects(); // Fetch projects when the component mounts

    // Poll for new projects every 10 seconds (adjust the interval as needed)
    const interval = setInterval(() => {
      fetchProjects();
    }, 10000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (imageURL) => {
    setClickedProjectImage(imageURL);
  };

  return (
    <div className='py-6 px-4 border-2' style={{ width: '60%' }}>
      <h3 className='text-2xl mb-2' style={{ color: '#111827' }}>
        Your recent projects
      </h3>
      <p className='mb-4' style={{ color: '#9CA3AF' }}>
        Select and browse your project image and start experimenting
      </p>
      <div>
        {clickedProjectImage ? (
          <img
            style={{ width: '100%', height: '100%' }}
            src={clickedProjectImage}
            alt='clicked-project'
          />
        ) : (
          <img
            style={{ width: '100%', height: '100%' }}
            src='https://img.freepik.com/premium-vector/realistic-plastic-wrap-texture-stretched-polyethylene-cover-wrinkled-surface_88188-1042.jpg?size=626&ext=jpg&ga=GA1.1.1122706375.1694927915&semt=ais'
            alt='placeholder'
          />
        )}
      </div>
      <div className='grid grid-cols-3 my-6 parent-div' style={{ paddingRight: '16px' }}>
        {projects.length === 0 ? (
          <p className='font-Poppins'>No project yet.</p>
        ) : (
          projects.map((project) => (
            <div
              key={project._id}
              className='card glass my-4 child-div'
              onClick={() => handleImageClick(project.image)}
            >
              <figure>
                <img src={project.image} alt='project' />
              </figure>
              <div className='p-2'>
                <h2 className='font-semibold' style={{ color: '#000000' }}>
                  {project.name}
                </h2>
                <p>{project.date.slice(0, 10)}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentProject;