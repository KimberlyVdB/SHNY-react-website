import './index.css';
// import youtube from '../../icons/youtube.svg';
// import instagram from '../../icons/instagram.svg';
import SkrittVector from '../../imgs/SkrittVectorcut.png';

function Home() {
  return (
    <section className="">
      <div className="homepage">
        <h1 className="uppercase homepage-title trail-line-double">A Skritt At Heart </h1>
        <h3>We want you in the Skritt army today! </h3>

        <div className="cta-div">
          <a href="/" className="cta-btn">Enlist Today </a>
        </div>

        <div className="social-media">
          <img className="skritt-vector" alt="skritt-vector" src={SkrittVector}></img>
        </div>
      </div>
    </section>
  );
}

export default Home;
