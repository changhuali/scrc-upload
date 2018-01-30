import React from 'react';
import Upload from '../component';
import './demo1.less';

export default class Demo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base64File: [],
    };
  }
  beforeUpload = (files) => {
    console.log(Array.from(files));
    return true;
  }
  onChange = (files) => {
    this.resetState();
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const newFileList = this.state.base64File.slice();
        newFileList.push(reader.result);
        this.setState({
          base64File: newFileList
        });
      }
    });
  }
  genPreview = () => {
    return this.state.base64File.map((img, index) => {
      return <img key={index} src={img} alt={`upload_img_${index}`} />;
    });
  }
  resetState = () => {
    this.setState({
      base64File: [],
    });
  }
  render() {
    return [
      <Upload
        key="upload"
        accept="image/*"
        beforeUpload={this.beforeUpload}
        onChange={this.onChange}
        multiple
      >
        <button className="demo1-button">上传图片</button>
      </Upload>,
      <div
        key="preview"
        className="demo1-preview"
      >
        {this.genPreview()}
      </div>
    ];
  }
}
