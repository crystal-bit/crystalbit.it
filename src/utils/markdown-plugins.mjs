// https://docs.astro.build/en/guides/markdown-content/#example-calculate-reading-time

import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}

export function excerpt() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    data.astro.frontmatter.excerpt = textOnPage.substring(0, 150) + "...";
  };
}
