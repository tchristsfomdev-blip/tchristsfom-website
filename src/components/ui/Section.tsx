import { Container } from "@/components/ui/Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  labelledBy?: string;
};

export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  labelledBy,
}: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={className}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
