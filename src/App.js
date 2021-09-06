import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
// (0) don't use {} as we are using default export here, 
// (0)-> {continued} -->if we use name export we can use curly braces and induvidually catch values
//(1)app.css is very important to style the website
//(2)if we write something inside curly brases it is a javascript 
//(3)This is not a javscript, this is jsx(javascript extension syntax)-mixture of HTML and JS
//(4) On javascript we can create header,footer seperately and join it with app 

//Bootstrap is a quickly designed framework for css
function App() {
  // let MyVariable = 345
  return (
<>
     <Header/>
     <Footer/>
     <ToDos/>
     <Todo/>
</>
  );
}

      export default App;
