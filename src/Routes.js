import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from './components/home/HomePage'
import LoginPage from './components/login/LoginPage'
import ProfilePage from './components/login/ProfilePage'
import CourseViewer from './components/courses/CourseViewer'
import ExamPage from './components/exam/ExamPage'
import HomeContainer from "./components/homeNoParallax/HomeContainer";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/profile" component={ProfilePage} />
    <Route exact path="/course/:id/:slug" component={CourseViewer} />
    <Route path="/exam/:courseId" component={ExamPage} />
    <Route path="/test_diuri" component={HomeContainer} />
  </Switch>
);

export default Routes;