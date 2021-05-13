import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import UseEffect from './useEffect';
import UseContext from './useContext/useContext';
import UseCallBack from './useCallback/useCallback'
import Ref from './useRef/useRef'
import UseImperativeHandle from './useImperativeHandle/useImperativeHandle';
import UseLayoutEffect from './useLayoutEffect/useLayoutEffect';
import 'antd/dist/antd.css';
type Item = {
  completed: boolean
  id: string
  name: string

}
export default function BasicExample() {
  const [data, setData] = useState<Item[]>([]);
  useEffect(() => {
    const index = (Math.random() * 10).toFixed(0).toString()
    fetch('/getAll').then(res => res.json()).then(data =>{
      setData(data)
    });
  }, []);

  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">UseEffect</Link>
            </li>
            <li>
              <Link to="/useContext">useContext</Link>
            </li>
            <li>
              <Link to="/useRef">useRef</Link>
            </li>
            <li>
              <Link to="/useCallBack">useCallBack and useMomo</Link>
            </li>
            <li>
              <Link to="/useImperativeHandle">useImperativeHandle</Link>
            </li>
            <li>
              <Link to="/useLayoutEffect">UseLayoutEffect</Link>
            </li>
          </ul>

          <hr/>

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <UseEffect/>
            </Route>
            <Route path="/useContext">
              <UseContext/>
            </Route>
            <Route path="/useRef">
              <Ref/>
            </Route>
            <Route path="/useCallBack">
              <UseCallBack/>
            </Route>
            <Route path="/useImperativeHandle">
              <UseImperativeHandle/>
            </Route>
            <Route path="/useLayoutEffect">
              <UseLayoutEffect/>
            </Route>
          </Switch>
          <p>连接数据库从后台返回</p>
          {
            data.map((item) =>
                <p key={item.id}>{item.name}</p>
            )
          }
        </div>
      </Router>
  );
}
