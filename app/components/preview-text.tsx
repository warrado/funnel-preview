import { Property } from 'csstype';

interface PreviewTextProps {
  children?: React.ReactNode;
  textColor: string;
  align: string;
  key?: React.Key;
}

export default function PreviewText({ children, textColor, align }: PreviewTextProps) {
  const style = {
    color: textColor,
    // This is neede for a sole purpose of making TS happy
    // I guess we could use some validation here (probably use our awesome
    // JSON schema for it), but hey, this is just a demo ;)
    textAlign: align as Property.TextAlign,

    fontWeight: "bold",
    padding: "12px 0 12px 0"
  }

  return (
    <p style={style}>{ children }</p>
  );
}
