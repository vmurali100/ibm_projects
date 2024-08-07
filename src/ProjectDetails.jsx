import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectDetails = () => {
  const projects = [
    {
      name: 'T90 (mod center)',
      description: 'Not Available',
      technology: 'HTML, CSS, JS, PHP',
      githubLink: 'https://github.ibm.com/zcomm/t90-wp',
      documentationLink: 'https://github.ibm.com/zcomm/t90-wp/blob/c360-stage/README.md',
      devLink: 'Not Available',
      uatLink: 'Not Available',
      stageLink: 'Available',
      prodLink: 'https://z-and-cloud.dal1a.cirrus.ibm.com/community/z-and-cloud/',
    },
    {
      name: 'Cratos',
      description: 'Cratos-addons-analytics can provide dashboards or reports that summarize these metrics...',
      technology: 'Python, Javascript, TypeScript, Docker',
      githubLink: 'https://github.ibm.com/zcomm/cratos-addons-analytics',
      documentationLink: 'https://github.ibm.com/zcomm/cratos-addons-analytics/blob/main/README.md',
      devLink: 'https://cratos.wdc1a.ciocloud.nonprod.intranet.ibm.com/test-analytics',
      uatLink: 'https://community.ibm.com/zsystems/api/analytics',
      stageLink: 'Not Available',
      prodLink: 'Not Available',
    },
    {
      name: 'Everest (advocacy hub)',
      description: 'Unified IBM zSystems easy button advocacy transformation program...',
      technology: 'Not Available',
      githubLink: 'https://github.ibm.com/zcomm/everest-general',
      documentationLink: 'https://github.ibm.com/zcomm/everest-general/blob/main/README.md',
      devLink: 'Not Available',
      uatLink: 'Not Available',
      stageLink: 'Not Available',
      prodLink: 'Not Available',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Project Details</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Technology</th>
            <th>GitHub</th>
            <th>Documentation</th>
            <th>Dev</th>
            <th>UAT</th>
            <th>Stage</th>
            <th>Prod</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.technology}</td>
              <td><a href={project.githubLink}>GitHub</a></td>
              <td><a href={project.documentationLink}>Documentation</a></td>
              <td><a href={project.devLink}>{project.devLink === 'Not Available' ? 'Not Available' : 'Dev'}</a></td>
              <td><a href={project.uatLink}>{project.uatLink === 'Not Available' ? 'Not Available' : 'UAT'}</a></td>
              <td>{project.stageLink}</td>
              <td><a href={project.prodLink}>Prod</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectDetails;
