
import './App.css'

function App() {

  return (
    <>
      <header>
        <div className='logo'><img src="/logo.png" alt="" /></div>
        <nav>
          <p>Portfolio</p>
          <p>Team</p>
          <p>Contacts</p>
          <p className='contact-button'>Contact Us</p>

        </nav>
        <div className='burguer'><img src="menu.png" alt="" /></div>
      </header>
      <section className='home'>
        <p className='home-txt'>
          Perfect design solutions for ambitious leaders and startups
        </p>
      </section>
      <section className='projects'>

        <h1 className='projects-title'>Projects</h1>

        <div className='projects-container'>

          <div className='img-container one'>
            <div className='txt-container'>
              <p className='gray-txt'>WEBSITE</p>
              <p className='white-txt'>Golden Apple</p>
            </div>
          </div>
          <div className='img-container two'>
            <div className='txt-container'>
              <p className='gray-txt'>BRANDING</p>
              <p className='white-txt'>Rostov National Museum</p>
            </div>
          </div>
          <div className='img-container three'>
            <div className='txt-container'>
              <p className='gray-txt'>BRANDING</p>
              <p className='white-txt'>Maliy Journal</p>
            </div>
          </div>
          <div className='img-container four'>
            <div className='txt-container'>
              <p className='gray-txt'>WEBSITE</p>
              <p className='white-txt'>Andy's Bookstore</p>
            </div>

          </div>
        </div>
      </section>
      <section className='team'>
        <div className='person-container five'>
          <div className='txt-container'>
            <p className='white-txt'>Meghan Holmes</p>
            <p className='gray-txt'>CEO</p>
          </div>
        </div>
        <div className='person-container six'>
          <div className='txt-container'>
            <p className='white-txt'>Louise Baker</p>
            <p className='gray-txt'>ART DIRECTOR</p>
          </div>
        </div>
        <div className='person-container seven'>
          <div className='txt-container'>
            <p className='white-txt'>Matthew Cox</p>
            <p className='gray-txt'>LEAD DESIGNER</p>
          </div>
        </div>
        <div className='person-container eight'>
          <div className='txt-container'>
            <p className='white-txt'>Alice Benson</p>
            <p className='gray-txt'>LEAD DESIGNER</p>
          </div>
        </div>
        <div className='person-container nine'>
          <div className='txt-container'>
            <p className='white-txt'>Jackie Shore</p>
            <p className='gray-txt'>LEAD WEB DEVELOPER</p>
          </div>
        </div>
      </section>
      <section className='contacts'>
        <div className='contact-data'>
          <h1 className='contact-title'>Contacts</h1>
          <p>3078 Boundary Street, Jacksonville, Florida</p>
          <p>904-594-6732</p>
          <p>contact@allystudio.com</p>
        </div>
        <div className='map-container'></div>
      </section>
      <footer>
        <p><i class="fas fa-copyright"></i>ALLY studio 2020 | Photos from unsplash.com</p>
      </footer>

    </>
  )
}

export default App
