import React from 'react';
import PropTypes from 'prop-types';
import './styles/upload.less';

export default class Test extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  handleClickBubble = () => {
    this.fileInput.click();
  }
  handleFileRef = (inputRef) => {
    this.fileInput = inputRef;
  }
  render() {
    return [
      <span
        key="file-proxy"
        onClick={this.handleClickBubble}
      >
        {this.props.children}
      </span>,
      <input
        key="file-input"
        className="scrc-upload-input"
        ref={this.handleFileRef}
        type="file"
        onChange={this.handleFileChange}
      />,
    ];
  }
}
