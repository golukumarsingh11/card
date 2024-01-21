import { useState } from "react";

function App() {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };
  const [cards] = useState([
    {
      tittle: "React js",
      Text: " About the internship Selected interns day-to-day  responsibilities include: Developing new user-facing  features using React js. ",
    },
    {
      tittle: "React js",
      Text: " About the internship Selected interns day-to-day  responsibilities include: Developing new user-facing  features using React js. ",
    },
    {
      tittle: "React js",
      Text: " About the internship Selected interns day-to-day  responsibilities include: Developing new user-facing  features using React js. ",
    },
    {
      tittle: "React js",
      Text: " About the internship Selected interns day-to-day  responsibilities include: Developing new user-facing  features using React js. ",
    },
    {
      tittle: "React js",
      Text: " About the internship Selected interns day-to-day  responsibilities include: Developing new user-facing  features using React js. ",
    },
    {
      tittle: "React js",
      Text: " About the internship Selected interns day-to-day  responsibilities include: Developing new user-facing  features using React js. ",
    },
  ]);
  return (
    <>
      <div>
        <div>
          {popup ? (
            <div className="main">
              <div className="popup">
                <div className="popup-header">
                  <h2 onClick={closePopup}>X</h2>
                </div>
                <div>
                  <h3>Sign Up</h3>
                  <div class="upload">
                    <img src="noprofil.jpg" width="100" height="100" alt="" />
                    <div class="round">
                      <input type="file"></input>
                    </div>
                  </div>
                  <div class="container">
                    <div class="form-box">
                      <form>
                        <div class="input-group">
                          <div class="input-field" id="nameField">
                            <input type="Name" placeholder="Name" name="Name" />
                          </div>
                          <div class="input-field">
                            <i class="fa-solid fa-user"></i>
                            <input
                              type="Email"
                              placeholder="Email"
                              name="Email"
                            />
                          </div>
                          <div class="input-field">
                            <input
                              type="Location"
                              placeholder="Location"
                              name="Location"
                            />
                          </div>
                          <div class="input-field">
                            <input
                              type="Phone"
                              placeholder="Phone"
                              name="Phone"
                            />
                          </div>
                          <div class="input-field">
                            <input
                              type="Password"
                              placeholder="Password"
                              name="Password"
                            />
                          </div>
                          <p>
                            Lost password <a href="#">Click Hear!</a>
                          </p>
                          <div class="btn-field">
                            <button type="button" id="signupBtn">
                              sign up
                            </button>
                            <button
                              type="button"
                              id="signingBtn"
                              class="disable"
                            >
                              Sign in
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <section>
          <div className="container">
            <h1>Responsive Cards</h1>
            <div className="cards">
              {cards.map((card, i) => (
                <div key={i} className="card">
                  <h3>{card.tittle}</h3>
                  <p>{card.Text}</p>
                  <button className="btn" onClick={handleClickOpen}>
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
