const Projects = () => {
  return (
    <>
      <section className="py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Projects</span>
            </h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center">
                    <div className="p-5">
                      <h2 className="fw-bolder">Toyota Motors Europe</h2>
                      <p>
                        Worked on Sales and AfterSales Workbench of Toyota
                        Motors Europe for tenants - Italy, Spain and
                        German.Converted business requirements into efficient
                        software solutions taking into account the guidelines
                        and code quality procedures of enterprise project.
                      </p>
                    </div>
                    <img
                      className="img-fluid"
                      src="./assets/toyotaLogo.jpg"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div className="card overflow-hidden shadow rounded-4 border-0">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center">
                    <div className="p-5">
                      <h2 className="fw-bolder">Fondo Sviluppo</h2>
                      <p>
                        FondoSviluppo project is the project of the mutual funds
                        of Confcoperative for the promotion of cooperatives. I
                        have contributed to this particular project by
                        implementing new features and fixing critical bugs on
                        release day.
                      </p>
                    </div>
                    <img
                      className="img-fluid"
                      src="./assets/fondosviluppoLogo.png"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
