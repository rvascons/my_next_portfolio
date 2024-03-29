import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";

import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-5 gap-y-6 md:grid-cols-[2fr,1fr] text-slate-500">
        <Heading size="xl" className="col-start-1">
          {slice.primary.heading}
        </Heading>
        <Avatar
          image={slice.primary.avatar}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
      <div className="prose prose-xl prose-slate prose-invert min-w-full text-justify md:my-8">
        <PrismicRichText field={slice.primary.body} />
      </div>
      <div className="w-full pt-5 flex justify-center md:justify-end">
        <Button
          linkField={slice.primary.button_link}
          label={slice.primary.button_text}
        />
      </div>
    </Bounded>
  );
};

export default Biography;
