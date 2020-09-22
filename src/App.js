import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "../static/style-mobile.css"
import "../static/style-desktop.css"
import "../static/style-tablet.css"

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <div>
                                Seite in Arbeit
                    </div>
                        </Route>

                        <Route path="*">
                            <div>
                                404
                            </div>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default App;
