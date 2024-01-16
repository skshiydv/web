import React from 'react';
import styles from '../Components/Style.module.css';
import teamImage6 from '../Components/elements/teampic1.jpg';
import teamImage1 from '../Components/elements/teampic2.jpg';
import teamImage2 from '../Components/elements/teampic3.jpg';
import teamImage3 from '../Components/elements/teampic4.jpg';
import teamImage4 from '../Components/elements/teampic5.jpg';
import teamImage5 from '../Components/elements/teampic6.jpg';


export default function Gallery() {
  const images = [teamImage6, teamImage1, teamImage2,teamImage3,teamImage4,teamImage5];

  return (
    <div className={styles.outerbox}>
      <p>CSED is committed to advancing research in the field of technology and its impact on society.
       Our research projects cover a wide range of topics, from artificial intelligence and machine learning to cybersecurity and data privacy. 
       Through our work, we aim to develop innovative solutions to some of the most pressing challenges facing the tech industry today. 
       Our team of experts is dedicated to staying at the forefront of technological advancements and using our knowledge to make a positive impact on the world.</p>

      <div className={styles.grid}>
        <div className={styles.images}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`image-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
