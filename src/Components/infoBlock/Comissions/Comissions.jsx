import Table from "react-bootstrap/Table";
import { comissionTableHeader, comissionTableBody } from "../../../Data/Data";
import "./Comissions.css";

function Comissions() {
  return (
    <div className="comission">
    <Table striped bordered hover>
      <thead>
        <tr>
          {comissionTableHeader.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {comissionTableBody.map((item, index) => (
          <tr key={index}>
            <td>{item.service}</td>
            <td>{item.commission}</td>
            <td>{item.descr}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
}

export default Comissions;
