import StudentAssignmentNavtabs from "./StudentAssignmentNavtabs.jsx";

function StudentAssignments() {
  return (
    <div className="container">
      <div className="row my-3">
        <h1 style={{ color: "white", textAlign: "center" }}>Assignments</h1>
      </div>
      <div className="row">
        <StudentAssignmentNavtabs activeTab="pending" />
      </div>
    </div>
  );
}

export default StudentAssignments;
