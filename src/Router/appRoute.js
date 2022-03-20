import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/Facebook';
import Todo from '../Pages/Google';

// layout
import MainLayout from '../Components/Layout/mainLayout';

// navigation
import Navigation from '../Components/Navigation/navigation';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <Switch >
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <MainLayout>
                                <Home />
                            </MainLayout>
                        )}
                    />
                    <Route
                        exact
                        path="/fb"
                        render={() => (
                            <MainLayout>
                                <About />
                            </MainLayout>
                        )}
                    />
                    <Route
                        exact
                        path="/google"
                        render={() => (
                            <MainLayout>
                                <Todo />
                            </MainLayout>
                        )}
                    />
                </Switch>
            </div>
        );
    }
}
export default App;
