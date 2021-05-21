import './index.css';
import contactImg from '../../imgs/contact.png';

function contact() {
  return (
    <section className="contact">
      <div className="info-intro">
        <h1 className="trail-line-double">Contact</h1>
        <p className="contact">Do you have any quetions, or want to get in contact for some reason? You can!</p>
        <ul className="contact-me">
          <li>
            <span className="other-games-span">Ingame:</span>
            Sugarcube.9867
          </li>

          <li>
            <span className="other-games-span">Discord:</span>
            Sugarcube#5024
          </li>
        </ul>

        <ul className="contact-me">
          <li>
            <span className="other-games-span">Instagram:</span>
            <a href="https://www.instagram.com/sugarcube.gw2/">Sugarcube.gw2</a>
          </li>

          <li>
            <span className="other-games-span">Instagram:</span>
            <a href="https://www.instagram.com/a_skritt_at_heart/">a_skritt_at_heart</a>
          </li>
        </ul>
      </div>

      <div className="info-blocks">
        <img className="info-img" alt="adventure-tuesday" src={contactImg}></img>
        <div className="info-block-intro">
          <h3 className="trail-line feedback">Feedback</h3>
          <p>
            Want to give us your feedback? Use the text area below and reach us
            <span className="anon-span">anonymously!</span>
            All feedback is welcome as long as its constructive.
          </p>

          <form>
            <ul>
              <li>
                <input type="checkbox"></input>
                <label htmlFor="" className="checkbox-label">I am a guild member.</label>
              </li>

              <li>
                <label htmlFor="userMessage" className="label-input">You can leave your feedback for us below:</label>
                <textarea htmlFor="userMessage" id="userMessage" name="userMessage" className="usermessage" ></textarea>
              </li>
            </ul>

            <div className="apply-div">
              <a href="/" className="apply-btn">Let us know!</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default contact;
