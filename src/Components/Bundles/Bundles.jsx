import { Accordion } from "react-bootstrap";
import { bundles } from "../../Data/Data";
import "./Bundles.css";

function Bundles() {
  return (
    <div>
      <Accordion eventKey="0">
        {bundles.map((item, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>
              <div className="bundlesAccrodionHeader">
                <div>{item.name}</div> <div className="fw-600">{item.spread}%</div>
              </div>
            </Accordion.Header>
            <Accordion.Body>{item.descr}</Accordion.Body>
          </Accordion.Item>
        ))}
        {/* 
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>*/}
      </Accordion>
    </div>
  );
}

export default Bundles;
