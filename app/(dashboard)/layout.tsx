import Header from "@/components/header";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="px-4 lg:px-8">{children}</main>
    </>
  );
}
