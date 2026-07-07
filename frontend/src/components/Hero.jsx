import "../styles/landing.css";

export default function Hero() {

    return (

        <section className="hero">

            <div className="hero-left">

                <span className="hero-badge">

                    AI Powered • Multi-Agent Platform

                </span>

                <h1>

                    Analyze.
                    <br/>

                    Migrate.
                    <br/>

                    Validate.
                    <br/>

                    <span>Deploy.</span>

                </h1>

                <p>

                    Upload your legacy applications and let autonomous AI
                    agents analyze repositories, migrate frameworks,
                    validate code quality, and modernize your software
                    architecture—all powered by intelligent workflows.

                </p>

                <div className="hero-buttons">

                    <button className="primary-btn">

                        Start Migration

                    </button>

                    <button className="secondary-btn">

                        View Workflow

                    </button>

                </div>

            </div>

            <div className="hero-right">

                <div className="hero-card">

                    <h3>

                        Repository Analysis

                    </h3>

                    <div className="status">

                        ✓ Spring Boot Project

                    </div>

                    <div className="status">

                        ✓ 142 Source Files

                    </div>

                    <div className="status">

                        ✓ PostgreSQL

                    </div>

                    <div className="status">

                        ✓ Ready for Migration

                    </div>

                </div>

            </div>

        </section>

    );

}