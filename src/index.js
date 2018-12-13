
import React, { Component } from 'react';

export const withModal = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.isVisible = null;

      this._getModal = this._getModal.bind(this);
      this._setIsVisible = this._setIsVisible.bind(this);
      this._setState = this._setState.bind(this);
      this._initState = this._initState.bind(this);

      this.renderModal = this.renderModal.bind(this);
      this.showModal = this.showModal.bind(this);
      this.closeModal = this.closeModal.bind(this);

      this.state = {
        isVisible: null,
        isMounted: false
      };
    }

    componentDidMount() {
      this._setState();
    }

    componentWillUnmount() {
      this._initState();
    }

    _initState() {
      this.setState({
        isVisible: null,
        isMounted: false
      });
    }

    _setState() {
      this.setState({
        isVisible: this.isVisible, 
        isMounted: true
      });
    }

    _setIsVisible(modals) {
      let isVisible = {};
      for (key in modals) {
        isVisible[key] = false;
      }
      this.isVisible = isVisible;
    }

    showModal(modal) {
      this.setState({ 
        isVisible: {
          [modal]: true
        } 
      });
    }

    closeModal(modal) {
      this.setState({ 
        isVisible: {
          [modal]: false
        } 
      });
    }

    _getModal(modals) {
      let arr = [];
      Object.keys(modals).forEach((value, index) => {
        const modal = React.cloneElement(
          modals[value], 
          {
            key: index,
            isVisible: this.state.isVisible[value], 
            closeModal: this.closeModal
          }
        );
        arr.push(modal);
      });
      return arr;
    }

    renderModal(modals) {
      if (typeof modals !== "object") return;
      this._setIsVisible(modals);

      if (!this.state.isMounted) return;
      const modalsComponent = this._getModal(modals);

      return modalsComponent;
    }

    render() {
      return (
        <WrappedComponent 
          {...this.props} 
          showModal={this.showModal} 
          closeModal={this.closeModal} 
          renderModal={this.renderModal} 
        />
      );
    }
  };
}