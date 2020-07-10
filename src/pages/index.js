import React from "react"
import emoji from "react-easy-emoji"
import { Link } from "gatsby"
import { Image, CardColumns, Card, Row, Col } from "react-bootstrap"

import Layout from "src/components/Layout"
import Footer from "src/components/Footer"
import InLi from "src/components/InLi"

const Index = () => (
  <Layout pageTitle="Welcome">
    <Row>
      <WhoAreWe />
      <ImportantPages />
    </Row>
    <Media />
    <MoreInformation />
    <Footer>
      Built with{" "}
      <a href="https://github.com/offthedial/site">{emoji("\u2764")}</a> &{" "}
      <a href="https://www.gatsbyjs.org/">Gatsby</a>. This website is currently
      in beta, more features are to come. Stay tuned!
    </Footer>
  </Layout>
)

const WhoAreWe = () => (
  <Col lg="6">
    <h1>Who are we?</h1>
    <p>
      Off the Dial is a unique tournament organisation for Splatoon 2, dedicated
      to providing fresh tournament opportunities for free agents and teams
      alike.
    </p>
    <p>
      Our flagship tournament, It's Dangerous to go Alone, is a free agent
      tournament focused on creating balanced teams, and being accessible to
      everyone. For more information, select "It's Dangerous to go Alone" at the
      top.
    </p>
    <p>
      We also run a unique, Off the Dial exclusive, free agent <i>and</i> team
      tournament called Weakest Link. Originally an experiment, this unique
      tournament provides coaching opportunities for free agents, and teaching
      opportunities for teams. For more information, select "Weakest Link" at
      the top.
    </p>
  </Col>
)

const ImportantPages = () => (
  <Col>
    <br />
    <h2>Important Pages</h2>
    <CardColumns className="mb-3" style={{ columnCount: 1 }}>
      <CardPage title="FAQ" link="faq">
        We get asked a lot of questions, so a FAQ necessary. We highly recommend
        you check out this page.
      </CardPage>
      <CardPage title="Posts" link="posts">
        Stay up to date with the latest blog posts, news, and updates on
        everything Off the Dial!
      </CardPage>
    </CardColumns>
  </Col>
)

const Media = () => (
  <>
    <h2 id="media">Media</h2>
    <blockquote>
      <InLi link="twitch">
        <h3>Twitch</h3>
      </InLi>
      <InLi link="discord">
        <h3>Discord</h3>
      </InLi>
      <InLi link="twitter">
        <h3>Twitter</h3>
      </InLi>
      <InLi link="youtube">
        <h3>YouTube</h3>
      </InLi>
      <InLi link="patreon">
        <h3>Patreon</h3>
      </InLi>
      <InLi link="github">
        <h3>Github</h3>
      </InLi>
    </blockquote>
  </>
)

const MoreInformation = () => (
  <>
    <h2>More Information</h2>
    <Row>
      <CardPageOther title="Off the Dial Bot" link="bot">
        Our server has a custom Off the Dial Bot used for tournament running
        assistance. If you would like to know more, we have a page dedicated to
        about the bot right here!
      </CardPageOther>
      <CardPageOther title="Community" link="community">
        Off the Dial is thankful to have such an awesome team and community! And
        you can check each one of them out right here!
      </CardPageOther>
      <CardPageOther title="Assets" link="assets">
        Many of our assets are public and free. Assets include logos and banners
        related to Off the Dial and its tournaments. You can find them all right
        here!
      </CardPageOther>
    </Row>
  </>
)

const CardPage = ({ title, link, children }) => (
  <Card>
    <Card.Body>
      <Card.Title>
        <h3>
          <Link to={link}>{title}</Link>
        </h3>
      </Card.Title>
      <Card.Text>{children}</Card.Text>
    </Card.Body>
  </Card>
)

const CardPageOther = ({ title, link, children }) => (
  <Col xl="4" md="6" className="mb-3">
    <Card>
      <Card.Body>
        <Card.Title>
          <h3>
            <Link to={link}>{title}</Link>
          </h3>
        </Card.Title>
        <blockquote style={{ fontSize: "88%" }}>
          <Card.Text>{children}</Card.Text>
        </blockquote>
      </Card.Body>
    </Card>
  </Col>
)

export default Index
