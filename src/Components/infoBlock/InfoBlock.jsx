import Comissions from "./Comissions/Comissions";
import Currency from "./Currency/Currency";
import "./InfoBlock.css";

function InfoBlock() {
  return (
    <div className="wrapper">
      <Currency />
      <Comissions />
    </div>
  );
}

export default InfoBlock;
