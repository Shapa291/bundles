import Table from "react-bootstrap/Table";
import { cuurencbyTableBody, cuurencbyTableHeader } from "../../../Data/Data";
import "./Currency.css";

function Currency() {
  return (
    <div className="currency">
      <Table striped bordered hover>
        <thead>
          <tr>
            {cuurencbyTableHeader.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cuurencbyTableBody.map((item, index) => (
            <tr key={index}>
              <td>{item.service}</td>
              <td>{item.pair}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Currency;
