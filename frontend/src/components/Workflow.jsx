import "../styles/landing.css";
import {
  FaUpload,
  FaSearch,
  FaDatabase,
  FaRobot,
  FaCheckCircle,
  FaDownload,
} from "react-icons/fa";

const workflow = [
  {
    icon: <FaUpload />,
    title: "Upload Repository",
    desc: "Upload your existing Spring Boot, Django, Flask or Express project."
  },
  {
    icon: <FaSearch />,
    title: "Repository Analysis",
    desc: "The platform analyzes project structure, APIs, dependencies and architecture."
  },
  {
    icon: <FaDatabase />,
    title: "Build RAG Index",
    desc: "LlamaIndex creates semantic embeddings so agents understand your codebase."
  },
  {
    icon: <FaRobot />,
    title: "AI Agent Collaboration",
    desc: "CrewAI agents plan, migrate, review and optimize your application."
  },
  {
    icon: <FaCheckCircle />,
    title: "Automated Validation",
    desc: "Judge0 compiles, executes and validates the generated application."
  },
  {
    icon: <FaDownload />,
    title: "Download Project",
    desc: "Receive a production-ready migrated application with documentation."
  }
];

export default function Workflow() {
  return (
    <section className="workflow" id="workflow">

      <div className="section-heading">
        <span>Migration Workflow</span>

        <h2>
          From Legacy Code
          <br />
          to Modern Architecture
        </h2>

        <p>
          CodeMan Sachs automates the entire migration lifecycle using
          Retrieval-Augmented Generation, autonomous AI agents and
          automated validation.
        </p>
      </div>

      <div className="workflow-container">

        {workflow.map((step, index) => (
          <div className="workflow-item" key={index}>

            <div className="workflow-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>

            {index !== workflow.length - 1 && (
              <div className="workflow-arrow">
                ↓
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}