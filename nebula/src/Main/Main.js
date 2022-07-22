import sheep from "./style/spaceSheep.svg";
import planets from "./style/planets.svg";
import "./style/main.css"
function Main() {
  return (
    <div className="Main-site">
      <div className="main-wrapper">
        <div className="essential">
          <img src={sheep} alt="spacesheep" className="spacesheep" />
          <h1 className="essential-h1">
            We explore the <span className="essential-h1-span">galaxy</span>.
          </h1>
          <p className="essential-p">
            Nebula is a community of physicists dedicated to 
            <span className="essential-p-span"> space exploration and innovation</span>. We are on a mission
            to make scientific breakthroughs that will benefit humanity.
          </p>
          <div className="buttons-wrap">
            <button className="essential-btn-left">Support us</button><button className="essential-btn-right">Our Mission</button>
          </div>
        </div>
        <div className="img-space">
            <img src={planets} alt="planets" className="planets" />
        </div>
      </div>
    </div>
  );
}

export default Main;
