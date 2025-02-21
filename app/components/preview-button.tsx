interface PreviewButtonProps {
    children?: React.ReactNode;
    textColor: string;
    bgColor: string;
    key?: React.Key;
}

export default function PreviewButton({ children, textColor, bgColor }: PreviewButtonProps) {
    const style = {
      backgroundColor: bgColor,
      color: textColor,

      borderWidth: "1px",
      borderColor: "rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      boxShadow: "0 0 1px #00000014,0 1px 4px #0000001f",
      fontWeight: "bold",
      margin: "10px",
      padding: "12px",
    }

    return (
      <button style={style}>
        { children }
      </button>
    );
  }
  