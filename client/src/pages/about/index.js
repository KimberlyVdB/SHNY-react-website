import { useState, useEffect } from 'react';
import './index.css';

function Info() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function getActivities() {
      const data = await fetch('https://shny.mbacalan.tk/api/guild-activities/');
      setActivities([...await data.json()]);
    }

    getActivities()
  }, [])

  return (
    <section className="info">
      <div className="info-intro">
        <h1 className="trail-line-double">
          About A Skritt At Heart
        </h1>
        <p className="intro">
          We are a casual PvE guild with a focus on fashion wars and community.
          A small, friendly and social bunch of skritt.
        </p>
      </div>

      {activities.map(activity =>
        <div className="info-blocks" key={activity.id}>
          <img
            className="info-img"
            alt={activity.image.name}
            src={"https://shny.mbacalan.tk/api" + activity.image.formats.medium.url}
          />

          <div className="info-block-intro">
            <h3 className="trail-line">
              {activity.title}
            </h3>

            <p>
              {activity.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Info;
