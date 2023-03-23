// import logo from '@/logo.svg';
import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRouter from '@/pages/Public/PublicRouter'
import AdminRouter from '@/pages/Admin/AdminRouter'
import AuthRouter from './pages/Auth/AuthRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />}/>
          <Route path="/admin/*" element={<AdminRouter />}/>
          <Route path="/auth/*" element={<AuthRouter />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
