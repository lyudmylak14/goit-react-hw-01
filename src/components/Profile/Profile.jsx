import clsx from 'clsx';
import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.userCard}>
      <div className={css.userUpInfo}>
        <img className={css.userImg} src={image} alt="User avatar" />
        <p className={clsx(css.black, css.upInfoText)}>{name}</p>
        <p className={clsx(css.gray, css.upInfoText)}>@{tag}</p>
        <p className={clsx(css.gray, css.upInfoText)}>{location}</p>
      </div>

      <ul className={css.userDownInfo}>
        <li className={css.downInfoItem}>
          <span className={css.title}>Followers</span>
          <span className={css.black}>{followers}</span>
        </li>
        <li className={css.downInfoItem}>
          <span className={css.title}>Views</span>
          <span className={css.black}>{views}</span>
        </li>
        <li className={css.downInfoItem}>
          <span className={css.title}>Likes</span>
          <span className={css.black}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
