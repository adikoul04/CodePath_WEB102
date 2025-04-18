import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import CharacterCard from '../components/CharacterCard';
import LoadingSpinner from '../components/LoadingSpinner';

export default function CharacterSummary() {
  const [chars, setChars] = useState([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase
      .from('team')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) alert(error.message);
    setChars(data ?? []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <h1 className="mb-4" style={{fontSize:'1.5rem', fontWeight:700}}>Your Characters</h1>
      <div className="space-y-3">
        {chars.map(c => <CharacterCard key={c.id} character={c} />)}
        {!chars.length && <p>No characters yet. Create one!</p>}
      </div>
    </>
  );
}