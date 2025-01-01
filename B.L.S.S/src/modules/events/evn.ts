import { btn } from "../modules";
import { validChk } from "../modules";

export const formValidation = () => {
  let label = document.createElement("label")
  label.innerHTML = "Name:"
  let input = document.createElement("input")
  input.className = "loginInput"
  input.id = "name"
  btn.addEventListener("click", () => {
    validChk.appendChild(label)
    validChk.appendChild(input)
  
  });
};
