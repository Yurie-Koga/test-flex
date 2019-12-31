import React from "react";
import FlexItems from "./FlexItems";

export default function Flex() {
  const flexDirection = [
    { code: "flex-direction: row;", className: "fd-r" },
    { code: "flex-direction: row-reverse;", className: "fd-rr" },
    { code: "flex-direction: column;", className: "fd-c" },
    { code: "flex-direction: column-reverse;", className: "fd-cr" }
  ];

  const flexWrap = [
    { code: "flex-wrap: nowrap;", className: "fw-nw" },
    { code: "flex-wrap: wrap;", className: "fw-w" },
    { code: "flex-wrap: wrap-reverse;", className: "fw-wr" }
  ];

  const flexFlow = [{ code: "flex-flow: row wrap;", className: "ff-rw" }];

  const justifyContent = [
    { code: "justify-content: flex-start;", className: "jc-fs" },
    { code: "justify-content: flex-end;", className: "jc-fe" },
    { code: "justify-content: center;", className: "jc-c" },
    { code: "justify-content: space-between;", className: "jc-sb" },
    { code: "justify-content: space-evenly;", className: "jc-se" },
    { code: "justify-content: space-around;", className: "jc-sa" }
  ];

  return (
    <div className="flexBox">
      <section>
        <span className="section-title">flex-direction</span>
        {flexDirection.map(x => (
          <p>
            <code>{x.code}</code>
            <samp>
              <FlexItems ClassNameFlex={x.className} />
            </samp>
          </p>
        ))}
      </section>

      <section>
        <span className="section-title">flex-wrap</span>
        {flexWrap.map(x => (
          <p>
            <code>{x.code}</code>
            <samp>
              <FlexItems ClassNameFlex={x.className} />
            </samp>
          </p>
        ))}
      </section>

      <section>
        <span className="section-title">flex-flow</span>
        {flexFlow.map(x => (
          <p>
            <code>{x.code}</code>
            <samp>
              <FlexItems ClassNameFlex={x.className} />
            </samp>
          </p>
        ))}
      </section>

      <section>
        <span className="section-title">justify-content</span>
        {justifyContent.map(x => (
          <p>
            <code>{x.code}</code>
            <samp>
              <FlexItems ClassNameFlex={x.className} />
            </samp>
          </p>
        ))}
      </section>

      <section>
        <span className="section-title">align-items</span>

        <p>
          <code>align-items: stretch;</code>
          <samp>
            <div className="ai-s">
              <div className="f-item inside-item" style={{ height: "30px" }}>
                1
              </div>
              <div className="f-item inside-item" style={{ height: "50px" }}>
                2
              </div>
              <div className="f-item inside-item" style={{ height: "60px" }}>
                3
              </div>
              <div className="f-item inside-item" style={{ height: "20px" }}>
                4
              </div>
              <div className="f-item inside-item" style={{ height: "90px" }}>
                5
              </div>
            </div>
          </samp>
        </p>
      </section>
    </div>
  );
}
