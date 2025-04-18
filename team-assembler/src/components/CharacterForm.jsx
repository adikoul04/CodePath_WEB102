import { useState } from 'react';

const CLASSES = ['barbarian','archer','wizard','giant','skeleton'];

export default function CharacterForm({ initialData = {}, onSubmit, loading }) {
  const [form, setForm] = useState({
    name:   initialData.name   ?? '',
    class:  initialData.class  ?? 'barbarian',
    health: initialData.health ?? 100,
    damage: initialData.damage ?? 10
  });

  const handle = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'health' || name === 'damage' ? Number(value) : value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={submit} className="space-y-4" style={{maxWidth:'420px'}}>
      <label className="form-label">Name
        <input
          name="name"
          required
          value={form.name}
          onChange={handle}
          className="form-control mt-1"
        />
      </label>

      <label className="form-label">Class
        <select
          name="class"
          value={form.class}
          onChange={handle}
          className="form-control mt-1"
        >
          {CLASSES.map(c => <option key={c}>{c}</option>)}
        </select>
      </label>

      <div className="grid-2">
        <label className="form-label">Health
          <input
            type="number"
            name="health"
            min="1"
            required
            value={form.health}
            onChange={handle}
            className="form-control mt-1"
          />
        </label>

        <label className="form-label">Damage
          <input
            type="number"
            name="damage"
            min="1"
            required
            value={form.damage}
            onChange={handle}
            className="form-control mt-1"
          />
        </label>
      </div>

      <button type="submit" disabled={loading} className="button button-primary" style={{width:'100%'}}>
        {loading ? 'Saving…' : 'Save'}
      </button>
    </form>
  );
}