import React from 'react';
import { Link } from 'react-router-dom';
import UserPageContainer from './user_page/user_page_container';
import Splash from './Splash';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let render_page = this.props.currentUser ? (
      <UserPageContainer />
    ) : (
      <Splash />
    );
    return <div>{render_page}</div>;
  }
}

export default Home;
