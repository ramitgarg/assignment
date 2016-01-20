var React = require('react');
import Router from 'react-router';

module.exports = React.createClass({
     render: function() {
        
        return (
            <div className='container-fluid'>
                {this.props.children}
            </div>
        );
    }
});
