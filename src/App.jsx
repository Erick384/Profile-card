import "./App.css";

function App() {
  return (
    <body>
      <div className="container">
        <div className="top"></div>
        <div className="bottom-Content">
          <img src="/image-victor.jpg" alt="victor" className="imgVictor" />
          <div className="content">
            <div>
              <h2>Victor Crest</h2>
              <span>26</span>
            </div>
            <div>
              <span>London</span>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-Txt">
              <h3>80k</h3>
              <span>Followers</span>
            </div>
            <div className="bottom-Txt">
              <h3>803k</h3>
              <span>Likes</span>
            </div>
            <div className="bottom-Txt">
              <h3>1.4k</h3>
              <span>Photos</span>
            </div>
          </div>
        </div>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Erick-384</a>.
      </div>
    </body>
  );
}

export default App;
