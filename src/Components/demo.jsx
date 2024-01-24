import React from 'react';
class demo extends React.Component {
    constructor() {
      super();

      // deceleare all the variable here
      this.state = {
        date : {
            day : "17",
            month : "JAN",
            year : "2024"
        }
      };

    }

    // write all the methods here 
    getYeaeePlusMonth(year,month){
        return year + month;
     };

     // will be shown on UI side  similer to main method
    render(){
      return (
        <div>
            <p>HI {this.getYeaeePlusMonth(this.state.date.year , this.state.date.month)} </p>
        </div>
      );
    }
  }
  export default demo;