import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendListItem}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={clsx(css.nameText)}>{name}</p>
      <p className={clsx(css.text, `${isOnline && css.isOnline}`)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
