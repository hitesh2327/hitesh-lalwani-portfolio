import LegalPage, { CONTACT_EMAIL, LegalSection } from "../components/LegalPage";

const TermsPage = () => (
  <LegalPage eyebrow="codexone-yt" title="Terms of Service" lastUpdated="September 27, 2026">
    <LegalSection heading="About the app">
      <p>
        <strong>codexone-yt</strong> is a personal, non-commercial automation tool owned and
        operated by Hitesh Lalwani. It uploads videos to Hitesh Lalwani's own YouTube channel
        through the YouTube Data API. It is not a public service, and no one other than the
        operator is authorized to use it.
      </p>
    </LegalSection>

    <LegalSection heading="YouTube Terms">
      <p>
        codexone-yt uses YouTube API Services. All use of the app is subject to the{" "}
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

    <LegalSection heading="Content">
      <p>
        The operator is solely responsible for the videos and metadata uploaded through the app
        and for making sure they follow YouTube's Community Guidelines and applicable law.
      </p>
    </LegalSection>

    <LegalSection heading="Data">
      <p>
        The app stores no user data. See the <a href="/privacy/">Privacy Policy</a> for details
        on how Google OAuth access is used.
      </p>
    </LegalSection>

    <LegalSection heading="No warranty">
      <p>
        The app is provided "as is", without warranties of any kind. The operator is not liable
        for any damages arising from its use.
      </p>
    </LegalSection>

    <LegalSection heading="Changes and contact">
      <p>
        These terms may be updated occasionally; the date above shows the latest revision.
        Questions can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalSection>
  </LegalPage>
);

export default TermsPage;
