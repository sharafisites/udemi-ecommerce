import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import './App.css';
 import {connect} from 'react-redux';
 import {setCurrentUser} from './redux/user/user.action';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser:null
    };
  }

  unsubscribeFromAuth = null;


    componentDidMount() {
      const {setCurrentUser}=this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            // this.setState({ currentUser: user });
            // createUserProfileDocument(user);
            // console.log(user);

            if(userAuth){
              const userRef= await createUserProfileDocument(userAuth);
console.log(userRef);
              userRef.onSnapshot(snapShot=>{
                this.setState({
                
                    id:snapShot.id,
                    ...snapShot.data()
                  
                },
                ()=>{console.log(this.state);}

                )
              })
            }else{
                          // this.setState({currentUser:userAuth});
                          setCurrentUser(userAuth);

            }
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    
    render(){

      return (
        <div className="App">
          <Header currentUser={this.state.currentUser}/>
          <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/" component={HomePage}/>
          <Route path="/signin" component={SignInAndSignUp}/>
          </Switch>
        </div>
      );
    }
  
}

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);
