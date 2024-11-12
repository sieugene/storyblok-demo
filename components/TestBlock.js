import { storyblokEditable } from "@storyblok/react";

const TestBlock = ({ blok }) => (
  <div
    className="test_block"
    {...storyblokEditable(blok)}
    style={{ border: "3px solid silver" }}
  >
    {blok.text}
    <br />
    {blok.description}
  </div>
);

export default TestBlock;
