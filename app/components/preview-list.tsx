import PreviewImage from "./preview-image";

interface PreviewListProps {
  children?: React.ReactNode;
  key?: React.Key;
}

export default function PreviewList({ children }: PreviewListProps) {
  return <div className="grid grid-cols-3 gap-4 p-3 mt-2 mb-2">{children}</div>;
}

interface PreviewListItemProps {
  title: string;
  description: string;
  src: string;
  key?: React.Key;
}

export function PreviewListItem({
  title,
  description,
  src,
}: PreviewListItemProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <PreviewImage
        src={src}
        alt={title}
      />
      <p className="text-sm">{description}</p>
    </div>
  );
}
