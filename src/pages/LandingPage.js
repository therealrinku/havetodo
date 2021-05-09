import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import MainImage from "../assets/main.svg";
import { Link } from "react-router-dom";
import FiveStarImage from "../assets/Stars.png";
import { FcOk } from "react-icons/all";

const LandingPage = ({ currentUser }) => {
  const [email, setEmail] = useState("");

  return (
    <Fragment>
      <main className="landing-page">
        <section>
          <div>
            <img src={MainImage} alt="main" />
          </div>

          <div>
            <h2>
              Fallora is your new daily task manager
              <br /> to take you to the moon.
            </h2>
            <Link to="/signup">Start 15 days free trial</Link>
          </div>
        </section>

        <section>
          <div>
            <img src={FiveStarImage} alt="main" />
            <p>“I’ve tried a million other todo apps and can’t find anything else I like more than Falloora!”</p>
          </div>

          <div>
            <img src={FiveStarImage} alt="main" />
            <p>
              “With your service, I can stay organized in a way that works for me. Yours is the most impactful tool I
              use. Thank you so much for giving the world this magical helper.”
            </p>
          </div>

          <div>
            <img src={FiveStarImage} alt="main" />
            <p>
              “Many to-do apps have the feel of a project management tool. Falloora replaces pen and paper in a great
              way. Thanks!”
            </p>
          </div>

          <div>
            <img src={FiveStarImage} alt="main" />
            <p>“What makes it so great is that it’s clean and slick and not too complicated.”</p>
          </div>
        </section>

        <section>
          <div>
            <FcOk />
            <p>Clean and Easy to use interface</p>
          </div>

          <div>
            <FcOk />
            <p>Drag and drop tasks to any day</p>
          </div>

          <div>
            <FcOk />
            <p>Priotize tasks according to their importance</p>
          </div>
        </section>

        <section>
          <h2>What are you waiting for! Start your free trial now!</h2>
          <div>
            <input
              type="text"
              placeholder="Type your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Link to={`/signup?email=${email}`}>Sign me up</Link>
          </div>
        </section>
      </main>

      {/* redirecting to todo page if user is loggedin */ currentUser ? <Redirect to="/home" /> : null}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(LandingPage);
