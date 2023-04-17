import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage.jsx';
import NotFoundPage from './pages/404/NotFoundPage.jsx';
import AboutPage from './pages/about-faqs/AboutPage.jsx';


function AppRoutingOne() {
    return (
        <div className="AppRoutingOne">
            <Router>

                <div>
                    <aside>
                        <Link to='/'>| Home |</Link>
                        <Link to='/about'>| About |</Link>
                        <Link to='/faqs'>| FAQs |</Link>
                    </aside>
                    <main>
                        <Routes>
                            <Route path='/' Component={HomePage} />
                            <Route path='/about' Component={AboutPage} />
                            <Route path='/faqs' Component={AboutPage} />

                            {/* 404 - Page Not Found */}
                            <Route path='*' Component={NotFoundPage} />
                        </Routes>
                    </main>
                </div>



            </Router>
        </div>
    );
}

export default AppRoutingOne;
