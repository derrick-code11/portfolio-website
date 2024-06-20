import { IoIosCheckmarkCircle } from "react-icons/io";
import LangData from "../prog-lang.json";
import "../styles/tool-lang.css";

const Languages = () => {
  return (
    <>
      <div className="details-container">
        <h2 className="skill-sub-title">Programming Languages</h2>
        <div className="article-container">
          {LangData.map((lang) => (
            <article key={lang.id}>
              <IoIosCheckmarkCircle />
              <div>
                <h3>{lang.name}</h3>
                <p>{lang.level}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Languages;
