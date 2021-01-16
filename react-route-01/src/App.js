import React, {Fragment} from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
          <Link to="/">Home</Link> <span> || </span> <Link to="/topics">Topics</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/topics" component={Topics} />
          </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <Fragment>
      <h2>Topics</h2>
      <Link to={`${url}/new`}>New Topics</Link><span> || </span>
      <Link to={`${url}/rendering`}>Rendering with React</Link><span> || </span>
      <Link to={`${url}/components`}>Components</Link><span> || </span>
      <Link to={`${url}/props-v-state`}>Props v. State</Link>



      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
          <TopicList />
        </Route>
        <Route exact path={`${path}/new`} component={TopicNew} />
        <Route path={`${path}/:topicId`} component={TopicEdit} />
      </Switch>
    </Fragment>
  );
}

function TopicList() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h3>topic list</h3>
      <Link to={`${url}/new`}>New Topics</Link><span> || </span>
      <Link to={`${url}/rendering`}>Rendering with React</Link>
    </div>
  );
}

function TopicEdit() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

function TopicNew() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>Topic New</h3>
    </div>
  );
}
