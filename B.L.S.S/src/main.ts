import "./style.css";
import { show } from "./node/node";
import { formValidation } from "./modules/events/evn";

const run = () => {
  show()
  formValidation()
}

run()