import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

const HomePage = () => <h1>Welcome Home</h1>;
const AboutPage = () => <h1>About Us</h1>;
const ContactPage = () => <h1>Contact Us</h1>;
const ChallengesPage = () => <h1>30 Days Of React Challenge</h1>;
const NotFoundPage = () => <h1>The Page You're Looking For Is Not Found</h1>;

const NavigationBar = () => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
    <li>
      <NavLink to="/challenges">Challenges</NavLink>
    </li>
  </ul>
);

const RoutingExample = () => (
  <Router>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/challenges" element={<ChallengesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default RoutingExample;

