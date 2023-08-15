import { describe, it, afterEach, expect } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { BusinessDetails } from "../BusinessDetails";

describe("<BusinessDetails />", () => {
  afterEach(cleanup);
  it("Should render component", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <BusinessDetails />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(
      "Business Details"
    );
  });
  it("Should display an error if Business Name is empty and I press 'Continue'", () => {
    const { getByTestId, getByRole, getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <BusinessDetails />
      </MemoryRouter>
    );
    const input = getByTestId("business-name");

    expect(input).toBeDefined();
    fireEvent.change(input, { target: { value: "" } });

    const nextButton = getByTestId("actions-next-button");
    fireEvent.click(nextButton);

    const alert = getByRole("alert");
    const errorMessage = getByText("Business Name required");
    expect(nextButton).toBeDefined();
    expect(alert).toBeDefined();
    expect(errorMessage).to.exist;
  });
  it("Should display an error if Shortended Descriptor is empty and I press 'Continue'", () => {
    const { getByTestId, getByRole, getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <BusinessDetails />
      </MemoryRouter>
    );
    const input = getByTestId("shortended-descriptor");

    expect(input).toBeDefined();
    fireEvent.change(input, { target: { value: "" } });

    const nextButton = getByTestId("actions-next-button");
    fireEvent.click(nextButton);

    const alert = getByRole("alert");
    const errorMessage = getByText("Shortended Descriptor required");
    expect(nextButton).toBeDefined();
    expect(alert).toBeDefined();
    expect(errorMessage).to.exist;
  });
  it("Should display an error if Contact Email is empty and I press 'Continue'", () => {
    const { getByTestId, getByRole, getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <BusinessDetails />
      </MemoryRouter>
    );
    const input = getByTestId("contact-email");

    expect(input).toBeDefined();
    fireEvent.change(input, { target: { value: "" } });

    const nextButton = getByTestId("actions-next-button");
    fireEvent.click(nextButton);

    const alert = getByRole("alert");
    const errorMessage = getByText("Email required");
    expect(nextButton).toBeDefined();
    expect(alert).toBeDefined();
    expect(errorMessage).to.exist;
  });
  it("Should not display any error by default", () => {
    const { getByTestId, queryByRole } = render(
      <MemoryRouter initialEntries={["/"]}>
        <BusinessDetails />
      </MemoryRouter>
    );

    const nextButton = getByTestId("actions-next-button");
    fireEvent.click(nextButton);

    const alert = queryByRole("alert");

    expect(nextButton).toBeDefined();
    expect(alert).toBeNull();
  });
});
