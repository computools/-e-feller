import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './containers/private-route';
import store from './store/index';
import { LangActions } from './store/actions'
import { action as toggleMenu } from 'redux-burger-menu';

import './App.css';

// Components
import Home from './containers/home';

// Internationalization in React
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fi from 'react-intl/locale-data/fi';
import ru from 'react-intl/locale-data/ru';

import localeData from './locales/data.json';

class App extends Component {
  constructor() {
    super();
    addLocaleData([...en, ...fi, ...ru]);

    this.language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
    this.languageWithoutRegionCode = this.language.toLowerCase().split(/[_-]+/)[0];
    this.messages = localeData[this.languageWithoutRegionCode] || localeData[this.language] || localeData.en;
  }

  componentWillMount() {
    // Internationalization
    store.dispatch({
      type: LangActions.CHANGE_LANG,
      data: {
        allLang: localeData,
        currentLang: this.messages["lang"]
      }
    });
    // Burger menu
    document.documentElement.clientWidth > 768 && store.dispatch(toggleMenu(true));
    document.addEventListener("keydown", keyDown, false);
    function keyDown(e) {
      if(e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation()
      }
    }
    // localStorage

  }

  render() {
    return (
      <IntlProvider locale={this.language} messages={this.messages}>
        <Router>
          <Provider store={store}>
            <div className="App">
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route component={() => <div>404</div>}/>
              </Switch>
            </div>
          </Provider>
        </Router>
      </IntlProvider>
    );
  }
}



export default App;
