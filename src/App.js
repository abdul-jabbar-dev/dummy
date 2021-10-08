import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; import Courses from "./component/Courses/Courses";
import CourseDetails from "./component/CourseDetails/CourseDetails";
import Footer from './component/Footer/Footer'
import MenuBar from "./component/Menubar/Menubar";

function App() {

  return (
    <div className="App">
      
      <Router>
        <MenuBar></MenuBar>
        <Switch>
          <Route exact path="/">
        
          </Route>
          <Route path="/courses">
        <Courses></Courses>
          </Route>
          <Route path="/classes/:id">
            <CourseDetails></CourseDetails>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
