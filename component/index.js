import React from 'react';
import PropTypes from 'prop-types';
import './styles/upload.less';

export default class Upload extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    accept: PropTypes.string,
    multiple: PropTypes.bool,
    disabled: PropTypes.bool,
    beforeUpload: PropTypes.func,
    onChange: PropTypes.func.isRequired,
  }
  static defaultProps = {
    accept: '*',
    multiple: false,
    disabled: false,
    beforeUpload: () => true,
  }
  handleClickBubble = () => {
    this.fileInput.click();
  }
  handleFileChange = (evt) => {
    const { files } = evt.target;
    const fileValid = this.checkFile(files);
    if (fileValid) {
      this.addFile(files);
    }
  }
  checkFile = (...args) => {
    const { beforeUpload } = this.props;
    if (typeof beforeUpload === 'function') {
      return beforeUpload(...args);
    }
    return true;
  }
  addFile = (...args) => {
    const { onChange } = this.props;
    if (typeof onChange === 'function') {
      onChange(...args);
    }
  }
  removeFile = () => {
    this.fileInput.value = '';
  }
  saveInputRef = (inputRef) => {
    this.fileInput = inputRef;
  }
  render() {
    const {
      children,
      accept,
      multiple,
      disabled,
    } = this.props;
    return [
      <span
        key="file-proxy"
        onClick={this.handleClickBubble}
      >
        {children}
      </span>,
      <input
        key="file-input"
        type="file"
        className="scrc-upload-input"
        ref={this.saveInputRef}
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={this.handleFileChange}
      />,
    ];
  }
}
