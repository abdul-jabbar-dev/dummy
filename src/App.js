import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";import Courses from "./component/Courses/Courses";
import CourseDetails from "./component/CourseDetails/CourseDetails";



function App() {

  return (
    <div className="App">
      <Courses></Courses>
   
        <Router>
         <Courses></Courses>
          <Switch>
            <Route path = "/coursedetails">
           
            <CourseDetails></CourseDetails>
            </Route>
           
          
          </Switch>
        </Router>
  
    </div>
  );
}

export default App;
