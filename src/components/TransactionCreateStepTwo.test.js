import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

// UNIT Tests
// test("on initial render, the pay button is disabled", async () => {
//   render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
//   expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
// });

// test("if an amount and note is entered, the pay button becomes enebled", async () => {
//   render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
//   userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
//   userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

//   expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
// });

//Integrated test
test("on initial render, the pay button is disabled and if an amount and note is entered, the pay button becomes enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  // First test
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();

  //Second test
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
