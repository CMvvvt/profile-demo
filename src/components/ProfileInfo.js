import React from 'react';
import Container from 'react-bootstrap/Container';

function ProfileInfo(props) {

    return(
        <Container >
            <div >
                <div className="pdf" style={{ width: 1000 }}>
                <Button variant="primary" onClick={this.goToPrevPage}>Prev</Button>
                <Button variant="primary" onClick={this.goToNextPage}>Next</Button>
                <Button variant="primary" onClick={this.changeVersion}>{this.state.version}</Button>
                <p>Page {pageNumber} of {numPages}</p>
                <Document 
                    file={pdf}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} width={900} />
                </Document>
                </div>  
            </div>
         </Container>
    )
}


export default ProfileInfo;
