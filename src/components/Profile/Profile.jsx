import PropTypes from "prop-types";
// import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
        <p>
          <b>{name}</b>
        </p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>
            <b>{followers}</b>
          </span>
        </li>
        <li>
          <span>Views</span>
          <span>
            <b>{views}</b>
          </span>
        </li>
        <li>
          <span>Likes</span>
          <span>
            <b>{likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
