import React from 'react'; 
import './HelloClassComponent.css';
  
//Contoh penggunaan class component / statefull component
class StateFullComponent extends React.Component {
    render(){
        return  <p className="text-ps">Hello Statefull Component</p>
    }
}

export default StateFullComponent;