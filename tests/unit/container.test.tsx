import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Container } from "@/components/ui/Container";

describe("Container", () => {
  it("renders its children", () => {
    render(<Container>Academy</Container>);
    expect(screen.getByText("Academy")).toBeInTheDocument();
  });
});
