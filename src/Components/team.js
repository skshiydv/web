import styles from "../Components/Style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import mem1 from "../Components/elements/mem1.jpg"
import mem2 from "../Components/elements/mem2.jpg"
import mem3 from "../Components/elements/mem3.jpg"
import mem4 from "../Components/elements/mem4.jpg"
import mem5 from "../Components/elements/mem5.jpg"
import mem6 from "../Components/elements/smth.jpg"


export default function Team() {
    const teamimages=[mem1,mem2,mem3,mem4,mem5,mem6]
    const memName=[  {
        Name: 'DHEERAJ',
        description: 'FullStack Developer',
        git:'https://github.com/dheerajSgit',
        linkdin:'https://www.linkedin.com/in/dheeraj-kumar-6b5506203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',

      },
      {
        Name: 'ABHISHEK',
        description: 'UI/UX Expert',
        git:'https://github.com/SavageHell8008',
        linkdin:'https://www.linkedin.com/in/abhishek-soni-89b518250/',
      },
      {
        Name: 'ANUBHAV',
        description: 'AIML , Cloud ,IOT,Blockchain',
        git:'https://github.com/anu-sin-theta',
        linkdin:'https://www.linkedin.com/in/anubhav-singh-thedatum/',
      },
      {
        Name: 'ARYAN',
        description: 'Database Expert, IOT,AIML',
        git:'https://github.com/Rad-Monk',
        linkdin:'https://www.linkedin.com/in/aryan-sharma-ba23952a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        Name: 'PAWAN',
        description: 'Marketing expert',
        git:'',
        linkdin:'https://www.linkedin.com/in/pawan-beniwal-721403253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      }
     ,
      {
            Name: 'PRASHANT',
            description: 'Hardware expert',
            git:'https://github.com/12PrashantKumar',
            linkdin:'https://www.linkedin.com/in/prashant-kumar-4a1430253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          },
     
    
    ]
    return (
        <div className={styles.big1}>
            <div id="team" className={styles.heading}>
                <h1>OUR TEAM</h1>
            </div>
        <div  className={styles.row2}>
            <div className={styles.team}>
                <img src={require("../Components/elements/image1.jpg")} alt="Team"></img>
                <h1>Who are we</h1>
                <p>CSED-Research Wing is a research lab that is part of the Computer Science and Engineering Department at GLA University. Our team of researchers is comprised of faculty members, graduate students, and undergraduate students who are passionate about advancing the state-of-the-art in computer science and engineering.</p>
            </div>
        <div className={styles.box2}>
        {
            teamimages.map((image,index)=>(
                <div key={index} className={styles.block}>
                    <div className={styles.mem1}>
                        <img src={image} alt="member"></img>
                        <h1>{memName[index].Name}</h1>
                    </div>
                    <div className={styles.more}>
                        <p>{memName[index].description}</p>
                        <a  href={memName[index].git}>
                        <FontAwesomeIcon icon={faGithub} className={`${styles.fab} fa-github`} />
                        </a>
                        <a  href={memName[index].linkdin}>
                        <FontAwesomeIcon icon={faLinkedinIn} className={`${styles.fab} fa-linkedIN`} />
                        </a>

                    </div>
                </div>

            ))
        }
        </div>
        </div>
        </div>
      
        
         
       
    );
}
