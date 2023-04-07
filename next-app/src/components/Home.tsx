import React from 'react'
import styles from '@/styles/Home.module.scss'


const Home = () => {
  return (
    <main className={styles.main__container}>
      <section className={styles.about}>
        <div className={styles.about__container}>
          <div className={styles.about__text}>
            <h1 className={styles.about__title}>Hola soy douglas Fullstack developer</h1>
            <p className={styles.about__p}> ¿Estás buscando un FullStack Developer excepcional que supere tus expectativas? ¡Aquí estoy!
              Como Freelance, puedo ofrecerte habilidades y experiencia en desarrollo web de alta calidad. Puedes estar seguro de que mi trabajo no solo cumplirá, sino que superará tus necesidades y objetivos.

              Mi pasión por la tecnología me ha llevado a convertirme en un experto en el desarrollo de aplicaciones web. Mi portafolio, disponible en https://dusandev.netlify.app/, demuestra mi capacidad para crear soluciones únicas y efectivas que impulsan el éxito empresarial.</p>
          </div>

          <div className={styles.about__video_container}>
            <div className={styles.about__video}>
              <video autoPlay muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.skills}>
        <div className={styles.skills__container}>
          <div className={styles.skills__text}>
            <h1 className={styles.skills__title}>Hola soy douglas Fullstack developer</h1>
            <p className={styles.skills__p}> ¿Estás buscando un FullStack Developer excepcional que supere tus expectativas? ¡Aquí estoy!
              Como Freelance, puedo ofrecerte habilidades y experiencia en desarrollo web de alta calidad. Puedes estar seguro de que mi trabajo no solo cumplirá, sino que superará tus necesidades y objetivos.

              Mi pasión por la tecnología me ha llevado a convertirme en un experto en el desarrollo de aplicaciones web. Mi portafolio, disponible en https://dusandev.netlify.app/, demuestra mi capacidad para crear soluciones únicas y efectivas que impulsan el éxito empresarial.</p>
          </div>

          <div className={styles.skills__video_container}>
            <div className={styles.skills__video}>
              <video autoPlay muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.work}>
        <div className={styles.work__container}>
          <div className={styles.work__text}>
            <h1 className={styles.work__title}>Hola soy douglas Fullstack developer</h1>
            <p className={styles.work__p}> ¿Estás buscando un FullStack Developer excepcional que supere tus expectativas? ¡Aquí estoy!
              Como Freelance, puedo ofrecerte habilidades y experiencia en desarrollo web de alta calidad. Puedes estar seguro de que mi trabajo no solo cumplirá, sino que superará tus necesidades y objetivos.

              Mi pasión por la tecnología me ha llevado a convertirme en un experto en el desarrollo de aplicaciones web. Mi portafolio, disponible en https://dusandev.netlify.app/, demuestra mi capacidad para crear soluciones únicas y efectivas que impulsan el éxito empresarial.</p>
          </div>

          <div className={styles.work__video_container}>
            <div className={styles.work__video}>
              <video autoPlay muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home