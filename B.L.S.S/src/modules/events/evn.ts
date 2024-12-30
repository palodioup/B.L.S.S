import { btn } from "../modules";
import { validChk } from "../modules";

export const formValidation = () => {
  btn.addEventListener("click", () => {
     validChk.innerHTML = `
       <div class="loginDiv">
              <label>Name:</label>
               <input type="text" class="loginInput"/>
       </div>
     `
  })
}