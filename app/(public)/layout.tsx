import AppShell from "@/components/layout/AppShell";
import Transaction from "@/components/layout/Transaction";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Transaction />
      <AppShell>{children}</AppShell>
    </>
  );
}
