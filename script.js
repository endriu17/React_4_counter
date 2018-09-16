var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillMount(){
        return true + console.log('componentWillMount: komponent zostanie zamontowany')
    },

    componentWillReceiveProps(nextProps){
        return console.log('componentWillReceiveProps:')
    },   
   
    shouldComponentUpdate(nextProps, nextState){
        return true
    },

    componentWillUpdate(nextProps, nextState){
        return console.log('componentWillUpdate: komponent zostanie zaktualizowany!')
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, 'Dodaj'),
            React.createElement('button', {onClick: this.decrement}, 'Odejmij')
        );
    },

    componentDidUpdate(prevProps, prevState){
        return console.log('componentDidUpdate: komponent został zaktualizowany!')
    },

    componentDidMount(){
        return console.log('componentDidMount: komponent został zamonotowany!')
    }

   
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));