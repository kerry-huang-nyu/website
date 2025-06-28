import React, { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
  const csProjects = [
    {
      id: 1,
      name: "SBFE Research Project",
      description: "Investigated the representation problem in the context of Stochastic Boolean Function Evaluations. Proved that the representation problem has a linear approximation algorithm.",
      githubUrl: "https://github.com/kerry-huang-nyu/Reserach",
      technologies: ["Algorithms", "Python", "C++", "Jupyter Notebook", "LaTeX", "Research"],
      category: "Academic",
      mediaDir: "/project-images/research",
      mediaFiles: ["Conservative_and_adaptive_RR.jpg", "Strategy_visualization.jpg"]
    },
    {
      id: 2,
      name: "Applied ML",
      description: "Collection of applied machine learning projects and experiments.",
      githubUrl: "https://github.com/kerry-huang-nyu/Applied-ML",
      technologies: ["Python", "Jupyter Notebook", "Machine Learning"],
      category: "Academic",
      mediaDir: "/project-images/applied-ml",
      mediaFiles: ["kmeans.png", "pca.png", "separate.png", "tree.png"]
    },
    {
      id: 3,
      name: "Algorithms",
      description: "Self-made labs to understand concepts presented in Design and Analysis of Algorithms. Concepts include radix sort, red-black trees, graph algorithms, and more.",
      githubUrl: "https://github.com/kerry-huang-nyu/algos",
      technologies: ["C++", "Algorithms", "Data Structures"],
      category: "Academic",
      mediaDir: "/project-images/algos",
      mediaFiles: ["radix.jpg", "redblack.jpg"]
    },
    {
      id: 4,
      name: "Chess Robot",
      description: "Creating a chess playing robot suitable for mobility impaired users. My focus is on the daemon, the board reset algorithm, and the robot software. This SLDP project won Tandon's Gunter Georgi award.",
      githubUrl: "https://github.com/kerry-huang-nyu/chessRobot",
      technologies: ["Python", "Robotics", "Chess"],
      category: "Academic",
      mediaDir: "/project-images/chess-robot",
      mediaFiles: ["IMG_2969.JPG", "knightmove.mp4", "IMG_0018.jpg", "pawnmove.mp4"]
    },
    {
      id: 5,
      name: "Wordle Pangram",
      description: "Test if there exists a set of 5 words each containing 5 letters that, in total, utilize the 25 most common letters of the english alphabet.",
      githubUrl: "https://github.com/kerry-huang-nyu/Wordle_Pangram",
      technologies: ["Java", "Algorithms"],
      category: "Academic",
      mediaDir: "/project-images/wordle",
      mediaFiles: ["pangram.png"] 
    },
    {
      id: 6,
      name: "Game Programming",
      description: "Game development projects using C++ and openGL.",
      githubUrl: "https://github.com/kerry-huang-nyu/Intro-to-Game-Programming",
      technologies: ["C++", "Game Development", "OpenGL"],
      category: "Academic",
      mediaDir: ""
    },
  ];

  const personalProjects = [
    {
      id: 7,
      name: "Victorian Sports Corset",
      description: "Believe it or not, women used to wear corsets for sports.",
      technologies: ["Fashion Design", "Athletic Wear"],
      category: "Personal",
      mediaDir: "/project-images/sports-corset",
      mediaFiles: ["IMG_3903.JPG", "IMG_3892.mp4", "cachedVideo.mp4"]
    },
    {
      id: 8,
      name: "Pretty Housemaid Corset",
      description: "1890 Symington collection corset. I can't be bothered with coutil (period specific fabric) so I used an 5$ thrifted pair of jeans.",
      technologies: ["Fashion Design", "Historical Recreation"],
      category: "Personal",
      mediaDir: "/project-images/pretty-housemaid",
      mediaFiles: ["IMG_3273.JPG", "IMG_3274.JPG", "ea1650c33032438ca1b3a275bd3aaf50.MP4", "IMG_2616.jpg"]
    },
    {
      id: 9,
      name: "Trench Coat",
      description: "First major sewing project. She has a detachable yoke!!",
      technologies: ["Fashion Design", "Outerwear"],
      category: "Personal",
      mediaDir: "/project-images/trench-coat",
      mediaFiles: ["IMG_1943.JPG", "BBA8C825-2126-43A2-8012-9D7856268CE5.mp4", "E975379D-0475-44FC-9D45-0F999E0C02AF.JPG"]
    },
    {
      id: 10,
      name: "Sketchbook",
      description: "Collection of fashion sketches and design concepts. So far it's just pretty girlies.",
      technologies: ["Sketching", "Illustration"],
      category: "Personal",
      mediaDir: "/project-images/sketchbook",
      mediaFiles: ["girl.jpg"]
    }
  ];

  // Function to get file extension
  const getFileExtension = (filename) => {
    return filename.split('.').pop().toLowerCase();
  };

  // Function to check if file is an image
  const isImage = (filename) => {
    const ext = getFileExtension(filename);
    return ext === 'jpg' || ext === 'jpeg' || ext === 'png';
  };

  // Function to check if file is a video
  const isVideo = (filename) => {
    return getFileExtension(filename).toLowerCase() === 'mp4';
  };

  // Function to get video MIME type
  const getVideoMimeType = () => {
    return 'video/mp4';
  };

  // Function to render media item
  const MediaItem = ({ file, project }) => {
    if (isVideo(file)) {
      return (
        <div className="media-container">
          <video 
            className="project-media video"
            muted
            loop
            autoPlay
            playsInline
            controls={false}
          >
            <source src={`${project.mediaDir}/${file}`} type={getVideoMimeType()} />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    } else if (isImage(file)) {
      return (
        <div className="media-container">
          <img 
            className="project-media image"
            src={`${project.mediaDir}/${file}`}
            alt={`${project.name} media`}
            loading="lazy"
          />
        </div>
      );
    }
    return null;
  };

  const ProjectCard = ({ project }) => {
    const [mediaFiles, setMediaFiles] = useState([]);

    useEffect(() => {
      if (project.mediaDir && project.mediaFiles) {
        // Filter out any files that don't exist
        const validFiles = [];
        project.mediaFiles.forEach(file => {
          if (isImage(file)) {
            console.log(`thisis an image${project.mediaDir}/${file}`);
            
            const img = new Image();
            img.src = `${project.mediaDir}/${file}`;
            img.onload = () => {
              if (!validFiles.includes(file)) {  // Prevent duplicates
                validFiles.push(file);
                setMediaFiles([...validFiles]);
              }
            };
          } else if (isVideo(file)) {
            fetch(`${project.mediaDir}/${file}`)
              .then(response => {
                if (response.ok && !validFiles.includes(file)) {  // Prevent duplicates
                  validFiles.push(file);
                  setMediaFiles([...validFiles]);
                }
              })
              .catch(() => {});
          }
        });
      }
    }, [project.mediaDir, project.mediaFiles]);

    return (
      <div 
        className="project-card" 
        onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
        style={{ cursor: project.githubUrl ? 'pointer' : 'default' }}
      >
        <div className="project-header">
          <h3 className="project-title">{project.name}</h3>
        </div>
        {mediaFiles.length > 0 && (
          <div className={`project-media-grid ${mediaFiles.length === 1 ? 'single-image' : ''}`}>
            {mediaFiles.map((file, index) => (
              <MediaItem key={index} file={file} project={project} />
            ))}
          </div>
        )}
        <div className="project-description">
          <p>{project.description}</p>
          <div className="project-tech">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="projects-container">
      <h2>Computer Science Projects</h2>
      <div className="projects-grid">
        {csProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <h2>Personal Projects</h2>
      <div className="projects-grid">
        {personalProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;