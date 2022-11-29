import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <h1 className="child bounce">MealBuddy</h1>
        <h3>
          <Link to={"login"}>Sign In</Link>
        </h3>
        <h3>
          <Link to={"logout"}>Sign Out</Link>
        </h3>
        <h3>
          <Link to={"signUpPage"}>Sign Up</Link>
        </h3>
        <h3>
          <Link to={"dashboard"}>Profile</Link>
        </h3>
        <h3>
          <Link to={"accountInfo"}>Account Settings</Link>
        </h3>
        <h3>
          <Link to={"dietarySettings"}>Dietary Settings</Link>
        </h3>
      </div>
    </>
  );
}
