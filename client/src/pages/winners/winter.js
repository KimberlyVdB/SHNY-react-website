import './index.css';
import wintersday from '../../imgs/winter-contest.png';

function Winter() {
  return (
    <section className="">
      <div className="contain-div">
        <div className="info-intro">
          <h1 className="trail-line-double">Winter Wonderland</h1>
          <p className="text-white">author: Rito</p>
      </div>
        <div className="story-div">
          <p className="story-para">
      Tired she was so tired. Only wanted to sleep and forget everything which had happened. Her parents death, her uncle’s death and.. her sisters...
      </p>
          <p className="story-para">
      Ljot begun dreaming. She was back, back at their homestead, where they had lived many years ago. Her parents had not yet died, and she was still only a child.
      </p>
          <p className="story-para">
      It was that the perfect weather for a snowball fight. All the children wanted to play but Kára wasn’t allowed as she was only four years old. Therefore she stood at the side, crying, while her older sisters threw snowballs at each other.
      </p>
          <p className="story-para">
      Ljot smiled slightly in her sleep while remembering. The snowball fight ended very abruptly as Eyia accidentally hit a son of Svanir. Who chased them around. The four Struludóttirs ran away together and hid behind the homestead, trying to keep themselves from bursting out in laughter as the Svanir looked everywhere for them.
      </p>
          <p className="story-para">
      She truly loved her sisters, she couldn’t give up now, not when she had already came this far. Ljot had to protect them, and their smiling faces, trying not to laugh. Maybe they could all have a snowball fight again when this is all over, maybe...
      </p>
      </div>
        <img className=" " alt="winter-wonderland" src={wintersday}></img>
      </div>
    </section>
  );
}

export default Winter;
