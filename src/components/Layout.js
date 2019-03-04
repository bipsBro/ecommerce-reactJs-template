// this file has three examples of composing nexted
// providers and consumers in a single component
// normally you wouldn't have your entire app in a single component like this
// and you wouldn't normally put a consumer right below a provider
// (consumers will likely be lower in your tree) so the nesting wont
// often be as big of a problem.
// however, if you ever do face huge nesting problems,
// react-composer is here to help!
import React from 'react'
import {render} from 'react-dom'
import Composer from 'react-composer'

const ThemeContext = React.createContext('light')
class ThemeProvider extends React.Component {
  state = {theme: 'light'}
  toggleTheme = () => {
    this.setState(({theme}) => ({
      theme: theme === 'light' ? 'dark' : 'light',
    }))
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        {this.props.children({toggleTheme: this.toggleTheme})}
      </ThemeContext.Provider>
    )
  }
}
// only doing this to shield end-users from the
// implementation detail of "context"
const ThemeConsumer = ThemeContext.Consumer

const LanguageContext = React.createContext('en')
class LanguageProvider extends React.Component {
  state = {lang: 'en'}
  setLanguage = lang => {
    this.setState({lang})
  }
  render() {
    return (
      <LanguageContext.Provider value={this.state.lang}>
        {this.props.children({setLanguage: this.setLanguage})}
      </LanguageContext.Provider>
    )
  }
}
const LanguageConsumer = LanguageContext.Consumer

const styles = {
  light: {
    padding: 20,
    backgroundColor: 'white',
    color: 'black',
  },
  dark: {
    padding: 20,
    backgroundColor: 'black',
    color: 'white',
  },
}

const translations = {
  en: {
    light: 'light',
    dark: 'dark',
  },
  es: {
    light: 'claro',
    dark: 'oscuro',
  },
  de: {
    light: 'hell',
    dark: 'dunkel',
  },
}

// nested big time
function AppNested() {
  return (
    <LanguageProvider>
      {({setLanguage}) => (
        <ThemeProvider>
          {({toggleTheme}) => (
            <LanguageConsumer>
              {lang => (
                <ThemeConsumer>
                  {theme => (
                    <div
                      style={{
                        zoom: 2,
                        textAlign: 'center',
                        border: '1px solid',
                      }}
                    >
                      <div style={styles[theme]}>
                        <button onClick={toggleTheme}>
                          {translations[lang][theme]}
                        </button>
                        <select
                          value={lang}
                          onChange={e => setLanguage(e.target.value)}
                        >
                          <option value="en">en</option>
                          <option value="es">es</option>
                          <option value="de">de</option>
                        </select>
                      </div>
                    </div>
                  )}
                </ThemeConsumer>
              )}
            </LanguageConsumer>
          )}
        </ThemeProvider>
      )}
    </LanguageProvider>
  )
}

// using composer inline
function AppComposed() {
  return (
    <Composer components={[<LanguageProvider />, <ThemeProvider />]}>
      {([{setLanguage}, {toggleTheme}]) => (
        <Composer components={[<LanguageConsumer />, <ThemeConsumer />]}>
          {([lang, theme]) => (
            <div
              style={{
                zoom: 2,
                textAlign: 'center',
                border: '1px solid',
              }}
            >
              <div style={styles[theme]}>
                <button style={{cursor: 'pointer'}} onClick={toggleTheme}>
                  {translations[lang][theme]}
                </button>
                <select
                  value={lang}
                  onChange={e => setLanguage(e.target.value)}
                >
                  <option value="en">en</option>
                  <option value="es">es</option>
                  <option value="de">de</option>
                </select>
              </div>
            </div>
          )}
        </Composer>
      )}
    </Composer>
  )
}

const store = [{}]

// extracting the composer part
function AppSuperComposeRenderer({children}) {
  return (
    <Composer components={[<LanguageProvider />, <ThemeProvider />]}>
      {([{setLanguage}, {toggleTheme}]) => (
        <Composer components={[<LanguageConsumer />, <ThemeConsumer />]}>
          {([lang, theme]) => children({setLanguage, toggleTheme, lang, theme})}
        </Composer>
      )}
    </Composer>
  )
}

// so we can shove that nesting aside!
export default function AppSuperCompose() {
  return (
    <AppSuperComposeRenderer>
      {({setLanguage, toggleTheme, lang, theme}) => (
        <div
          style={{
            zoom: 2,
            textAlign: 'center',
            border: '1px solid',
          }}
        >
          <div style={styles[theme]}>
            <button style={{cursor: 'pointer'}} onClick={toggleTheme}>
              {translations[lang][theme]}
            </button>
            <select value={lang} onChange={e => setLanguage(e.target.value)}>
              <option value="en">en</option>
              <option value="es">es</option>
              <option value="de">de</option>
            </select>
          </div>
        </div>
      )}
    </AppSuperComposeRenderer>
  )
}

