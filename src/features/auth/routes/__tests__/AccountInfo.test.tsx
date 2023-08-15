import { describe, it, afterEach, expect } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AccountInfo } from "../AccountInfo";

describe("<AccountInfo />", () => {
  afterEach(cleanup);
  it("Should render component", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AccountInfo />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(
      "Account Info"
    );
  });
  it("Should highlight at least one card", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <AccountInfo />
      </MemoryRouter>
    );
    const first = getByTestId("1-1");
    const second = getByTestId("2-10");
    const third = getByTestId("10-50");
    const fourth = getByTestId("50+");

    expect(
      first.classList.contains("active") ||
        second.classList.contains("active") ||
        third.classList.contains("active") ||
        fourth.classList.contains("active")
    ).toBeTruthy();
  });
  it("Should be selected an account plan by default", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <AccountInfo />
      </MemoryRouter>
    );

    const companyAccount: HTMLInputElement = getByTestId(
      "Company Account"
    ) as HTMLInputElement;
    const developerAccount: HTMLInputElement = getByTestId(
      "Developer Account"
    ) as HTMLInputElement;

    const testingAccount: HTMLInputElement = getByTestId(
      "Testing Account"
    ) as HTMLInputElement;
    expect(
      companyAccount.checked ||
        developerAccount.checked ||
        testingAccount.checked
    ).toBeTruthy();
  });
  it("Should display an error if Account Name's input is empty and I press 'Continue'", () => {
    const { getByTestId, getByRole, getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <AccountInfo />
      </MemoryRouter>
    );
    const nextButton = getByTestId("actions-next-button");
    fireEvent.click(nextButton);

    const alert = getByRole("alert");
    const errorMessage = getByText("Account name is required");
    expect(nextButton).toBeDefined();
    expect(alert).toBeDefined();
    expect(errorMessage).to.exist;
  });
  it("Should not render any alert", async () => {
    const { container, getByTestId, queryByRole } = render(
      <MemoryRouter initialEntries={["/"]}>
        <AccountInfo />
      </MemoryRouter>
    );
    const input = container.querySelector(
      `input[type="text"]`
    ) as HTMLInputElement;
    expect(input).toBeDefined();
    fireEvent.change(input, { target: { value: "Some Account Name" } });

    const nextButton = getByTestId("actions-next-button");
    expect(nextButton).toBeDefined();
    fireEvent.click(nextButton);

    const alert = queryByRole("alert");

    expect(alert).toBeNull();
  });
});
