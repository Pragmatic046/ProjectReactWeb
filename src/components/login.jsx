// import {background} from '../assets/videos/background.mp4'
// import {logo} from '../assets/images/7.jpg'


function Login() {
  return (
    <>
      <div id="main">
        <nav id="navbar">
          <div id="img-space">
            <a href="">
              <img src="" alt="Pic" />
            </a>
          </div>
          <div id="nav-list">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Sign Up</a>
              </li>
              <li>
                <a href="">Log In</a>
              </li>
            </ul>
          </div>
        </nav>

        <section>
          <div id="section-left">
            <form action="">
              <div id="username-space">
                <label htmlFor="username" id="username-label">
                  Username
                </label>
                <input
                  type="email"
                  id="username"
                  name="username-input"
                  placeholder="Username"
                />
              </div>
              <div id="password-space">
                <label htmlFor="password" id="password-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password-input"
                  placeholder="Password"
                  min={10}
                />
              </div>
              <div id="btn-space">
                <button id="submit-btn">Login</button>
              </div>
            </form>
            {/* <video  autoPlay muted >
              <source src={background} />
            </video> */}
          </div>
          {/* <div id="section-right"></div> */}
        </section>
      </div>
    </>
  );
}

export default Login;
