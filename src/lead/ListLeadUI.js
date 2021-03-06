import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import LeadUI from "./LeadUI";
import { CSVLink } from "react-csv";
import PropTypes from "prop-types";

export default function ListLeadUI({ leadList, loading = true, onLoad }) {
  const exportCSV = () => {
    const content = leadList
      .map((lead) => lead.firstName + "," + lead.email + "," + lead.interest)
      .join("\r\n");
    return content;
  };
  if (loading) {
    onLoad();
    return "Loading...";
  }
  return (
    <div className="lead-list">
      <Row>
        <Col md="12" className="buttons">
          <Button className="reload" onClick={onLoad}>
            Reload
          </Button>
          <CSVLink data={exportCSV()} filename={"kk_lead_list.csv"}>
            <Button className="export" onClick={exportCSV}>
              Export to CSV
            </Button>
          </CSVLink>
        </Col>
      </Row>
      <Row className="header">
        <Col md="4">First Name</Col>
        <Col md="4">Email address</Col>
        <Col md="4">Interest</Col>
      </Row>
      {leadList.map((lead, key) => (
        <LeadUI {...lead} key={key} />
      ))}
    </div>
  );
}

ListLeadUI.propTypes = {
  leadList: PropTypes.array,
  loading: PropTypes.bool,
  onLoad: PropTypes.func,
};
