import { Link } from 'react-router-dom';

export function HomeBar() {
  return (
    <nav className="home-bar">
      <ul>
        <li><Link to="/privateRooms">プライベートルーム</Link></li>
        <li><Link to="/publicRooms">公開ルーム</Link></li>
        <li><Link to="/profile">プロフィール</Link></li>
      </ul>
    </nav>
  );
}