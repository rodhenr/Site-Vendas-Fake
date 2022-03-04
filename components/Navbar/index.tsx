import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function index() {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faBars} />
        <h1>PC Shop</h1>
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
      <input type="text" />
    </div>
  );
}

export default index;
