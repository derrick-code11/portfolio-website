import { IoIosCheckmarkCircle } from "react-icons/io";
import ToolsData from "../tools-frameworks.json";
import "../styles/tool-lang.css";

const Tools = () => {
  return (
    <>
      <div className="details-container">
        <h2 className="skill-sub-title">Tools and Framework</h2>
        <div className="article-container">
          {ToolsData.map((tool) => (
            <article key={tool.id}>
              <IoIosCheckmarkCircle />
              <div>
                <h3>{tool.name}</h3>
                <p>{tool.level}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tools;
