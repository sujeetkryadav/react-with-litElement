import React from 'react';
export default class Home extends React.Component {
  buttonRef;
    constructor() {     
        super();   
        this.state ={recipientUrl: undefined}; 
        this.buttonRef = React.createRef();
      }  


  componentDidMount() {
    let _self = this;
    this.buttonRef.current.addEventListener('on-change', function($event) {
      _self.setState({recipientUrl: 'https://jsonplaceholder.typicode.com/users' + $event.detail.id});
    });
  }

  componentWillUnmount() {
    this.buttonRef.current.removeEventListener('on-change');
  }
  render() {
    // This syntax ensures `this` is bound within handleClick
    return (<div>
         <div className="field-wrapper">
          <autocomplete-component
              url="https://jsonplaceholder.typicode.com/users"
              placeholder="Please select a client"
              width="200"
              ref={this.buttonRef}>
          </autocomplete-component>
          </div>
          <div className="field-wrapper">
            <dropdown-search-component
                url={this.state.recipientUrl}
                placeholder="Please select a service"
                width="200">
            </dropdown-search-component>
          </div>
          <div className="field-wrapper">
            <dropdown-search-component
                url={this.state.recipientUrl}
                placeholder="Please select a recipient"
                width="200">
            </dropdown-search-component></div>
          </div>
    );
  }
  
}