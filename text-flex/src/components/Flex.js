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

  const flexFlow = [
    { code: "flex-flow: row wrap;", className: "ff-rw" },
    { code: "flex-flow: column wrap;", className: "ff-cw" }
  ];

  const justifyContent = [
    { code: "justify-content: flex-start;", className: "jc-fs" },
    { code: "justify-content: flex-end;", className: "jc-fe" },
    { code: "justify-content: center;", className: "jc-c" },
    { code: "justify-content: space-between;", className: "jc-sb" },
    { code: "justify-content: space-evenly;", className: "jc-se" },
    { code: "justify-content: space-around;", className: "jc-sa" }
  ];

  const alignItems = [
    { code: "align-items: stretch;", className: "ai-s" },
    { code: "align-items: flex-start;", className: "ai-fs" },
    { code: "align-items: flex-end;", className: "ai-fe" },
    { code: "align-items: center;", className: "ai-c" },
    { code: "align-items: baseline;", className: "ai-b" }
  ];

  const alignContent = [
    { code: "align-content: stretch;", className: "ac-s" },
    { code: "align-content: flex-start;", className: "ac-fs" },
    { code: "align-content: flex-end;", className: "ac-fe" },
    { code: "align-content: center;", className: "ac-c" },
    { code: "align-content: space-between;", className: "ac-sb" },
    { code: "align-content: space-around;", className: "ac-sa" }
  ];

  return (
    <div className="flexBox">
      <div
        className="flexBox"
        style={{ backgroundColor: "#209cee", padding: "10px", color: "white" }}
      >
        <span className="section-title">Parent Property</span>

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

          {alignItems.map(x => (
            <p>
              <code>{x.code}</code>
              <samp>
                <div className={x.className}>
                  <div
                    className="f-item inside-item"
                    style={{ height: "auto", fontSize: "5em" }}
                  >
                    1
                  </div>
                  <div
                    className="f-item inside-item"
                    style={{ height: "auto", fontSize: "2em" }}
                  >
                    2
                  </div>
                  <div
                    className="f-item inside-item"
                    style={{ height: "auto", fontSize: "3em" }}
                  >
                    3
                  </div>
                  <div
                    className="f-item inside-item"
                    style={{ height: "auto", fontSize: "4em" }}
                  >
                    4
                  </div>
                  <div
                    className="f-item inside-item"
                    style={{ height: "auto", fontSize: "5em" }}
                  >
                    5
                  </div>
                </div>
              </samp>
            </p>
          ))}
        </section>

        <section>
          <span className="section-title">align-content</span>
          {alignContent.map(x => (
            <p>
              <code>{x.code}</code>
              <samp>
                <div className={x.className}>
                  <div
                    className="f-item inside-item"
                    style={{ height: "auto" }}
                  >
                    1
                  </div>
                  <div
                    className="f-item inside-item"
                    style={{ height: "auto" }}
                  >
                    2
                  </div>
                  <div
                    className="f-item inside-item"
                    style={{ height: "auto" }}
                  >
                    3
                  </div>
                  <div
                    className="f-item inside-item"
                    style={{ height: "auto" }}
                  >
                    4
                  </div>
                  <div
                    className="f-item inside-item"
                    style={{ height: "auto" }}
                  >
                    5
                  </div>
                  <div
                    className="f-item inside-item"
                    style={{ height: "auto" }}
                  >
                    6
                  </div>
                  <div
                    className="f-item inside-item"
                    style={{ height: "auto" }}
                  >
                    7
                  </div>
                  <div
                    className="f-item inside-item"
                    style={{ height: "auto" }}
                  >
                    8
                  </div>
                  <div
                    className="f-item inside-item"
                    style={{ height: "auto" }}
                  >
                    9
                  </div>
                  <div
                    className="f-item inside-item"
                    style={{ height: "auto" }}
                  >
                    10
                  </div>
                </div>
              </samp>
            </p>
          ))}
        </section>
      </div>

      <div
        className="flexBox"
        style={{ backgroundColor: "#209cee", padding: "10px", color: "white" }}
      >
        <span className="section-title">Child Property</span>
        <section>
          <span className="section-title">order</span>
          <p>
            <code>order: index number;</code>
            <samp>
              <div style={{ display: "flex" }}>
                <div className="f-item inside-item" style={{ order: "1" }}>
                  1
                </div>
                <div className="f-item inside-item">2</div>
                <div className="f-item inside-item" style={{ order: "2" }}>
                  3
                </div>
                <div className="f-item inside-item" style={{ order: "3" }}>
                  4
                </div>
                <div className="f-item inside-item" style={{ order: "4" }}>
                  5
                </div>
              </div>
            </samp>
          </p>
        </section>

        <section>
          <span className="section-title">
            flex-grow, flex-shrink, flex-basis <br />
            => Recommended use flex instead of above them
          </span>
        </section>

        <section>
          <span className="section-title">flex</span>
          <p>
            <code>flex: 1 0 20%; // flex-grow flex-shrink flex-basis</code>
            <samp>
              <div style={{ display: "flex" }}>
                <div className="f-item inside-item">1</div>
                <div className="f-item inside-item" style={{ flex: "1 0 20%" }}>
                  2
                </div>
                <div className="f-item inside-item" style={{ flex: "1 0 20%" }}>
                  3
                </div>
                <div className="f-item inside-item" style={{ flex: "1 0 20%" }}>
                  4
                </div>
                <div className="f-item inside-item" style={{ flex: "1 0 20%" }}>
                  5
                </div>
              </div>
            </samp>
          </p>
        </section>

        <section>
          <span className="section-title">align-self</span>

          <p>
            <code>
              align-self: auto; // inherit from parent's align-items
              <br />
              align-self: flex-start;
              <br />
              align-self: flex-end;
              <br />
              align-self: center;
              <br />
              align-self: baselne;
              <br />
              align-self: stretch;
            </code>

            <samp>
              <div style={{ display: "flex" }}>
                <div
                  className="f-item inside-item"
                  style={{ height: "auto", fontSize: "4em", alignSelf: "auto" }}
                >
                  1
                </div>
                <div
                  className="f-item inside-item"
                  style={{
                    height: "auto",
                    fontSize: "2em",
                    alignSelf: "flex-start"
                  }}
                >
                  2
                </div>
                <div
                  className="f-item inside-item"
                  style={{
                    height: "auto",
                    fontSize: "3em",
                    alignSelf: "flex-end"
                  }}
                >
                  3
                </div>
                <div
                  className="f-item inside-item"
                  style={{
                    height: "auto",
                    fontSize: "4em",
                    alignSelf: "center"
                  }}
                >
                  4
                </div>
                <div
                  className="f-item inside-item"
                  style={{
                    height: "auto",
                    fontSize: "5em",
                    alignSelf: "baselne"
                  }}
                >
                  5
                </div>
                <div
                  className="f-item inside-item"
                  style={{
                    height: "auto",
                    fontSize: "2em",
                    alignSelf: "stretch"
                  }}
                >
                  6
                </div>
              </div>
            </samp>
          </p>
        </section>
      </div>
    </div>
  );
}
