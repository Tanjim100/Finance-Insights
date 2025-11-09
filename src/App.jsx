import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import About from './pages/About';
import Blogs from './pages/Blogs/Blogs';
import MainLayout from './layouts/MainLayout';
import ResoucesPage from './pages/ResourcesPage/ResoucesPage';
import BlogPage from './pages/BlogPage/BlogPage';
import AdminResoucePage from './pages/AdminResourcePage/AdminResourcePage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogPage />} />
              <Route path="/resources" element={<ResoucesPage />} />
              <Route path="/admin-resources" element={<AdminResoucePage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </MainLayout>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;