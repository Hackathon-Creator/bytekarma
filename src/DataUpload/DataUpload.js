import React, { Component } from 'react';
import axios from 'axios';

//  import 'mdbreact/dist/css/mdb-free.css';
//  import "./assets/scss/mdb-free.scss/";
// import './DataUpload.css';
class DataUpload extends Component {
    state = { 

        // Initially, no file is selected 
        selectedFile: null
        }; 
        
        // On file select (from the pop up) 
        onFileChange = event => { 
        
        // Update the state 
        this.setState({ selectedFile: event.target.files[0] }); 
        
        }; 
        
        // On file upload (click the upload button) 
        onFileUpload = () => { 
        
        // Create an object of formData 
        const formData = new FormData(); 
        
        // Update the formData object 
        formData.append( 
            "myFile", 
            this.state.selectedFile, 
            this.state.selectedFile.name 
        ); 
        
        // Details of the uploaded file 
        console.log(this.state.selectedFile); 
        
        // Request made to the backend api 
        // Send formData object 
        axios.post("api/uploadfile", formData); 
        }; 
        
        // File content to be displayed after 
        // file upload is complete 
        fileData = () => { 
        
        if (this.state.selectedFile) { 
            
            return ( 
            <div> 
                <h2>File Details:</h2> 
                <p><strong>File Name:</strong> {this.state.selectedFile.name}</p> 
                <p><strong>File Type:</strong> {this.state.selectedFile.type}</p> 
                <p> <strong>
                Last Modified:{" "} </strong>
                {this.state.selectedFile.lastModifiedDate.toDateString()} 
                </p> 
            </div> 
            ); 
        } else { 
            return ( 
            <div> 
                <br /> 
                <h4>Choose before Pressing the Upload button</h4> 
            </div> 
            ); 
        } 
        }; 
        
        render() { 
        
            return ( 
                <div>
                <div class="row">
  <div class="col-sm-4 filedesc">File Desc
  
  <i class="fa fa-upload" aria-hidden="true"></i>
  </div>
  <div class="col-sm-8">
  <div className="fileupload"> 
                    
                    <h3> 
                      File upload 
                    </h3> 
                    <div className="image-upload" > 
                        <input type="file"  onChange={this.onFileChange} /> 
                        <button className="btn btn-success" onClick={this.onFileUpload}> 
                          Upload! 
                        </button> 
                    </div> 
                  {this.fileData()} 
                  
                
  </div>
</div>
                </div> 
                </div> 
              ); 
        } 
}

export default DataUpload;