import './index.css';
import wintersday from '../../imgs/winter-contest.png';
import halloween from '../../imgs/halloween-contest.png';
import sab from '../../imgs/SAB-contest.png';
import { Link } from "@reach/router"

function competition() {
  return (
    <section className="contest-winners bottom_space">
      <div className="info-intro">
        <h1 className="trail-line-double">Contest Winners</h1>
        <p className="intro-winners">
          We hold screenshot contests on our discord server,
          they are always around a theme, sometimes its about the outfit
          and sometimes about the scene. Below you can find some of our winning skritt! Feast your eyes!
        </p>
      </div>

      <div className="info-blocks ">
        <img className="info-img " alt="winter-wonderland" src={sab}></img>

        <div className="info-block-intro ">
          <h3 className="trail-line ">Super Adventure Box</h3>
          <ul className="winners-ul">
            <li ><span className="winners-span">Winner:  </span> Luna</li>
            <li ><span className="winners-span">Won:</span> A blacklion skin weapon of choice worth 1 ticket</li>
          </ul>
        </div>
      </div>

      <div className="info-blocks">
        <div className="info-block-intro">
          <h3 className="trail-line">Winter Wonderland</h3>
          <ul className="winners-ul">
            <li ><span className="winners-span">Winner:  </span> Rito</li>
            <li ><span className="winners-span">Won:</span> A blacklion skin weapon of choice worth 1 ticket</li>
          </ul>

          <div className="read-more">
            <Link to="/winter" className="read-btn"> Read Story</Link>
          </div>
        </div>

        <img className="info-img " alt="winter-wonderland" src={wintersday}></img>
      </div>

      <div className="info-blocks ">
        <img className="info-img " alt="halloween" src={halloween}></img>

        <div className="info-block-intro ">
          <h3 className="trail-line ">Spooky Season</h3>
          <ul className="winners-ul">
            <li ><span className="winners-span">Winner: </span> Rito</li>
            <li ><span className="winners-span">Won:</span> A blacklion skin weapon of choice worth 1 ticket</li>
          </ul>

          <div className="read-more">
            <Link to="/halloween" className="read-btn"> Read Story</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default competition;
