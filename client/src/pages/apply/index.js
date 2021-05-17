import './index.css';
import applyImg from '../../imgs/skrittatheart1.png';

function apply() {
  return (
    <section className="apply">
      <div className="apply-intro">
        <h1 className="trail-line-double">Apply</h1>
        <p>
          So you want to apply? Not so fast! There are a few things you will need to learn and agree with before doing so!
          There arent many rules, the main goal is to have fun together as a guild.
          However, general etiquette, decency and maturity is expected. Some things we're strict about are;
        </p>

        <p>
          Racial, religious,sexual and/or any other type of discrimination will not be tolerated, even as jokes.
          Same goes for homophobia and transphobia. Don't engage in religious/political or sexual discussions.
          There is enough of that IRL. Don't be an ass.
        </p>
      </div>

      <div className="rules-div">
        <h3 className="trail-line ">What do we expect from members?</h3>
        <div className="info-blocks rules-before-apply">
          <div className="rules-left">
            <ul>
              <li className="other-games">
                <span className="other-games-span"> Maturity and friendliness:</span>
                We're here to enjoy the game and there is no doubt there will be silly moments.
                What matters is you preserve a mature and friendly attitude. Keep an open mind,
                follow the general etiquette and there shall be no drama!
              </li>

              <li className="other-games">
                <span className="other-games-span">Decent amount of communication:</span>
                We expect you to engage with the guild chat, in-game and/or on here.
                Say a simple hi/bye, feel free to ask/answer questions and just chat with us. No one will bite!
              </li>
            </ul>
          </div>

          <ul>
            <li className="other-games">
              <span className="other-games-span">Consistent activity and participation:</span>
              To not end up running a graveyard, we cleanup inactive members periodically.
              We also don't do lots of events every day and expect you to join them all but when we do organize things,
              we'd like to see you there!
            </li>

            <li className="other-games">
              <span className="other-games-span">Fair amount of representation: </span>
              There are no percentages to meet with representation, we just want you to be fair.
              If this guild provides you good time, give something back with a simple click.
            </li>
          </ul>
        </div>

        <p className="important">It is really important that you can satisfy
          <span className="important-span"> at least 2 of those expectations, while maturity and friendliness is a must!</span>
        </p>
      </div>

      <div className="info-blocks info-blocks__apply">
        <img className="info-img" alt="apply" src={applyImg}></img>
        <div className="apply-form">
          <h3 className="trail-line">Sounds good?</h3>
          <form action="/action_page.php">
            <ul>
              <li>
                <input type="checkbox"></input>
                <label htmlFor="" className="checkbox-label">I understand and accept the rules.</label>
              </li>

              <li>
                <input type="checkbox"></input>
                <label htmlFor="" className="checkbox-label">I play on European servers.</label>
              </li>

              <li>
                <input type="checkbox"></input>
                <label htmlFor="" className="checkbox-label">I will join and use discord.</label>
              </li>

              <li>
                <input type="checkbox"></input>
                <label htmlFor="" className="checkbox-label">I understand I will be kicked if I'm offline for over 3 months without a notice.</label>
              </li>

              <li>
                <label htmlFor="fname" className="label-input">Your ingame name:</label>
                <input type="text" id="accname" name="accname" className="accname" placeholder="Notaskritt.1234"></input>
              </li>

              <li>
                <label htmlFor="userMessage" className="label-input">Why would you like to join/ tell us about yourself below:</label>
                <textarea htmlFor="userMessage" id="userMessage" name="userMessage" className="usermessage" ></textarea>
              </li>
            </ul>

            <div className="apply-div">
              <a href="/" className="apply-btn">Apply Now</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default apply;
