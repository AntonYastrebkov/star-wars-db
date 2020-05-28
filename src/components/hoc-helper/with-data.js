import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
  return class extends Component {

    state = {
      data: null,
      hasError: false,
      loading: true
    };

    update() {
      this.setState({
        hasError: false,
        loading: true
      });
      this.props.getData()
        .then((data) => {
          this.setState({ 
            data, 
            loading: false
          });
        })
        .catch(() => {
          this.setState({ 
            hasError: true,
            loading: false 
          });
        });
    }
  
    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    render() {
      const { data, hasError, loading } = this.state;
  
      if (loading) {
        return <Spinner />;
      }
      if (hasError) {
        return <ErrorIndicator />;
      }
      return <View { ...this.props } data={ data } />;
    }
  }
};

export { withData };