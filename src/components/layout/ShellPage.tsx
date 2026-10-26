import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

type ShellPageProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function ShellPage({ title, description, children }: ShellPageProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <h1 className="max-w-[20ch]">{title}</h1>
        <p className="mt-6 max-w-[68ch]">{description}</p>
        {children}
      </Container>
    </section>
  );
}

export function shellMetadata(title: string, description: string): Metadata {
  return { title, description };
}
