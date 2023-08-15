import { describe, it, afterEach, expect } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { BillingDetails } from "../BillingDetails";

describe("<BillingDetails />", () => {
  afterEach(cleanup);
  it("Should render component", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <BillingDetails />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(
      "Billing Details"
    );
  });
  it("Should display an error if Name On Card is empty and I press 'Continue'", () => {
    const { getByTestId, getByRole, getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <BillingDetails />
      </MemoryRouter>
    );
    const input = getByTestId("name-on-card");
    const inputCVV = getByTestId("cvv");
    expect(input).toBeDefined();
    expect(inputCVV).toBeDefined();
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.change(inputCVV, { target: { value: "123" } });

    const nextButton = getByTestId("actions-next-button");
    fireEvent.click(nextButton);

    const alert = getByRole("alert");
    const errorMessage = getByText("Name on card is required");
    expect(nextButton).toBeDefined();
    expect(alert).toBeDefined();
    expect(errorMessage).to.exist;
  });
  it("Should display an error if Card Number is empty and I press 'Continue'", () => {
    const { getByTestId, getByRole, getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <BillingDetails />
      </MemoryRouter>
    );
    const input = getByTestId("card-number");
    const inputCVV = getByTestId("cvv");
    expect(input).toBeDefined();
    expect(inputCVV).toBeDefined();
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.change(inputCVV, { target: { value: "123" } });

    const nextButton = getByTestId("actions-next-button");
    fireEvent.click(nextButton);

    const alert = getByRole("alert");
    const errorMessage = getByText("Card number is required");
    expect(nextButton).toBeDefined();
    expect(alert).toBeDefined();
    expect(errorMessage).to.exist;
  });
  it("Should display an error if CVV is empty and I press 'Continue'", () => {
    const { getByTestId, getByRole, getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <BillingDetails />
      </MemoryRouter>
    );

    const nextButton = getByTestId("actions-next-button");
    fireEvent.click(nextButton);

    const alert = getByRole("alert");
    const errorMessage = getByText("CVV is required");
    expect(nextButton).toBeDefined();
    expect(alert).toBeDefined();
    expect(errorMessage).to.exist;
  });
  it("Should not display any error", () => {
    const { getByTestId, queryByRole } = render(
      <MemoryRouter initialEntries={["/"]}>
        <BillingDetails />
      </MemoryRouter>
    );
    const input = getByTestId("cvv");
    expect(input).toBeDefined();
    fireEvent.change(input, { target: { value: "123" } });
    const nextButton = getByTestId("actions-next-button");
    fireEvent.click(nextButton);

    const alert = queryByRole("alert");
    expect(nextButton).toBeDefined();
    expect(alert).toBeNull();
  });
});
