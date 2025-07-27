import { auth } from "@clerk/nextjs/server";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  return (
      <div className="flex min-h-screen flex-col">
        {children}
      </div>
  );
}
