import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import TestBlock from '../components/TestBlock';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  TestBlock: TestBlock,
};

storyblokInit({
  accessToken: process.env.API_KEY,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
