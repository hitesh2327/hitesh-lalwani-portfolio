import LegalPage, { CONTACT_EMAIL, LegalSection } from "../components/LegalPage";

const PrivacyPage = () => (
  <LegalPage eyebrow="codexone-yt" title="Privacy Policy" lastUpdated="September 27, 2026">
    <LegalSection heading="Overview">
      <p>
        <strong>codexone-yt</strong> is a private automation tool built and operated by Hitesh
        Lalwani. Its only purpose is to upload videos to Hitesh Lalwani's own YouTube channel
        using the YouTube Data API. It is not offered to the public, and the operator is its
        only user.
      </p>
    </LegalSection>

    <LegalSection heading="Information we collect">
      <p>
        codexone-yt does not collect, store, sell, or share personal information from anyone.
        There are no user accounts, sign-up forms, analytics, cookies, or tracking.
      </p>
    </LegalSection>

    <LegalSection heading="Use of Google / YouTube data">
      <p>
        The app uses Google OAuth to authorize access to the operator's own YouTube account,
        and requests only the permission needed to upload videos. It uses this access
        solely to:
      </p>
      <ul>
        <li>Upload videos, titles, descriptions, and related metadata to the operator's channel.</li>
      </ul>
      <p>
        The OAuth credentials are kept privately in the operator's own environment and are used
        only to authenticate those uploads. No YouTube or Google user data is sold, transferred to
        third parties, or used for advertising. The app's use of information received from Google
        APIs follows the{" "}
        <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements.
      </p>
    </LegalSection>

    <LegalSection heading="YouTube API Services">
      <p>
        codexone-yt uses YouTube API Services. By using it, you are also bound by the{" "}
        <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">
          YouTube Terms of Service
        </a>{" "}
        and the{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          Google Privacy Policy
        </a>
        .
      </p>
    </LegalSection>

    <LegalSection heading="Revoking access">
      <p>
        Access granted to codexone-yt can be revoked at any time from the{" "}
        <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
          Google Account permissions page
        </a>
        .
      </p>
    </LegalSection>

    <LegalSection heading="Changes and contact">
      <p>
        This policy may be updated occasionally; the date above shows the latest revision.
        Questions can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalSection>
  </LegalPage>
);

export default PrivacyPage;
