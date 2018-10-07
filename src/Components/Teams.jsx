
import React, {Component} from 'react';
import Jovens from './data.json'

export default class Teams extends Component {
    render() {
        console.log(Jovens)
      return (
          <div>
            <div style={{flexDirection:"column", fontWeight: 'bold', flex:1, display:"flex", justifyContent: 'center', alignItems: 'center', color:"#e2e209", margin:10}}>
                <span style={{ fontSize: 30}}>Circulo Amarelo</span>
                <span style={{fontWeight: 'bold', color:"black"}}>Jovens</span>
            </div>
            <div> 
                {Jovens.map(jovem => {
                    return (
                        <div style={{borderTop: "1px solid yellow", paddingTop: 10 , margin:10}} key={jovem.DATA}> 
                            <div style={{ fontWeight: "bold", textAlign: "center"}}>Nome | Telefone</div> 
                            <div style={{ textAlign: "center"}}>{jovem.jovem}</div>
                        
                            <div style={{ marginTop: 8, fontWeight: "bold", textAlign: "center"}}>Endereço</div> 
                            <div style={{ textAlign: "center"}}>{jovem.Endereço}</div>
                        
                            <div style={{ marginTop: 8, fontWeight: "bold", textAlign: "center"}}>Data de Nascimento</div> 
                            <div style={{ textAlign: "center"}}>{jovem.DATA}</div>
                        </div>
                    )
                 })}
            </div>

        </div>
        )
    }
  }