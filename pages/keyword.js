import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import findKey from 'lodash/findKey';
import { getTrending } from '../shared/lib/service.Canillitapp';

import Layout from '../shared/components/Layout';
import Meta from '../shared/components/Meta';
import Row from '../shared/components/Row';
import Breadcrumb from '../shared/components/Breadcrumb';
import Container from '../shared/components/Container';
import ReactionsModal from '../shared/components/ReactionsModal';

ReactGA.initialize('UA-112879486-1');

export default class Keyword extends Component {
  static propTypes = {
    stories: PropTypes.arrayOf(PropTypes.object),
    keyword: PropTypes.string,
    date: PropTypes.string,
    asPath: PropTypes.string.isRequired,
  };

  static defaultProps = {
    stories: [],
    keyword: null,
    date: null,
  };

  static async getInitialProps({ query, asPath }) {
    const { keyword, date, data } = query;

    if (keyword && date) {
      // TODO: Catch incorrect params
      const decodedKeyword = decodeURIComponent(keyword);

      if (data) {
        let stories;
        try {
          stories = JSON.parse(decodeURI(data));
        } catch (err) {
          stories = window.viewTransition;
        }

        return {
          stories,
          keyword: decodedKeyword,
          date,
          asPath,
        };
      }

      const allStories = await getTrending(date, 10);
      const stories = allStories.news[decodedKeyword];

      return {
        stories,
        keyword: decodedKeyword,
        date,
        asPath,
      };
    }

    return {};
  }

  state = {
    stories: this.props.stories,
    reactionsModal: false,
  };

  componentDidMount() {
    window.requestAnimationFrame(() => window.scrollTo(0, 0));
  }

  handleOpenModal = () => {
    this.setState({ reactionsModal: true });
  };

  handleCloseModal = () => {
    this.setState({ reactionsModal: false });
  };

  handleArticleClick = (id, url) => {
    ReactGA.pageview(`/article/${id}`);
    Object.assign(document.createElement('a'), { target: '_blank', href: url }).click();
  };

  handleAddStory = (story) => {
    const storiesCopy = this.props.stories;
    const key = findKey(storiesCopy, k => k.news_id === story.news_id);
    storiesCopy[key] = { ...storiesCopy[key], ...story };
    this.setState({
      stories: storiesCopy,
    });
  };

  render() {
    const { keyword, asPath, date } = this.props;
    const { stories } = this.state;
    const { reactionsModal } = this.state;
    return (
      <Layout>
        <ReactionsModal
          isOpen={reactionsModal}
          handleCloseModal={this.handleCloseModal}
          handleAddStory={this.handleAddStory}
        />
        <Meta title={keyword} url={asPath} />
        <Container>
          <Breadcrumb keyword={keyword} date={date} />
          {stories.map(article => (
            <Row
              handleOpenModal={this.handleOpenModal}
              handleArticleClick={this.handleArticleClick}
              key={article.news_id}
              newsId={article.news_id}
              title={article.title}
              date={article.date}
              sourcename={article.source_name}
              img={article.img_url}
              reactions={article.reactions}
              url={article.url}
            />
          ))}
        </Container>
      </Layout>
    );
  }
}
