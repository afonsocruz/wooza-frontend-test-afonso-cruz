import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Checkout from './pages/Checkout';
import Home from './pages/Home';
import ServicePlans from './pages/ServicePlans';

function Routes() {

  const NotFoundRoute = () => {
    return <Redirect to="/" />;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/serviceplans/:id" component={ServicePlans} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/*" component={NotFoundRoute} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
