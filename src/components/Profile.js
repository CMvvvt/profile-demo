import React, { Component } from "react";
import { PDFDownloadLink, Document, Page,pdfjs } from "react-pdf";
import pdf_en from '../asset/pdf/cv.pdf';
import pdf_ch from '../asset/pdf/profileCh.pdf';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
let versionName = "中文简历";


export default class Profile extends Component {
    constructor(props){
        super(props);
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }

 
  state = { numPages: null, pageNumber: 1, version:false};

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    {this.state.pageNumber > 1 && this.setState(state => ({ pageNumber: state.pageNumber - 1 }))};
  goToNextPage = () =>
    {this.state.pageNumber < this.state.numPages && this.setState(state => ({ pageNumber: state.pageNumber + 1 }))};

  changeVersion = () =>{
      this.setState({version:!this.state.version})
      versionName = this.state.version ? "中文简历" :"English Version";
      if(versionName == "English Version") {
        this.setState({pageNumber:1})
      }
  }

  

  render() {
    const { pageNumber, numPages,version } = this.state;
    return (
    <Container >
      <div>
        <div className="pdf-header">
          <Button variant="success" onClick={this.changeVersion}>{versionName}</Button>
          <p>Page {pageNumber} of {numPages}</p>
        </div>

     

        <div className="pdf" style={{ width: 1000 }}>

          {!version ?
            <Document 
              file={pdf_en}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} width={900} />
            </Document>
            :
            <Document 
              file={pdf_ch}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} width={900} />
            </Document>
          }
        </div> 
        <div className="pdf-footer">
        <p>Page {pageNumber} of {numPages}</p>
          <Button variant="outline-primary" onClick={this.goToPrevPage}>Prev</Button>{'  '}
          <Button variant="outline-primary" onClick={this.goToNextPage}>Next</Button>{'  '}
       
         
        </div>
        
      </div>
    </Container>
    );
  }
}


