import React from "react";
import FlexItems from "./FlexItems";

export default function Flex() {
  return (
    <div className="flexBox">
      <section>
        <span className="section-title">flex-direction</span>
        <p>
          <code>flex-direction: row;</code>
          <samp>
            <FlexItems ClassNameFlex="fd-r" />
          </samp>
        </p>

        <p>
          <code>flex-direction: row-reverse;</code>
          <samp>
            <FlexItems ClassNameFlex="fd-rr" />
          </samp>
        </p>

        <p>
          <code>flex-direction: column;</code>
          <samp>
            <FlexItems ClassNameFlex="fd-c" />
          </samp>
        </p>

        <p>
          <code>flex-direction: column-reverse;</code>
          <samp>
            <FlexItems ClassNameFlex="fd-cr" />
          </samp>
        </p>
      </section>

      <section>
        <span className="section-title">flex-wrap</span>

        <p>
          <code>flex-wrap: nowrap;</code>
          <samp>
            <FlexItems ClassNameFlex="fw-nw" />
          </samp>
        </p>

        <p>
          <code>flex-wrap: wrap;</code>
          <samp>
            <FlexItems ClassNameFlex="fw-w" />
          </samp>
        </p>

        <p>
          <code>flex-wrap: wrap-reverse;</code>
          <samp>
            <FlexItems ClassNameFlex="fw-wr" />
          </samp>
        </p>
      </section>

      <section>
        <span className="section-title">flex-flow</span>
        <p>
          <code>flex-flow: row wrap;</code>
          <samp>
            <FlexItems ClassNameFlex="ff-rw" />
          </samp>
        </p>
      </section>

      <section>
        <span className="section-title">justify-content</span>

        <p>
          <code>justify-content: flex-start;</code>
          <samp>
            <FlexItems ClassNameFlex="jc-fs" />
          </samp>
        </p>

        <p>
          <code>justify-content: flex-end;</code>
          <samp>
            <FlexItems ClassNameFlex="jc-fe" />
          </samp>
        </p>

        <p>
          <code>justify-content: center;</code>
          <samp>
            <FlexItems ClassNameFlex="jc-c" />
          </samp>
        </p>

        <p>
          <code>justify-content: space-between;</code>
          <samp>
            <FlexItems ClassNameFlex="jc-sb" />
          </samp>
        </p>

        <p>
          <code>justify-content: space-evenly;</code>
          <samp>
            <FlexItems ClassNameFlex="jc-se" />
          </samp>
        </p>

        <p>
          <code>justify-content: space-around;</code>
          <samp>
            <FlexItems ClassNameFlex="jc-sa" />
          </samp>
        </p>
      </section>
    </div>
  );
}
