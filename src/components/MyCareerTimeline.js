import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Container, Tooltip } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { DateTime } from "luxon";
import { ConcordiaTimelineIcon, DevelcodeTimelineIcon, DipsystemTimelineIcon, LumenaltaTimelineIcon, TestBoxTimelineIcon } from "./CompanyIcons";

// import { isMobile } from 'react-device-detect';
// TODO: Think about getting rid of this different view for mobile and desktop
const isMobile = true;

const MainCompanyTimelineItemV2 = ({
  companyName,
  CompanyIconComponent,
  startDateTime,
  endDateTime = null,
  rolesData = [],
}) => {
  return (
    <>
      <TimelineItem>
        {!isMobile ? (
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h5"
            fontWeight="bold"
          >
            {companyName}
          </TimelineOppositeContent>
        ) : (
          <TimelineOppositeContent sx={{ display: "none" }} />
        )}

        <TimelineSeparator>
          <TimelineDot color="inherit">
            <CompanyIconComponent width="48px" />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ m: "auto 0" }}>
          {isMobile && (
            <Typography variant="h5" fontWeight="bold">
              {companyName}
            </Typography>
          )}
          <TimePeriodLabel
            startDateTime={startDateTime}
            endDateTime={endDateTime}
          />
        </TimelineContent>
      </TimelineItem>
      {rolesData.map((roleData) => (
        <CompanyRoleTimelineItemV2
          sx={{ padding: 0, margin: 0 }}
          {...roleData}
        />
      ))}
    </>
  );
};

const TimePeriodLabel = ({ startDateTime, endDateTime = null }) => {
  const { t } = useTranslation();

  const now = DateTime.now();
  const startDateFormatted = startDateTime.toFormat("MMMM yyyy");
  const endDateFormatted = endDateTime
    ? endDateTime.toFormat("MMMM yyyy")
    : null;
  const duration = endDateTime
    ? endDateTime.diff(startDateTime, ["years", "months"]).toObject()
    : now.diff(startDateTime, ["years", "months"]).toObject();

  const years = duration && Math.floor(duration.years);
  const months = duration && Math.round(duration.months);

  let durationLabel = "";
  if (years > 0) {
    durationLabel += `${years} ${years === 1 ? t("year") : t("years")}`;
  }
  if (months > 0) {
    if (years > 0) durationLabel += " ";
    durationLabel += `${months} ${months === 1 ? t("month") : t("months")}`;
  }
  if (!durationLabel) {
    durationLabel = t("Less than a month");
  }

  return (
    <Tooltip title={durationLabel}>
      <i>
        <small>
          {startDateFormatted} - {endDateTime ? endDateFormatted : ""}
          {!endDateTime ? <b>{t("the moment")}</b> : ""}
        </small>
      </i>
    </Tooltip>
  );
};

const CompanyRoleTimelineItemV2 = ({
  roleName,
  CompanyIconComponent,
  descriptionTranslationKey,
  startDateTime = null,
  endDateTime = null,
  position,
}) => {
  const { t } = useTranslation();
  return (
    <TimelineItem
      position={position}
      sx={{ marginLeft: isMobile ? "27px" : 0 }}
    >
      {isMobile && <TimelineOppositeContent style={{ display: "none" }} />}
      <TimelineSeparator>
        <TimelineConnector style={{ backgroundColor: "#666666" }} />
        {!isMobile && (
          <>
            <TimelineDot color="inherit" sx={{ m: "auto 0" }}>
              <CompanyIconComponent />
            </TimelineDot>
            <TimelineConnector style={{ backgroundColor: "#666666" }} />
          </>
        )}
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography
          variant="h6"
          component="span"
          fontWeight="bold"
          sx={{ marginRight: "5px" }}
        >
          {roleName}
        </Typography>
        {startDateTime && endDateTime ? (
          <TimePeriodLabel
            startDateTime={startDateTime}
            endDateTime={endDateTime}
          />
        ) : (
          <></>
        )}

        <Typography fontSize={14}>
          <p
            style={{ margin: "1px" }}
            dangerouslySetInnerHTML={{ __html: t(descriptionTranslationKey) }}
          />
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

const MyCareerTimeline = () => {
  const { t } = useTranslation();
  return (
    <Container style={{ textAlign: "center", marginBottom: "28px" }}>
      <h1 id="my-career" style={{ margin: 0 }}>
        {t("My Career")}
      </h1>
      <Timeline position="right" sx={{ padding: 0, margin: 0 }}>
        {/* TestBox - main */}
        <MainCompanyTimelineItemV2
          companyName="TestBox"
          CompanyIconComponent={TestBoxTimelineIcon}
          startDateTime={DateTime.fromISO("2024-10-16")}
          rolesData={[
            {
              roleName: t("Lead engineer"),
              descriptionTranslationKey: "testbox-leadEngineer-description",
              // startDateTime: DateTime.fromISO("2020-07-01"),
              CompanyIconComponent: TestBoxTimelineIcon,
              position: "alternate-reverse",
            },
          ]}
        />

        {/* Lumenalta - main */}
        <MainCompanyTimelineItemV2
          companyName="Lumenalta (formerly Clevertech)"
          CompanyIconComponent={LumenaltaTimelineIcon}
          startDateTime={DateTime.fromISO("2021-09-01")}
          endDateTime={DateTime.fromISO("2024-10-16")}
          rolesData={[
            {
              roleName: t("Data engineer"),
              descriptionTranslationKey: "lumenalta-dataEngineer-description",
              startDateTime: DateTime.fromISO("2022-07-01"),
              endDateTime: DateTime.fromISO("2024-10-01"),
              CompanyIconComponent: LumenaltaTimelineIcon,
              position: "alternate-reverse",
            },
            {
              roleName: t("Python developer"),
              descriptionTranslationKey: "lumenalta-pythonDeveloper-description",
              startDateTime: DateTime.fromISO("2022-02-01"),
              endDateTime: DateTime.fromISO("2022-07-01"),
              CompanyIconComponent: LumenaltaTimelineIcon,
              position: "alternate",
            },
            {
              roleName: t("JavaScript fullstack developer"),
              descriptionTranslationKey: "lumenalta-javascriptFullstackDeveloper-description",
              startDateTime: DateTime.fromISO("2021-09-01"),
              endDateTime: DateTime.fromISO("2022-02-01"),
              CompanyIconComponent: LumenaltaTimelineIcon,
              position: "alternate-reverse",
            },
          ]}
        />

        {/* Develcode - main */}
        <MainCompanyTimelineItemV2
          companyName="Develcode"
          CompanyIconComponent={DevelcodeTimelineIcon}
          startDateTime={DateTime.fromISO("2021-01-01")}
          endDateTime={DateTime.fromISO("2021-09-16")}
          rolesData={[
            {
              roleName: t("Tech lead"),
              descriptionTranslationKey: "develcode-techLead-description",
              startDateTime: DateTime.fromISO("2021-07-01"),
              endDateTime: DateTime.fromISO("2021-09-16"),
              CompanyIconComponent: DevelcodeTimelineIcon,
              position: "alternate-reverse",
            },
            {
              roleName: t("Fullstack developer"),
              descriptionTranslationKey: "develcode-fullStackDeveloper-description",
              startDateTime: DateTime.fromISO("2021-01-01"),
              endDateTime: DateTime.fromISO("2021-07-01"),
              CompanyIconComponent: DevelcodeTimelineIcon,
              position: "alternate",
            },
          ]}
        />

        {/* Concordia - main */}
        <MainCompanyTimelineItemV2
          companyName="Concordia Labs"
          CompanyIconComponent={ConcordiaTimelineIcon}
          startDateTime={DateTime.fromISO("2020-07-01")}
          rolesData={[
            {
              roleName: t("Fullstack developer"),
              descriptionTranslationKey: "concordia-fullStackDeveloper-description",
              // startDateTime: DateTime.fromISO("2020-07-01"),
              CompanyIconComponent: ConcordiaTimelineIcon,
              position: "alternate",
            },
          ]}
        />

        {/* Dipsystem - main */}
        <MainCompanyTimelineItemV2
          companyName="Hapolo (DipSystem)"
          CompanyIconComponent={DipsystemTimelineIcon}
          startDateTime={DateTime.fromISO("2018-03-01")}
          endDateTime={DateTime.fromISO("2021-01-01")}
          rolesData={[
            {
              roleName: t("Fullstack developer"),
              descriptionTranslationKey: "dipsystem-fullStackDeveloper-description",
              // startDateTime: DateTime.fromISO('2018-03-01'),
              // endDateTime: DateTime.fromISO('2021-01-01'),
              CompanyIconComponent: DipsystemTimelineIcon,
              position: "alternate",
            },
          ]}
        />
      </Timeline>
    </Container>
  );
};

export default MyCareerTimeline;
