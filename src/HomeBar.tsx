import { Link } from 'react-router-dom';

export function HomeBar() {
  return (
    <nav className="home-bar">
      <ul>
        <li><Link to="/">ホーム</Link></li>
        <li><Link to="/rooms">ルーム</Link></li>
        <li><Link to="/profile">プロフィール</Link></li>
      </ul>
    </nav>
  );
}