
import './App.css';
import Child from './Child';

function App() {

  const number =15
  const title ="Workshop Props"

  const array=["Introduction to React Props",
  "Types of Props", "Children Props", "Destructuring", "PropTypes", "Default Props", "Conditional Rendering", "Handling Events" ]

  const user ={name:"fedi", age:22}

  const Handlealert =(name)=> { alert( `hello ${name}`  )  }
  return (
    <div className="App">

 <Child    title={title}   numberofstudents={number}   array={array}    user={user}   Handlealert={Handlealert}   >


<h1>i am a child props </h1>
<p>i am a child props also</p>

 </Child>
    </div>
  );
}

export default App;
