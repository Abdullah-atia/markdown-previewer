import React from "react";
import { docs } from "./data";

export default function Docs() {
  return (
    <div className="elements">
      {docs.map((el) => (
        <div className="element" key={el.name}>
          <h2>{el.name}</h2>
          <p>{el.description}</p>
          {el.examples.map((ex, index) => (
            <div className="example" key={ex.markdown}>
              <br />
              <h3>-Markdown {index}</h3>
              <p>{ex.markdown}</p>
              <h3>-html</h3>
              <p>{ex.html}</p>
            </div>
          ))}
          {el.additional_examples.map((ex) => (
            <div key={ex.name}>
              <hr />
              <br/>
              <h3>{ex.name}</h3>
              <p>{ex.html}</p>
              <br/>
              <h3>-Markdown </h3>
              <p>{ex.markdown}</p>
              <h3>-html</h3>
              <p>{ex.html}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
