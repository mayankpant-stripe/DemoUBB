interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  // UBB-only layout - no additional headers/footers needed
  return <>{children}</>;
} 