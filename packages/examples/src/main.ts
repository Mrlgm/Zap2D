// Import functions from core
import {MainModuleFactory} from "zap2d";

async function main() {
  const xx = await MainModuleFactory.default();
  // Test the add function
  const addResult = xx.add(5, 3);
  console.log(`Addition result: 5 + 3 = ${addResult}`);

  // Test the multiply function
  const multiplyResult = xx.multiply(5, 3);
  console.log(`Multiplication result: 5 * 3 = ${multiplyResult}`);

  // Display the results in the DOM
  const addResultElement = document.createElement("p");
  addResultElement.textContent = `Addition result from WebAssembly: 5 + 3 = ${addResult}`;
  addResultElement.style.fontWeight = "bold";
  addResultElement.style.color = "blue";
  document.body.appendChild(addResultElement);

  const multiplyResultElement = document.createElement("p");
  multiplyResultElement.textContent = `Multiplication result from WebAssembly: 5 * 3 = ${multiplyResult}`;
  multiplyResultElement.style.fontWeight = "bold";
  multiplyResultElement.style.color = "green";
  document.body.appendChild(multiplyResultElement);
}

main().catch(console.error);
