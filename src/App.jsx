import { useState } from 'react';
import './index.css';
import TeacherLogin from './pages/TeacherLogin';
import TeacherHome from './pages/TeacherHome';
import TeacherClassroom from './pages/TeacherClassroom';
import TeacherNGO from './pages/TeacherNGO';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminVerification from './pages/AdminVerification';

const pages = {
  TeacherLogin,
  TeacherHome,
  TeacherClassroom,
  TeacherNGO,
  AdminLogin,
  AdminDashboard,
  AdminVerification,
};

export default function App() {
  const [page, setPage] = useState('TeacherLogin');
  const Page = pages[page];
  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
        {Object.keys(pages).map((p) => (
          <button key={p} onClick={() => setPage(p)}>{p}</button>
        ))}
      </div>
      <Page />
    </div>
  );
}
