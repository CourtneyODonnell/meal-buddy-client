//import { Link } from "react-router-dom";

import "./App.scss";
//import Header from "../Header";
//import Sidebar from "../Sidebar";
import MainPage from "../MainPage";
//import Modal from "../Modal";
import SignUp from "../SignUpPage";
import Modal from "../Modal";
import SignUp from "../SignUp";
import GroceryList from "../GroceryList/GroceryList";
//import DailyMenu from "../Menu/DailyMenu";
import FullPageMenuItem from "../Menu/FullPageMenuItem";
import Menu from "../Menu/Menu";
//import MiniMenuItem from "../Menu/MiniMenuItem";
//import AccountInfo from "../user/AccountInfo";
import Dashboard from "../user/Dashboard";
//import DietarySettings from "../user/DietarySettings";
import Login from "../user/Login";
import UserIndex from "../user/UserIndex";
import About from "../About";
import HowTo from "../HowTo";
import LogOut from "../LogOut";
import PopUp from "../PopUp";
import RecipeItem from "../Menu/RecipeItem";
import WelcomeBack from "../WelcomeBack";

function App(session) {

  return (
    <>

      
      <MainPage checkCookie={checkCookie} />
      {/* <GroceryList /> */}

      <MainPage />
      {/* <GroceryList />
      <Menu />
      <RecipeItem />
      {/* <FullPageMenuItem />
      <Dashboard />
      <Login />
      <UserIndex />
      <About />
      <HowTo />
      <WelcomeBack />
      <LogOut />
      <PopUp />
      <SignUp />
      <SignUp /> */}

    </>
  );
}

export default App;
