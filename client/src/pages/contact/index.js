import './index.css';
import contactImg from '../../imgs/contact.png';

function contact() {
  return (
    <section className="contact">
<div class="info-intro">
        <h1 class="trail-line-double">Contact</h1>
      </div>

<div class="info-blocks ">
        <img class="info-img " alt="adventure-tuesday" src={contactImg}></img>
        <div class="info-block-intro ">
          <h3 class="trail-line ">Contact?</h3>
          <p class="">Do you have any quetions, or want to get in contact for some reason? You can!</p>
          <ul>
            <li><span class="other-games-span">Ingame:</span> Sugarcube.9867</li>
            <li><span class="other-games-span">Discord:</span> Sugarcube#5024</li>
          </ul>

          <h3 class="trail-line feedback">Feedback</h3>
        <p>Want to give us your feedback? Use the text area below and reach us <span class="other-games-span">anonymously!</span>
   All feedback is welcome as long as its constructive.</p>

        <form>

        </form>

        </div>


      </div>

    </section>
  );
}

export default contact;
