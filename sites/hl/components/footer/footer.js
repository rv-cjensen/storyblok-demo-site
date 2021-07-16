import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <ul className={styles.menu}>
          <li>
            <a
              href='https://www.healthline.com/health/privacy-policy?ref=footer'
              target='_blank'
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href='https://www.healthline.com/health/terms-of-use?ref=footer'
              target='_blank'
              rel="noreferrer"
            >
              Terms of Use
            </a>
          </li>
          <li>
            <a
              href='https://privacyportal-cdn.onetrust.com/dsarwebform/79ba7c84-ebc2-4740-8d11-bf1cc4501e59/6bfe1af7-9a77-4c12-900e-3b808accdb22.html'
              target='_blank'
              rel="noreferrer"
            >
              Do Not Sell My Info
            </a>
          </li>
          <li>
            <a
              href='https://www.healthline.com/privacy-settings'
              target='_blank'
              rel="noreferrer"
            >
              Privacy Settings
            </a>
          </li>
        </ul>
        <p>© 2005–2021 Healthline Media a Red Ventures Company. All rights reserved. Our website services, content, and products are for informational purposes only. Healthline Media does not provide medical advice, diagnosis, or treatment. <a href="https://www.healthline.com/additional-information" target="_blank" rel="noreferrer">See additional information</a>.</p>
      </div>
    </footer>
  );
}
