import { Link } from 'react-router-dom';
import archer    from '../assets/classes/archer.webp';
import barbarian from '../assets/classes/barbarian.webp';
import wizard    from '../assets/classes/wizard.webp';
import giant     from '../assets/classes/giant.png';
import skeleton  from '../assets/classes/skeleton.png';

const IMAGES = { archer, barbarian, wizard, giant, skeleton };

export default function CharacterCard({ character }) {
  return (
    <Link to={`/character/${character.id}`} className="card" style={{textDecoration: 'none'}}>
      <img src={IMAGES[character.class]} alt={character.class} />
      <div>
        <p style={{
          fontWeight: 700,
          color: '#ffd700',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          fontSize: '1.1rem',
          margin: 0,
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>{character.name}</p>
        <p style={{
          fontSize: '0.875rem', 
          color: '#d4af37',
          textTransform: 'capitalize',
          margin: '0.25rem 0 0 0',
          fontStyle: 'italic',
          textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)'
        }}>{character.class}</p>
      </div>
    </Link>
  );
}