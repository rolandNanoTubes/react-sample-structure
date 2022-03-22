import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// layout
import MainLayout from '../Components/Layout/mainLayout';

// navigation
import Navigation from '../Components/Navigation/navigation';


const Home = lazy(() => import('../Pages/Home'));
const Page1 = lazy(() => import('../Pages/Page1'));
const Page2 = lazy(() => import('../Pages/Page2'));

class App extends React.Component {
    render() {
        return (
            <Suspense fallback={<div>Loading</div>}>
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
                        path="/page1"
                        render={() => (
                            <MainLayout>
                                <Page1 />
                            </MainLayout>
                        )}
                    />
                    <Route
                        exact
                        path="/page2"
                        render={() => (
                            <MainLayout>
                                <Page2 />
                            </MainLayout>
                        )}
                    />
                </Switch>
            </Suspense>
        );
    }
}
export default App;
