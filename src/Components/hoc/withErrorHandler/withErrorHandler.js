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

    componentDidMount() {
      axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      axios.interceptors.response.use(
        (res) => res,
        (error) => this.setState({ error: error })
      );
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
