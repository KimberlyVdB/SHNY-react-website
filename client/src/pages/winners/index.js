import './index.css';
import winter from '../../imgs/winter-contest.png';
import halloween from '../../imgs/halloween-contest.png';
import sab from '../../imgs/SAB-contest.png';


function competition() {
  return (
    <section className="contest-winners">
    <div class="info-intro">
      <h1 class="trail-line-double">Contest Winners</h1>
      <p class="intro-winners">We hold screenshot contests on our discord server, they are always around a theme, sometimes its about the outfit and sometimes about the scene. Below you can find some of our winning skritt! Feast your eyes!

</p>
    </div>


    <div class="info-blocks ">
        <img class="info-img " alt="winter-wonderland" src={sab}></img>
        <div class="info-block-intro ">
          <h3 class="trail-line ">Super Adventure Box</h3>
          <ul class= "winners-ul">
            <li ><span class="winners-span">Winner:  </span> Luna</li>
            <li ><span class="winners-span">Won:</span> A blacklion skin weapon of choice worth 1 ticket</li>
          </ul>

        </div>
      </div>

      <div class="info-blocks">
      <div class="info-block-intro">
        <h3 class="trail-line">Winter Wonderland</h3>
        <ul class= "winners-ul">
            <li ><span class="winners-span">Winner:  </span> Rito</li>
            <li ><span class="winners-span">Won:</span> A blacklion skin weapon of choice worth 1 ticket</li>
          </ul>

          {/* <li className="header-m__menu-item">
                <Link to="/about">About</Link>
              </li> */}

          <div class="read-more">
                <Link to="/winter" class="read-btn"> Read Story</Link>
              </div>
        </div>
          <img class="info-img " alt="winter-wonderland" src={winter}></img>
      </div>



      <div class="info-blocks ">
        <img class="info-img " alt="halloween" src={halloween}></img>
        <div class="info-block-intro ">
          <h3 class="trail-line ">Spooky Season</h3>
          <ul class= "winners-ul">
            <li ><span class="winners-span">Winner:  </span> Rito</li>
            <li ><span class="winners-span">Won:</span> A blacklion skin weapon of choice worth 1 ticket</li>
          </ul>
          <div class="read-more">
                <a href="/" className="read-btn">Read Story</a>
              </div>
        </div>
      </div>

    </section>
  );
}

export default competition;
