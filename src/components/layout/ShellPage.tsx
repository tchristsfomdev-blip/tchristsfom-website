import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

type ShellPageProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function ShellPage({ title, description, children }: ShellPageProps) {
  return (
    <section className="shell-page">
      <Container>
        <div className="shell-page__mast">
          <h1 className="shell-page__title">{title}</h1>
          <p className="shell-page__lead">{description}</p>
        </div>
        {children ? <div className="shell-page__body">{children}</div> : null}
      </Container>
    </section>
  );
}

export function shellMetadata(title: string, description: string): Metadata {
  return { title, description };
}
