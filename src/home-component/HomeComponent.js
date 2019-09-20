import React from 'react';
export default class Home extends React.Component {
  buttonRef;
  myRefForRecipient;
  myRefForService;
    constructor() {     
        super();   
        this.state ={recipientUrl: undefined}; 
        this.buttonRef = React.createRef();
        this.myRefForRecipient = React.createRef();
        this.myRefForService = React.createRef();
      }  


  componentDidMount() {
    let _self = this;
    this.buttonRef.current.addEventListener('on-change', function($event) {console.log('sdf')
      _self.setState({recipientUrl: 'https://jsonplaceholder.typicode.com/users'});
    });
    this.myRefForRecipient.current.addEventListener('on-change', function($event) {
      console.log('Recipient')
    });
    this.myRefForService.current.addEventListener('on-change', function($event) { 
      console.log('Service')
    });
  }

  componentWillUnmount() {
    this.buttonRef.current.removeEventListener('on-change');
    this.myRefForRecipient.current.removeEventListener('on-change');
    this.myRefForService.current.removeEventListener('on-change');
  }
  render() {
    // This syntax ensures `this` is bound within handleClick
    return (<div>
         <div className="field-wrapper">
          <autocomplete-component
              url="https://jsonplaceholder.typicode.com/users"
              placeholder="Please select a client"
              width="400"
              ref={this.buttonRef}>
          </autocomplete-component>
          </div>
          <div className="field-wrapper">
            <dropdown-search-component
                url={this.state.recipientUrl}
                placeholder="Please select a service"
                width="400"
                ref={this.myRefForService}>
            </dropdown-search-component>
          </div>
          <div className="field-wrapper">
            <input-tags-component
                url={this.state.recipientUrl}
                placeholder="Please select a recipient"
                width="400"
                ref={this.myRefForRecipient}>
            </input-tags-component></div>
          </div>
    );
  }
  
}