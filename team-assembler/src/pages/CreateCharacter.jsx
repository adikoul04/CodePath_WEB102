import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CharacterForm from '../components/CharacterForm';
import { supabase } from '../supabaseClient';

export default function CreateCharacter() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function createCharacter(form) {
    setLoading(true);
    const { error } = await supabase.from('team').insert({ ...form });
    setLoading(false);
    if (error) alert(error.message);
    else navigate('/summary');
  }

  return (
    <>
      <h1 className="mb-4" style={{fontSize:'1.5rem', fontWeight:700}}>Create Character</h1>
      <CharacterForm onSubmit={createCharacter} loading={loading} />
    </>
  );
}