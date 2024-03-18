const About = () => {
  return (
    <>
      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">About Me</span>
                </h2>
                <p className="lead fw-light mb-4">
                  My name is Jasminder Kaur. A passionate fullstack .NET and
                  MERN developer based in Montreal, Canada.
                </p>
                <p className="text-muted">
                  I'm a fullstack .NET developer with around 4 years of
                  experience in the IT field in Italy. During my work, I have
                  contributed to multi-national enterprise projects and some
                  local projects of financial sector. I upskilled myself through
                  Concordia University's full-time Web development bootcamp. I
                  look forward eagerly to use my skills to grow your business.
                </p>
                <div className="d-flex justify-content-center fs-2 gap-4">
                  <a
                    className="text-gradient"
                    href="https://www.linkedin.com/in/jasminder-kaur-15856a11a/"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                    className="text-gradient"
                    href="https://github.com/jasminder-k"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
