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

  let rules = {};
  for (let i = 0; i < mapColors.length; ++i) {
    let color = mapColors[i];
    rules[color] = [];
    for (let j = 0; j < document.styleSheets.length; ++j) {
      let styleSheet = document.styleSheets[j];
      for (let k = 0; k < styleSheet.cssRules.length; ++k) {
        let rule = styleSheet.cssRules[k];
        if (rule.style && color === rule.style.color) {
          rules[color].push(rule.selectorText);
        }
        if (rule.style && color === rule.style.backgroundColor) {
          rules[color].push(rule.selectorText);
        }
      }
    }
  }
  console.log(rules)

  function showrules(item){
    alert(item)
  }

  return (
    <div className="App">
      {Object.keys(rules).map((key)=>
      {const item = rules[key];
        return(
            <div style={{backgroundColor : `${key}`}}  className='plate' value={item} onClick={()=>showrules(item)}></div>
        )
      }
      )}
          Всего цветов:{mapColors.length} 
    </div>
  );
}

export default App;
