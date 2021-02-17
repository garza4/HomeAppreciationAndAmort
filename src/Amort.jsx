import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Spreadsheet from "react-spreadsheet";
import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                <Card style={{ width: '18rem' }}>
                    <ListGroup varian='list-group-flush'>
                        {this.props.data.map((item)=> <ListGroup.Item key={item}>{item}</ListGroup.Item>)}
                    </ListGroup>
                </Card>
                <div>
                    <Spreadsheet data={0}></Spreadsheet>
                </div>
                
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
        <Form>
            <Form.Group>
                <Form.Label>Interest</Form.Label>
                <Form.Control type = 'input' placeholder = 'Enter Interest on loan'
                type="text"
                onChange={(e) => this.setValForState(e,"interest")}/>
            </Form.Group>
                
            <Form.Group>
                <Form.Label>House Price</Form.Label>
                <Form.Control type = 'input' placeholder= 'Enter the sale price of property'
                type="text"
                onChange={(e) => this.setValForState(e,"housePrice")}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Years to Own</Form.Label>
                <Form.Control type = 'input' placeholder= 'How many years to own'
                type="text"
                onChange={(e) => this.setValForState(e,"yearsToOwn")}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Expected Percent Increase/year</Form.Label>
                <Form.Control type = 'input' placeholder= 'Expected increase per year'
                type="text"
                onChange={(e) => this.setValForState(e,"percentIncrease")}/>
            </Form.Group>

            <Button 
            variant="Primary"
            onClick={this.calculateAppreciation}
            >
            Calculate Appreciation
            </Button>
                
            <ShowAppreciation data={this.state.increaseOverYears}/>
                
            </Form>
        )

    }
}
export default Amort