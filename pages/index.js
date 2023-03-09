import Link from "../src/components/Link";

function Title({ children }) {
  return <h1>{children}</h1>;
}

export default function HomePage() {
  return (
    <div>
      <Title>Alura Cases</Title>
      <Link href="/faq">Ir para o FAQ</Link>
    </div>
  );
}
