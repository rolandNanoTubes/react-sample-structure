import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../Screens/Home';
import About from '../Screens/About';
import Todo from '../Screens/Todo';

// layout
import MainLayout from '../Components/Layout/mainLayout';

// navigation
import Navigation from '../Components/Navigation/navigation';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <main>
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
                        path="/about"
                        render={() => (
                            <MainLayout>
                                <About />
                            </MainLayout>
                        )}
                    />
                    <Route
                        exact
                        path="/todo"
                        render={() => (
                            <MainLayout>
                                <Todo />
                            </MainLayout>
                        )}
                    />
                </main>
            </div>
        );
    }
}
export default App;
