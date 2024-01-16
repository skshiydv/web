import React from 'react';
import styles from '../Components/Style.module.css';
import projectImage1 from '../Components/elements/bruno-van-der-kraan-vII8yFT6d9A-unsplash.jpg';
// import projectImage2 from '../Components/elements/smth.jpg';
// import projectImage3 from '../Components/elements/moon.jpg';
// import projectImage4 from '../Components/elements/smth2.jpg';
// import projectImage5 from '../Components/elements/image1.jpg';

const projectImages = [projectImage1];


const projectDescriptions = [
  {
    title: 'MAARG',
    description: 'Maarg is not just a solution; it is a movement. We believe in making public transport a source of pride for Bharat. It is time to bid farewell to the complexities of commuting and embrace a future where your journey is as delightful as your destination.',
    link:'https://onboard.mymaarg.in/',
  },
  // {
  //   title: '2',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  // },
  // {
  //   title: '3',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  // },
  // {
  //   title: '4',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  // },
  // {
  //   title: '5',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  // },

];

export default function Projects() {
  return (
    <div className={styles.container2} id="projects">
      <h1>ONGOING PROJECTS</h1>
      <div className={styles.circle}>
      <div className={styles.innerbox}>
        {projectImages.map((image, index) => (
          <div key={index} className={styles.proj}>
            <div className={styles.wrap}>
              <a href={projectDescriptions[index].link}>
                <img loading="lazy" src={image} alt={`Project ${index + 1}`} />
              </a>
            </div>
            <div className={styles.aboutproj}>
             <a href={projectDescriptions[index].link}>
              <h1>{projectDescriptions[index].title} </h1></a>
              <p>{projectDescriptions[index].description}</p>
            </div>
          </div>
          
        ))}
        </div>
      </div>
    </div>
  );
}
