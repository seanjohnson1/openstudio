import { connect } from 'react-redux'

import App from './App'
import { appOperations } from './duck'

const mapStateToProps = state => 
    ({
        app_state: state.app
    })

const mapDispatchToProps = dispatch =>
    ({  
        fetchUser() {
            dispatch(appOperations.fetchUser())
        },
        fetchSettings() {
            dispatch(appOperations.fetchSettings())
        },
        setLoaded(loaded) {
            dispatch(appOperations.setLoaded(loaded))
        },
        setLoading(loading) {
            dispatch(appOperations.setLoading(loading))
        },
        setLoadingMessage(message) {
            dispatch(appOperations.setLoadingMessage(message))
        },
        setLoadingProgress(progress) {
            dispatch(appOperations.setLoadingProgress(progress))
        }
    })


const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer