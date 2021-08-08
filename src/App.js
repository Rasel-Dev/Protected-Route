import { Switch } from 'react-router-dom';
import Authenticate from './AuthProtect/Authenticate';
import Guest from './AuthProtect/Guest';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';

function App() {
    return (
        <div>
            <Switch>
                <Guest path="/login" component={Login} />
                <Authenticate path="/" exact component={Dashboard} />
            </Switch>
        </div>
    );
}

export default App;
