// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add existing head content here */}
          <link
            rel='shortcut icon'
            type='image/x-icon'
            href='static/img/dp-logo.png'
          />
          {/* <!-- plugin CSS --> */}
          <link
            href='static/plugin/bootstrap/css/bootstrap.min.css'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            href='node_modules/react-github-contribution-calendar/default.css'
            type='text/css'
          />
          <link
            href='static/plugin/font-awesome/css/all.min.css'
            rel='stylesheet'
          />
          <link href='static/plugin/et-line/style.css' rel='stylesheet' />
          <link
            href='static/plugin/themify-icons/themify-icons.css'
            rel='stylesheet'
          />
          <link
            href='static/plugin/owl-carousel/css/owl.carousel.min.css'
            rel='stylesheet'
          />
          <link
            href='static/plugin/magnific/magnific-popup.css'
            rel='stylesheet'
          />
          <link
            href='static/plugin/scroll/jquery.mCustomScrollbar.min.css'
            rel='stylesheet'
          />
          {/* <!-- theme css --> */}
          <link href='static/css/style.css' rel='stylesheet' />

          <link
            href='https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
            rel='stylesheet'
          />
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          {/* Add custom font imports here */}
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
            rel='stylesheet'
          />
          {/* End existing head content */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
