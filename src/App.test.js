import App from "./App";
import { renderAct } from "./render";
import { screen } from "@testing-library/react";

it("renders without crashing", async () => {
  await renderAct(<App />);

  screen.getByText("Hello world!");
  expect(2 + 2).toBe(5);
});
