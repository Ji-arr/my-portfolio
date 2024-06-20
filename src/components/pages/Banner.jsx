import "./Banner.css";
export const Banner = () => {
  return (
    <div className="banner" id="banner">
      <div className="flex-wrap">
        <div className="with-line left" />
        <div className="picture"></div>
        <span className="with-line mid" />
        <div className="content" style={{ overflow: "hidden" }}>
          <div className="header">
            <h2>Jay-Ar Portagana</h2>
            <p>Computer Science</p>
          </div>

          <p>
            I'm a motivated and enthusiastic aspiring web developer eager to
            kickstart my career. While I may not have years of professional
            experience, I bring a passion for coding, a strong foundation in web
            development fundamentals, and a commitment to continuous learning.
          </p>
          <div className="banner_footer">
            <h2>Location</h2>
            <p>Silang, Cavite Philippines</p>
          </div>
        </div>
        <div className="with-line right" />
      </div>
    </div>
  );
};
