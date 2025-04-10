import { PageNotFound } from "components/commons";
import KanbanMode from "components/KanbanMode";
import NewsMode from "components/NewsMode";
import PomodoroMode from "components/PomodoroMode";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import routes from "routes";

const App = () => (
  <Switch>
    <Route exact component={KanbanMode} path={routes.kanban} />
    <Route exact component={NewsMode} path={routes.news} />
    <Route exact component={PomodoroMode} path={routes.pomodoro} />
    <Redirect exact from={routes.root} to={routes.kanban} />
    <Route exact component={PageNotFound} path="*" />
  </Switch>
);

export default App;
