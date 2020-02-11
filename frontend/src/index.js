import React from 'react'; //뒤에는 소문자 앞에는 대문자
import ReactDOM from "react-dom";
import App from "./App";

import Counter from "./Counter";

//App 컴포넌트를 #id에 씌움.
ReactDOM.render(<Counter/>,document.getElementById("root"));