import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import LoadingSpinner from '../components/LoadingSpinner';
import CharacterCard from '../components/CharacterCard';

// Predefined descriptions for each character class
const CLASS_DESCRIPTIONS = {
  barbarian: "Basically a shirtless gym bro who skipped leg day but never misses arm day. Runs into battle screaming like he just found out protein powder is on sale. Axe first, questions never.",
  archer: "Identical twin sisters who are deadlier than your ex’s passive-aggressive texts. Pink hair, sharp aim, and absolutely zero patience for your nonsense. They'll take you out before you even finish saying “ouch.”",
  wizard: "Looks like he moonlights as a Vegas magician but can actually incinerate your whole squad with one fireball. Constantly muttering “fireball” under his breath like it’s a spell and a cocktail order.",
  giant: "This dude is all brawn, no brain. He’s like a big golden retriever who only cares about punching buildings. Friendly smile, but if you're a tower, it's already too late.",
  skeleton: "One bone short of a full plan. They pop out of nowhere, cause chaos, then vanish faster than your paycheck. Travel in packs and have the structural integrity of a breadstick."
};

export default function CharacterDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('team')
        .select('*')
        .eq('id', id)
        .single();
      if (error) {
        alert(error.message);
        navigate('/summary');
      } else {
        setChar(data);
      }
      setLoading(false);
    })();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!char) return null;

  // Get the predefined description for this character's class
  const characterDescription = CLASS_DESCRIPTIONS[char.class] || 
    `The ${char.class} is a formidable ${char.class === 'wizard' ? 'spellcaster' : 'warrior'}…`;

  return (
    <div className="space-y-4">
      <CharacterCard character={char} />

      <div className="card" style={{
        flexDirection: 'column',
        background: 'linear-gradient(to bottom, #5d4037, #3e2723)',
        border: '2px solid #8d6e63',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'
      }}>
        <p style={{color: '#ffd700', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)'}}>
          <strong style={{color: '#ffab00'}}>Health:</strong> {char.health}
        </p>
        <p style={{color: '#ffd700', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)'}}>
          <strong style={{color: '#ffab00'}}>Damage:</strong> {char.damage}
        </p>
        <p style={{
          fontStyle: 'italic', 
          fontSize: '0.875rem', 
          color: '#d4af37', 
          marginTop: '.5rem',
          textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)'
        }}>
          {characterDescription}
        </p>
      </div>

      <div style={{display:'flex', gap:'1rem'}}>
        <Link to={`/edit/${char.id}`} className="button button-primary">Edit</Link>
        <Link 
          to="/summary" 
          className="button button-secondary"
          style={{
            background: 'linear-gradient(to bottom, #8d6e63, #5d4037)',
            color: '#ffd700',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            border: '2px solid #8d6e63',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
          }}
        >
          Back
        </Link>
      </div>
    </div>
  );
}