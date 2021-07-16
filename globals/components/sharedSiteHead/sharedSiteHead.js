import Head from 'next/head';
import PropTypes from 'prop-types';
import cohesionSnippet from '@globals/constants/cohesionSnippet';
import oneTrustKeys from '@globals/constants/oneTrustKeys';

/**
 * Return the correct <Head /> information based on the site name you pass in.
 * @param {string} site = the name of the site 'hl', 'psy', 'mnt', 'gr8'
 * @returns the <Head> for the specific site you pass in
 */
export default function SharedSiteHead({ site }) {
  return (
    <>
      <Head>
        {/* Cohesion */}
        <script dangerouslySetInnerHTML={{ __html: `${cohesionSnippet(site)}` }} />
        {/* END: Cohesion */}

        {/* OneTrust only in production */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <script
              src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
              type="text/javascript"
              charSet="UTF-8"
              data-domain-script={`${oneTrustKeys[site][process.env.NODE_ENV]}`}
            />
            <script dangerouslySetInnerHTML={{ __html: 'function OptanonWrapper() {}' }} />
          </>
          )}
        {/* END: OneTrust */}
      </Head>
    </>
  );
}

SharedSiteHead.propTypes = {
  site: PropTypes.string,
};
