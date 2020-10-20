import React, { Component, Fragment } from "react";

import Modal from "../../UI/Modal/Modal";

const withErrorHandler = (WrappedComponenet, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    errorConfirmHandler = () => {
      this.setState({ error: null });
    };

    UNSAFE_componentWillMount() {
      this.reqInterceptor=axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptor=axios.interceptors.response.use(
        (res) => res,
        (error) => this.setState({ error: error })
      );
    }

    UNSAFE_componentWillUnmount(){
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor)
    }
    render() {
      return (
        <Fragment>
          <WrappedComponenet {...this.props} />
          <Modal
            show={this.state.error}
            modalRemoved={this.errorConfirmHandler}
          >
            <div>{this.state.error ? this.state.error.message : null}</div>
          </Modal>
        </Fragment>
      );
    }
  };
};

export default withErrorHandler;
