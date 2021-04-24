import './index.css';
import adventure from '../../imgs/guildinfo-adventuretime.png';
import fashionwars from '../../imgs/guildinfo-fashionwars.png';
import guildmissons from '../../imgs/guildinfo-guildmissions.png';
import nongw2games from '../../imgs/guildinfo-nongw2games.png';
import raid from '../../imgs/guildinfo-raid.png';
import seasonal from '../../imgs/guildinfo-seasonalparty.jpg';
import skrittcon from '../../imgs/guildinfo-skrittcon.png';
import skrittinvasion from '../../imgs/guildinfo-skrittinvasion.png';
import skrittstagram from '../../imgs/guildinfo-skrittstagram.png';
import nonegw2night from '../../imgs/guildinfo-nongw2night.png';
import contests from '../../imgs/guildinfo-contests.png';
import friends from '../../imgs/guildinfo-friendship.png';

function Info() {
  return (
    <section className="info">
      <div class="info-intro">
        <h1 class="trail-line-double">About A Skritt At Heart </h1>
        <p class="intro">We are a casual PvE guild with a focus on fashion wars and community. A small, friendly and social bunch of skritt.</p>
      </div>

      <div class="info-blocks ">
        <img class="info-img " alt="adventure-tuesday" src={adventure}></img>
        <div class="info-block-intro ">
          <h3 class="trail-line ">Adventure Tuesday?</h3>
          <p class="">Event night? Event night! Event night? Event night! Yes, on fridays we do various things, those can be dungeons, bounties, meta events, world boss runs, strike missions and so on. You get the point, we decide on something and do it. It’s that simple and fun!</p>
        </div>
      </div>

      <div class="info-blocks">
      <div class="info-block-intro">
        <h3 class="trail-line">Guild Missions?</h3>
        <p>I’m sure you know what that is, it’s guild missions!</p>

        </div>
          <img class="info-img " alt="guild-missions" src={guildmissons}></img>
      </div>

      <div class="info-blocks">
        <img class="info-img" alt="Seasonal-Parties" src={seasonal}></img>
        <div class="info-block-intro">
          <h3 class="trail-line">Seasonal Parties?</h3>
          <p>Halloween? Christmas? Easter? Any other excuse to throw a party? We'll take it! So, a couple of times a year, we hold events in the guild hall or somewhere else. What do we do? Lots of different things, ingame and on Discord. Quizzes, Pictionary, custom JPs related to the event? Why not! What we, as a guild, will do exactly, is going to vary.</p>
        </div>
      </div>

      <div class="info-blocks">
      <div class="info-block-intro">
        <h3 class="trail-line">Skritt Invasion?</h3>
        <p>Get your skritt tonic ready, because it's time for an invasion, and not a single shiny person will be safe from the hoard of skritt. It’s time for us to hang out in Discord and chase people around, while also spending a fun evening together.</p>
        </div>
          <img class="info-img" alt="Skritt-Invasion" src={skrittinvasion}></img>
      </div>

      <div class="info-blocks">
        <img class="info-img" alt="Skrittstagram" src={skrittstagram}></img>
        <div class="info-block-intro">
          <h3 class="trail-line">#Skrittstagram?</h3>
          <p>An evening revolving around taking screenshots together as a guild, but also in smaller groups. You'll be divided at random with a theme as a common goal. Coordinate as a team and achieve victory, shinies and new friends!</p>
        </div>
      </div>

      <div class="info-blocks">
      <div class="info-block-intro">
        <h3 class="trail-line">Skritt Con?</h3>
        <p>Well with every other con canceled (thanks corona) Why not geek out together around a specific fandom? Dress up in your best cosplay, test your knowledge and take home shinies. And of course some themed screenshots.</p>
        </div>
          <img class="info-img" alt="Skritt-Con" src={skrittcon}></img>
      </div>

      <div class="info-blocks">
        <img class="info-img" alt="Raiding" src={raid}></img>
        <div class="info-block-intro">
          <h3 class="trail-line">Raiding?</h3>
          <p>It’s starting back up and will be casual as well as beginner friendly. Don’t expect full clears, it is meant to be fun for us as a guild. If we get enough experienced and willing player we can concider a raid static.</p>
        </div>
      </div>

      <div class="info-blocks">
      <div class="info-block-intro">
        <h3 class="trail-line">Fashion wars?</h3>
        <p>Yes, we are a PvE guild, but we also have a love for fashion wars. This means we have channels on our Discord dedicated to our fashion/screenshot game. People that are not really into fashion are, of course, also welcome to join. Besides just sharing our screenshots we also hold fashion wars contests with a different theme every single time. During seasonal guild events you can also expect a run on the catwalk! During seasonal guild events you can expect a run on the catwalk!</p>
        </div>
          <img class="info-img" alt="fashion-wars" src={fashionwars}></img>
      </div>

      <div class="info-blocks">
        <img class="info-img" alt="Non-GW2-Game-Night" src={nonegw2night}></img>
        <div class="info-block-intro">
          <h3 class="trail-line">Non-GW2 Game Night?</h3>
          <p>Twice a month, we organize a game night. Completely unrelated to guild Wars 2, we hang out in Discord and play something, that can be Cards Against Humanity, Pictionary,jackbox games, drawfullor anything similar. You name it, we could play it!</p>
        </div>
      </div>

      <div class="info-blocks">
      <div class="info-block-intro">
        <h3 class="trail-line">Contests?</h3>
        <p>Yes, we are a PvE guild, but we also have a love for fashion wars. This means we have channels on our Discord dedicated to our fashion/screenshot game. People that are not really into fashion are, of course, also welcome to join. Besides just sharing our screenshots we also hold fashion wars contests with a different theme every single time. During seasonal guild events you can also expect a run on the catwalk! During seasonal guild events you can expect a run on the catwalk!</p>
        </div>
          <img class="info-img" alt="contests" src={contests}></img>
      </div>


      <div class="info-blocks">
        <img class="info-img" alt="Other-Games" src={nongw2games}></img>
        <div class="info-block-intro">
          <h3 class="trail-line">Other Games?</h3>
          <p class="other-games"><span class="other-games-span">Minecraft:</span> SHNY has a Minecraft survival server for its guild members to play on whenever they want! Will you be our neighbour in our Minecraft town, or do you prefer exploring?</p>
          <p class="other-games"><span class="other-games-span">Apex legends:</span> We have our own little club [CUTE] inside the game, you can join us to die together or claim victory!</p>
        </div>
      </div>

      <div class="info-blocks">
      <div class="info-block-intro">
        <h3 class="trail-line">Friendship? Friendship!</h3>
        <p>If you are looking for a bunch of friendly and accepting Skritt, you have found it!
What started as a Guild Wars 2 guild has grown into much more, <br></br> a community.
Its bigger then just one game, how cheesy it may sound its an online family of filthy causals.
</p>
        </div>
          <img class="info-img" alt="friendship" src={friends}></img>
      </div>

    </section>
  );
}

export default Info;
