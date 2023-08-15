import { describe, it, expect, afterEach } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { AccountType } from "../AccountType";
import { MemoryRouter } from "react-router-dom";

describe("<AccountType />", () => {
  afterEach(cleanup);
  it("Should render component", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AccountType />
      </MemoryRouter>
    );
    screen.getByText("Choose Account Type");
  });
  it("Should render Personal Account card", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <AccountType />
      </MemoryRouter>
    );
    const personalAccountCard = getByTestId("personal-account");

    expect(personalAccountCard).toBeDefined();
  });
  it("Should render Corporate Account card", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <AccountType />
      </MemoryRouter>
    );
    const corporateAccountCard = getByTestId("coporate-account");

    expect(corporateAccountCard).toBeDefined();
  });
  it("Should highlight at least one card", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <AccountType />
      </MemoryRouter>
    );
    const personalAccountCard = getByTestId("personal-account");
    const corporateAccountCard = getByTestId("coporate-account");

    expect(personalAccountCard).toBeDefined();
    expect(corporateAccountCard).toBeDefined();

    expect(
      personalAccountCard.classList.contains("active") ||
        corporateAccountCard.classList.contains("active")
    ).toBeTruthy();
  });
  it("Should highlight at least one card", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <AccountType />
      </MemoryRouter>
    );

    const corporateAccountCard = getByTestId("coporate-account");

    expect(corporateAccountCard).toBeDefined();
    fireEvent.click(corporateAccountCard);
    expect(corporateAccountCard.classList.contains("active")).toBeTruthy();
  });
});
