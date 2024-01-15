import { ImageProps, unstable_getImgProps as getImgProps } from "next/image";
import { forwardRef } from "react";

/**
 * Represents a custom Source component that extends the JSX.IntrinsicElements["source"] type
 * and includes specific props from the ImageProps type.
 */
type SourceProps = Omit<JSX.IntrinsicElements["source"], "srcSet" | "src"> &
  Pick<ImageProps, "src" | "loader" | "unoptimized" | "quality">;

/**
 * A forwardRef component that renders a <source> element with the provided props.
 * It uses the getImgProps function from next/image to generate the srcSet attribute.
 *
 * @param src - The source URL of the image.
 * @param loader - The loader function for the image.
 * @param unoptimized - Whether the image should be unoptimized.
 * @param quality - The quality of the image.
 * @param rest - Additional props for the <source> element.
 * @param ref - The ref for the <source> element.
 * @returns A <source> element with the generated srcSet attribute.
 * @see https://github.com/vercel/next.js/discussions/25393#discussioncomment-6946462
 */
export const Source = forwardRef<HTMLSourceElement, SourceProps>(
  function Source({ src, loader, unoptimized, quality, ...rest }, ref) {
    const {
      props: { srcSet },
    } = getImgProps({ src, loader, unoptimized, quality, fill: true, alt: "" });

    return <source {...rest} srcSet={srcSet} ref={ref} />;
  }
);
