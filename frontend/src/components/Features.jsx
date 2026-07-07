import "../styles/landing.css";
import {
    FaFolderOpen,
    FaRobot,
    FaDatabase,
    FaBookOpen,
    FaCode,
    FaCheckCircle
} from "react-icons/fa";

export default function Features() {

    const features = [

        {
            icon: <FaFolderOpen />,
            title: "Repository Upload",
            description:
                "Upload Spring Boot, Django, Flask, Express or legacy applications with a single click."
        },

        {
            icon: <FaRobot />,
            title: "AI Multi-Agent System",
            description:
                "Specialized AI agents analyze, plan, migrate, review and validate your project collaboratively."
        },

        {
            icon: <FaDatabase />,
            title: "Intelligent RAG",
            description:
                "LlamaIndex understands your codebase through semantic search instead of reading every file."
        },

        {
            icon: <FaBookOpen />,
            title: "Context7 Integration",
            description:
                "AI agents always use the latest framework documentation during migration."
        },

        {
            icon: <FaCode />,
            title: "Automated Code Migration",
            description:
                "Transform legacy projects into modern architectures without starting from scratch."
        },

        {
            icon: <FaCheckCircle />,
            title: "Judge0 Validation",
            description:
                "Generated code is compiled, executed and validated automatically before delivery."
        }

    ];

    return (

        <section
            className="features"
            id="features"
        >

            <div className="section-heading">

                <span>Why CodeMan Sachs</span>

                <h2>

                    Enterprise AI for
                    <br />

                    Code Migration

                </h2>

                <p>

                    Accelerate application modernization using autonomous
                    AI agents, Retrieval-Augmented Generation, automated
                    validation and intelligent workflows.

                </p>

            </div>

            <div className="feature-grid">

                {features.map((feature, index) => (

                    <div
                        className="feature-card"
                        key={index}
                    >

                        <div className="feature-icon">

                            {feature.icon}

                        </div>

                        <h3>

                            {feature.title}

                        </h3>

                        <p>

                            {feature.description}

                        </p>

                    </div>

                ))}

            </div>

        </section>

    );

}