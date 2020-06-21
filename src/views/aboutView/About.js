import React from 'react';
import styles from './About.module.scss';


const About = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.header}>National Aeronautics and Space Administration</h1>
                <div className={styles.logo}> </div>
                <p>
                    NASA is the United States Government agency responsible for the National Space Flight Program, established July 29, 1958 under the National Aeronautics and Space Act.

                    NASA is not part of the structure of any ministry (department). Has the status of an independent agency reporting directly to the President of the United States. </p>

                <p>
                    In addition to the space flight program, the agency is also responsible for the long-term (both civil and military) <strong>space exploration program.</strong>  In February 2006, NASA set its own goals, recognizing that its mission was to "pave the way for future space exploration, scientific discoveries, and aeronautics research." </p>

                <p>  NASA is currently conducting missions related to the study of the Moon, Mercury, Mars and Saturn, as well as observing the Sun. The agency's sphere of interest is also exploration of further areas of the Universe, as well as Earth research.
                    NASA has carried out many unmanned missions whose task was to study the planets of the Solar System or outer space (Pioneer 10, Pioneer 11, Voyager 1 and Voyager 2). For now, NASA remains the only agency that has sent missions beyond the borders of our planetary system.</p>

                <p><strong><i>What's Next For NASA?</i></strong></p>

                <p>In 2020, NASA will be taking long strides toward returning astronauts to the Moon, continuing the exploration of Mars and developing new technology to make supersonic aircraft fly more quietly.</p>

                <p> <strong>Artemis - Returning astronauts to the Moon</strong>:

                under Artemis, NASA will send new science instruments and technology demonstrations to study the Moon, accelerate plans to send astronauts to the Moon by 2024, and establish sustainable lunar exploration by 2028. One of Artemis's major milestones in 2020 will be the Green Run test of all four engines of the Space Launch System's core stage. NASA will also continue to work with commercial partners to send landers to the Moon, where they will help prepare the way for astronaut landings, including a rover that will map water ice on the Moon.</p>

                <p> <strong>NASA, Boeing and SpaceX Prepare to Launch Astronauts from American Soil</strong>:

                after uncrewed test flights in 2019, Boeing and SpaceX are getting ready to launch American astronauts from the United States for the first time since the space shuttle's last mission 2011.  Commercial spacecraft and rockets already are delivering cargo to the space station, with more supply flights this year, and crew vehicles are will undergo their final tests.</p>

                <p><strong>International Space Station</strong>:

                the space station -- in its 20th year of hosting astronauts in orbit -- is more than a destination for next-generation spacecraft. Astronauts use the space station for exploration technology, advanced life support systems and human and robotic interfaces. It’s a unique microgravity test bed and national laboratory where humans work to benefit life on Earth and prepare for destinations farther into our solar system.</p>

                <p>
                    <strong>Mars and beyond</strong>: NASA's latest mission to Mars -- a mission that will receive a new name before launch -- will be the latest rover to head to the Red Planet, but it's not going alone. To aid it in its exploration, it's carrying the first helicopter that will fly on another planet.

                    Further out in the Solar System, OSIRIS-REx will snuggle up to the asteroid Bennu to grab a sample from its surface. OSIRIS-REx will return the sample to Earth in 2023.
                </p>

                <p><strong>Quiet supersonic technology</strong>:

                NASA is continuing its research to make supersonic aircraft -- which generate loud booms as they go slow down below the speed of sound -- quieter and more amenable to flying in populated areas. The X-59, or QUESST, aircraft passed a major review milestone in 2019, progressing toward more inflight tests.

                2020 promises developments on many fronts as we continue to lead the world in exploration and inspire the next generation.</p>

            </div>
        </>
    );
}

export default About;