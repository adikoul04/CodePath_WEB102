import { Link, Routes, Route, Navigate } from 'react-router-dom';
import CreateCharacter from './pages/CreateCharacter';
import CharacterSummary from './pages/CharacterSummary';
import CharacterDetailPage from './pages/CharacterDetailPage';
import EditCharacter from './pages/EditCharacter';

export default function App() {
  return (
    <div>
      <nav className="nav">
        <Link to="/summary">Summary</Link>
        <Link to="/create">Create Character</Link>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/"           element={<Navigate to="/summary" />} />
          <Route path="/create"     element={<CreateCharacter />} />
          <Route path="/summary"    element={<CharacterSummary />} />
          <Route path="/character/:id" element={<CharacterDetailPage />} />
          <Route path="/edit/:id"   element={<EditCharacter />} />
        </Routes>
      </main>
    </div>
  );
}