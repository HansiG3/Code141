import { Nav, Tab } from "react-bootstrap";
import { useState } from "react";

function StudentAssignmentNavtabs({ activeTab }) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const dummyAssignments = {
    pending: ["Cpp Homework", "Js Project"],
    missed: ["Python Assignment"],
    submitted: ["c# Quiz", "React Notes"],
  };

  return (
    <Tab.Container defaultActiveKey={activeTab}>
      <Nav
        variant="tabs"
        defaultActiveKey={activeTab}
        fill
        onSelect={(tab) => setCurrentTab(tab)}
      >
        <Nav.Item>
          <Nav.Link eventKey="pending">Pending</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="missed">Missed</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="submitted">Submitted</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="pending" style={{ color: "white" }}>
          <h4>Pending Assignments</h4>
          <ul>
            {dummyAssignments.pending.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Tab.Pane>

        <Tab.Pane eventKey="missed" style={{ color: "white" }}>
          <h4>Missed Assignments</h4>
          <ul>
            {dummyAssignments.missed.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Tab.Pane>

        <Tab.Pane eventKey="submitted" style={{ color: "white" }}>
          <h4>Submitted Assignments</h4>
          <ul>
            {dummyAssignments.submitted.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}

export default StudentAssignmentNavtabs;
