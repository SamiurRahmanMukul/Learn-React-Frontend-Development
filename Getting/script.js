/*Title: Learn React Fundamental
  Description: Comparison React Vs Vanilla JavaScript
  Author: Md. Samiur Rahman (Mukul) 
  Website: http://www.SamiurRahmanMukul.epizy.com
  Github: https://www.github.com/SamiurRahmanMukul
  Email: example2022@gmail.com [FAKE EMAIL]
  Date: 01/12/2021 */

let number = 0;

const display = document.querySelector("#display");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  number++;
  display.textContent = number;
});
