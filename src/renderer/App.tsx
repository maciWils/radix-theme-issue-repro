import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import FileButton from "./Components/FileButton/FileButton";
import React, {useState} from "react";
import RuleCard from "./Components/RuleCard/RuleCard";
import {Rule} from "../Types";
import RuleCardList from "./Components/RuleCardList/RuleCardList";
import RuleSidepanel from "./Components/RuleSidepanel/RuleSidepanel";
// import FileButton from "./Components/FileButton/FileButton";
// import FileButton from "./Components/FileButton/FileButton";
// import * as electron from "electron";

function Hello() {
  // function handleChange(event:any) {
  //   console.log(`Selected file - ${event.target.files[0].name}`);
  // }
  //TODO remove

  return (
    <div>
      {/*<input type="file" onChange={handleChange} multiple/>*/}
      <div className="Hello">
        {/*<RuleCard rule={testRule}></RuleCard>*/}
        <div> TESTING </div>
        <RuleSidepanel></RuleSidepanel>
        <div> INIT COMMIT 2</div>
        <div></div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
