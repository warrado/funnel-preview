// ID is optional e.g. in the lists (as there is a wrapper <div> around the image)
interface PreviewImageProps {
  id?: string;
  src: string;
  alt: string;
  key?: React.Key;
}

export default function PreviewImage({ id, src, alt }: PreviewImageProps) {
  /* I'm not happy we're using plain, old <img>, but I find it hard
     to style nextjs' <Image> component when displaying customer-supplied
     images.
     I guess we could use `useLayoutEffect` to set the dimensions of the image,
     but at the moment it seems like YAGNI.
  */ 
  return (
    <img
      key={id}
      src={src}
      alt={alt}
      style={{
        width: "80%",
        borderRadius: "16px",
      }}
    />
  );
}
