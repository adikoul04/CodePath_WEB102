import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CharacterForm from '../components/CharacterForm';
import { supabase } from '../supabaseClient';
import LoadingSpinner from '../components/LoadingSpinner';

export default function EditCharacter() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initial, setInitial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving]   = useState(false);

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
        setInitial(data);
      }
      setLoading(false);
    })();
  }, [id]);

  async function updateCharacter(form) {
    setSaving(true);
    const { error } = await supabase
      .from('team')
      .update({ ...form })
      .eq('id', id);
    setSaving(false);
    if (error) alert(error.message);
    else navigate('/summary');
  }

  async function deleteCharacter() {
    if (!confirm('Delete this character?')) return;
    const { error } = await supabase.from('team').delete().eq('id', id);
    if (error) alert(error.message);
    else navigate('/summary');
  }

  if (loading) return <LoadingSpinner />;
  if (!initial) return null;

  return (
    <>
      <h1 className="mb-4" style={{fontSize:'1.5rem', fontWeight:700}}>Edit Character</h1>
      <CharacterForm initialData={initial} onSubmit={updateCharacter} loading={saving} />

      <button onClick={deleteCharacter} className="button button-danger mt-4">Delete Character</button>
    </>
  );
}