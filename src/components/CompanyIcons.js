import * as React from "react";

const CompanyIcon = ({ href, src, width = "32px" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ margin: 0, padding: 0, textDecoration: "none" }}
    >
      <img
        src={src}
        alt={src}
        width={width}
        style={{ borderRadius: "300px" }}
      />
    </a>
  );
};

const TestBoxTimelineIcon = ({ width }) => (
  <CompanyIcon
    href="https://www.linkedin.com/company/testboxofficial"
    src="testbox_logo.png"
    width={width}
  />
);

const LumenaltaTimelineIcon = ({ width }) => (
  <CompanyIcon
    href="https://www.linkedin.com/company/lumenalta"
    src="clevertech_logo.jpeg"
    width={width}
  />
);

const ConcordiaTimelineIcon = ({ width }) => (
  <CompanyIcon
    href="https://www.linkedin.com/company/concordia-labs"
    src="concordia_labs_logo.jpeg"
    width={width}
  />
);

const DevelcodeTimelineIcon = ({ width }) => (
  <CompanyIcon
    href="https://www.linkedin.com/company/develcode"
    src="develcode_logo.jpeg"
    width={width}
  />
);

const DipsystemTimelineIcon = ({ width }) => (
  <CompanyIcon
    href="https://www.linkedin.com/in/dipsystem-sistemas-8960241ab/?originalSubdomain=br"
    src="dipsystem.jpeg"
    width={width}
  />
);


export {
    TestBoxTimelineIcon,
    LumenaltaTimelineIcon,
    ConcordiaTimelineIcon,
    DevelcodeTimelineIcon,
    DipsystemTimelineIcon
}