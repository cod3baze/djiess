import { createSwitchNavigator } from 'react-navigation'

import Login from '../../screens/Auth/Login'
import SignUp from '../../screens/Auth/SignUp'

const AuthRoutes = createSwitchNavigator({
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp
  },
  AppRoutes: {
    screen : '',
  }
}, {
  initialRouteName: "Login",
}) 


export default AuthRoutes