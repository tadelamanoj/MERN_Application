import React from 'react';
import ExcelJS from 'exceljs';
import axios from 'axios';
class ExcelDownload extends React.Component {
  handleDownload = async () => {
    // Sample JSON data
    try {
      const response = await axios.get('http://localhost:3001/posts', {
        responseType: 'json' // Set responseType to 'blob' for binary data
      });
      console.log("checking data",response.data)
      // Ensure that the response status is OK
      if (response.status === 200) {
        // Create a blob URL for the downloaded file
        // const url = window.URL.createObjectURL(new Blob([response.data], { type: 'text/csv' }));
      
      const jsonData = response.data;
      
      // Create a new workbook
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
      
      // Add headers
      const headers = Object.keys(jsonData[0]);
      worksheet.addRow(headers);
      
      // Add data
      jsonData.forEach(row => {
        worksheet.addRow(Object.values(row));
      });
      
      // Generate Excel file
      const buffer = await workbook.xlsx.writeBuffer();
      
      // Create blob from buffer
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'data.xlsx');
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
    } else {
      console.error('Error downloading CSV file: Invalid response status');
    }
  } catch (error) {
    console.error('Error downloading CSV file:', error);
  }
    };

  render() {
    return (
      <div>
        <button onClick={this.handleDownload}>Download Excel.!</button>
      </div>
    );
  }
}

export default ExcelDownload;
