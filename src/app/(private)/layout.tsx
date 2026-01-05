export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Add authentication check here
  // const { isAuthenticated, isLoading } = useAuth();
  // if (isLoading) return <LoadingSpinner />;
  // if (!isAuthenticated) redirect('/login');

  return <>{children}</>;
}
