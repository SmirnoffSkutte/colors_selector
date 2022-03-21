import logo from './logo.svg';
import './App.css';

function App() {
  const colors=[]
  for (let i = 0; i < document.styleSheets.length; i++) {
     for (let j = 0; j < document.styleSheets[i].cssRules.length; j++) {
        colors.push(document.styleSheets[i].cssRules[j].style.color)
        colors.push(document.styleSheets[i].cssRules[j].style.backgroundColor)    
     }
   }

  const uColors = new Set(colors.filter(String))
  
  console.log(uColors)
  const mapColors=[...uColors]
 

  return (
    <div className="App">
         {mapColors.map(plate=><div style={{backgroundColor : `${plate}`}} className='plate'></div>)}
         Всего цветов:{mapColors.length}
         
    </div>
  );
}

export default App;
