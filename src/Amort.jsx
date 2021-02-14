import React, {Component} from 'react'
class Amort extends React.Component {
    render(){
        return (
            <OrganizeData/>
        )
    }
}

class ShowAppreciation extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                {this.props.data.map((item)=> <p key={item}>{item}</p>)}
            </div>
            
        )
    }
    
}

class OrganizeData extends React.Component{
    constructor(props){
        super(props)
        this.setValForState = this.setValForState.bind(this)
        this.calculateAppreciation = this.calculateAppreciation.bind(this)
        this.getApprResults = this.getApprResults.bind(this)
            this.state ={
            interest:"",
            housePrice:"",
            yearsToOwn:"",
            percentIncrease:"",
            increaseOverYears:[""]
        }
              
    }
        
    
    setValForState(event, valueToSet){
            this.state[valueToSet] = event.target.value
            console.log(this.state)
    }
    
    calculateAppreciation(){
            var basePrice = Number(this.state.housePrice);
            var resultsPerYear = []
            console.log(this.state.housePrice)
    
            var priceOverXYears = 0
            for(var i = 1; i <= this.state.yearsToOwn ;i++){
                priceOverXYears = basePrice * (parseFloat(this.state.percentIncrease) /100)
                basePrice += priceOverXYears
                var result = " Afer year " + String(i) + ", your house will be worth $" + String(basePrice);
                console.log(result);
                resultsPerYear.push(result)
            }
            this.setState({interest:this.state.interest, housePrice:this.state.housePrice, yearsToOwn:this.state.yearsToOwn,percentIncrease:this.state.percentIncrease, increaseOverYears:resultsPerYear})
            this.state.increaseOverYears = resultsPerYear
    }

    
    getApprResults(){
        return <div>{this.state.increaseOverYears}</div>
    }
    render(){
        return(
        <form>
            <div>
                <label>Interest</label>
                <input 
                type="text"
                onChange={(e) => this.setValForState(e,"interest")}/>
            </div>
                
            <div>
                <label>House Price    </label>
                <input 
                type="text"
                onChange={(e) => this.setValForState(e,"housePrice")}/>
            </div>

            <div>
                <label>Years to Own   </label>
                <input 
                type="text"
                onChange={(e) => this.setValForState(e,"yearsToOwn")}/>
            </div>

            <div>
                <label>Percent Increase   </label>
                <input 
                type="text"
                onChange={(e) => this.setValForState(e,"percentIncrease")}/>
            </div>

            <button 
            type="button"
            onClick={this.calculateAppreciation}
            >
            Calculate Appreciation
            </button>
                
            <ShowAppreciation data={this.state.increaseOverYears}/>
                
            </form>
        )

    }
}
export default Amort