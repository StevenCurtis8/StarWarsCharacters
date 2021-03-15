import React from 'react'
import "./style.css"

class App extends React.Component{

  


  constructor(){
      super()
      this.state={
          loading: false,
          character:{}
      }
  }

  componentDidMount(){
      this.setState({
          loading: true
      })

      fetch("https://akabab.github.io/starwars-api/api/all.json").then(response => response.json()).then(data =>{
          this.setState({
              loading: false,
              character: data
          })
      })

  }

  render(){
    function capitalize(s){
      if (typeof s !== 'string') return ''
      let textCap= s.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');

      if(textCap.includes('Ii')){
        textCap=textCap.replace('Ii', 'II')
      }
      return textCap
      //return s.charAt(0).toUpperCase() + s.slice(1)
    }

    let text
    const wrapper = document.getElementById("root");

    if(this.state.character.length > 0){
      let text = this.state.loading ? "Loading..." : ""
      let name, height, mass, gender, homeworld, bornLocation, diedLocation, species, hairColor, eyeColor, skinColor, cybernetics, image, model, platingColor, sensorColor, masters
      text="<div> "
      for (let i = 0; i < this.state.character.length; i++) {

        name = this.state.character[i].name
        image = typeof this.state.character[i].image !=="undefined" ? this.state.character[i].image: "http://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png"
        height = typeof this.state.character[i].height !=="undefined" ? this.state.character[i].height+ "m" : "Unknown "
        mass = typeof this.state.character[i].mass !=="undefined" ? this.state.character[i].mass+ "kg" : "Unknown "
        gender = typeof this.state.character[i].gender !=="undefined" ? capitalize(this.state.character[i].gender) : "Unknown"
        homeworld = typeof this.state.character[i].homeworld !=="undefined" ? capitalize(this.state.character[i].homeworld) : "Unknown"
        bornLocation =  typeof this.state.character[i].bornLocation !=='undefined' ? capitalize(this.state.character[i].bornLocation) : capitalize(this.state.character[i].homeworld)
        diedLocation = typeof this.state.character[i].diedLocation !=="undefined" ? capitalize(this.state.character[i].diedLocation) : "Unknown"
        species = typeof this.state.character[i].species !=="undefined" ? capitalize(this.state.character[i].species) : "Unknown"
        hairColor = typeof this.state.character[i].hairColor !=="undefined" ? capitalize(this.state.character[i].hairColor) : "Unknown"
        eyeColor = typeof this.state.character[i].eyeColor !=="undefined" ? capitalize(this.state.character[i].eyeColor) : "Unknown"
        skinColor = typeof this.state.character[i].skinColor !=="undefined" ? capitalize(this.state.character[i].skinColor) : "Unknown"
        cybernetics= typeof this.state.character[i].cybernetics !=="undefined" ? capitalize(this.state.character[i].cybernetics) : "N/A"

        masters=this.state.character[i].masters
        model = typeof this.state.character[i].model !=="undefined" ? capitalize(this.state.character[i].model) : "N/A"
        platingColor = typeof this.state.character[i].platingColor !=="undefined" ? capitalize(this.state.character[i].platingColor) : "N/A"
        sensorColor = typeof this.state.character[i].sensorColor !=="undefined" ? capitalize(this.state.character[i].sensorColor) : "N/A"

        if(species === "Droid"){
          text = text+ '<h1>'+name+'</h1> <br/> <h3>Height: '+height+'</h3> <h3>Weight: '+mass+'</h3> <h3>Gender: '+gender+'</h3> <h3>Homeworld: '+homeworld+'</h3> <h3>Model: '+model+'</h3> <h3>Species: '+species+'</h3> <h3>Sensor Colour: '+sensorColor+'</h3> <h3>Plating Colour: '+platingColor+'</h3> <h3>Skin Colour: '+skinColor+'</h3> <img className="img" src='+image+' alt="cat1"/> <br/> <hr style="height:6px;border-width:0;color:gray;background-color:black"> <hr style="height:6px;border-width:0;color:gray;background-color:black"> <br/>'
        }
        else if(typeof this.state.character[i].masters !== 'undefined'){
          text = text+ '<h1>'+name+'</h1> <br/> <h3>Height: '+height+'</h3> <h3>Weight: '+mass+'</h3> <h3>Gender: '+gender+'</h3> <h3>Homeworld: '+homeworld+'</h3> <h3>Masters: '+masters+'</h3> <h3>Born Location: '+bornLocation+'</h3> <h3>Death Location: '+diedLocation+'</h3> <h3>Species: '+species+'</h3> <h3>Hair Colour: '+hairColor+'</h3> <h3>Eye Colour: '+eyeColor+'</h3> <h3>Skin Colour: '+skinColor+'</h3> <h3>Cybernetics: '+cybernetics+'</h3> <img className="img" src='+image+' alt="cat1"/> <br/> <hr style="height:6px;border-width:0;color:gray;background-color:black"> <hr style="height:6px;border-width:0;color:gray;background-color:black"> <br/>'
        }
        else{
          text = text+ '<h1>'+name+'</h1> <br/> <h3>Height: '+height+'</h3> <h3>Weight: '+mass+'</h3> <h3>Gender: '+gender+'</h3> <h3>Homeworld: '+homeworld+'</h3> <h3>Born Location: '+bornLocation+'</h3> <h3>Death Location: '+diedLocation+'</h3> <h3>Species: '+species+'</h3> <h3>Hair Colour: '+hairColor+'</h3> <h3>Eye Colour: '+eyeColor+'</h3> <h3>Skin Colour: '+skinColor+'</h3> <h3>Cybernetics: '+cybernetics+'</h3> <img className="img" src='+image+' alt="cat1"/> <br/> <hr style="height:6px;border-width:0;color:gray;background-color:black"> <hr style="height:6px;border-width:0;color:gray;background-color:black"> <br/>'
        }
        
      }
      text=text+" </div>"
      
      return( 
        <div>
          {wrapper.innerHTML = text}
        </div> 

      )
    }
    else{
      text="Loading..."
      return(      
        <div>
            {text}
        </div>
      )
    }
      
  }

}

export default App;