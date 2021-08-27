import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HowToGateStarted from "./Pages/HowToGetStart/HowToGateStarted";
import AboutUs from "./Pages/AboutPage/AboutUs";
import BenifiteOfMember from "./Pages/BenifiteOfMemberPage/BenifiteOfMember";
import WhyJoinUs from "./Pages/WhyJoinUsPage/WhyJoinUs";
import JoinNow from "./Pages/JoinNowPage/JoinNow";
import Login from "./Pages/LoginPage/Login";
import JoinType from "./Pages/JoinNowPage/JoinType";
import PrivetPage from "./Pages/PrivetPage/PrivetPage";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ifLogedIN } from "./Redux/Actions/BuyerAuthAction";
import AfterBuyerLogin from "./Pages/AfterBuyerLogIn/AfterBuyerLogin";
import AccountActivate from "./Pages/JoinNowPage/AccountActivate";
import BuyerCompanyListPage from "./Pages/AfterBuyerLogIn/BuyerCompanyListPage";
import SellerAccountActive from "./Pages/JoinNowPage/SellerAccountActive";
axios.defaults.withCredentials = true;

function App() {
  const buyerAutyh = useSelector((state) => state.buyerAuthReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!buyerAutyh.authenticate) {
      dispatch(ifLogedIN());
    }
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/how-to-started">
          <HowToGateStarted />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/benefite-of-member">
          <BenifiteOfMember />
        </Route>
        <Route path="/why-join-us">
          <WhyJoinUs />
        </Route>
        <Route exact path="/join-us">
          <JoinType />
        </Route>
        <Route path="/join-us/:type">
          <JoinNow />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/account/activate/:token">
          <AccountActivate />
        </Route>
        <Route path="/account/seller/activate/:token">
          <SellerAccountActive />
        </Route>
        <PrivetPage path="/buyer/1">
          <AfterBuyerLogin />
        </PrivetPage>
        <PrivetPage path="/buyer/list">
          <BuyerCompanyListPage />
        </PrivetPage>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
