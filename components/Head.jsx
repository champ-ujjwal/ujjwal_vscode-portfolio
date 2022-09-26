import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Ujjwal Kumar is an avid web developer and blockchain enthusiast building websites and decentralized application you'd love to use"
      />
      <meta
        name="keywords"
        content="Ujjwal Kumar, Ujjwal, Ujjwal singh, web developer portfolio, Ujjwal web developer, Ujjwal blockchain developer, blockchain, Ujjwal Kumar portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Ujjwal Kumar's Portfolio" />
      <meta
        property="og:description"
        content="A Web developer building websites that you'd like to use."
      />
      <meta property="og:url" content="https://ujjwal-vscode-portfolio-ih89.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Ujjwal Kumar',
};
