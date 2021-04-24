import './index.css';
import youtube from '../../icons/youtube.svg';
import instagram from '../../icons/instagram.svg';

function Home() {
  return (
    <section className="">
      <div className="homepage">
        <h1 className="uppercase homepage-title trail-line-double">A Skritt At Heart </h1>
        <h3>We want you in the Skritt army today! </h3>
        <div class="cta-div">
        <a href="/" className="cta-btn">Enlist Today </a>
        </div>
        <div class="social-media">
        <a href="https://www.instagram.com/a_skritt_at_heart/"><img alt="instagram" class="social-ig" src={instagram}></img></a>
        <a href="/"><img alt="youtube" class="social-yt"  src={youtube}></img></a>

        </div>
      </div>
    </section>
  );
}

export default Home;
