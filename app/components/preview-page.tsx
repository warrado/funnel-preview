interface PreviewPageProps {
  children?: React.ReactNode;
  key?: React.Key;
}

export default function PreviewPage({ children }: PreviewPageProps) {
  return (
    <div className="overflow-auto w-full h-full text-center">{children}</div>
  );
}
