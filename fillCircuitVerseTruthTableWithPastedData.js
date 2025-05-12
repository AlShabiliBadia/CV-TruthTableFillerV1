function fillCircuitVerseTruthTableWithPastedData() {

    const tableOutputData = [
    // Paste your truth table output data here.
    // Each inner array represents one row of output values from your truth table.
    // The order of values in an inner array must match the order of your output columns
    // as they appear in CircuitVerse Combinational Analysis tool.

    // Example:
    // If your outputs in CircuitVerse are, in order: T3, D2, D1, J0, K0

    // Then your data might look like this:
    //   ['1', '1', '1', '1', 'x'],  // Row 0: T3=1, D2=1, D1=1, J0=1, K0=x
    //   ['1', '0', '0', 'x', '1'],  // Row 1: T3=1, D2=0, D1=0, J0=x, K0=1
    //   ['1', '0', '0', '0', 'x'],  // Row 2: T3=1, D2=0, D1=0, J0=0, K0=x
    //   ['1', '0', '0', 'x', '1'],  // Row 3: T3=1, D2=0, D1=0, J0=x, K0=1
    //   // ... and so on for all input combinations.

    // Tip: This format is easy to prepare if you have your data in a CSV file.
    // Ensure your CSV columns are in the same order as your CircuitVerse outputs.
    // Then, for each row from the CSV, format it as: ['val1', 'val2', 'val3', ...],
    // making sure '0', '1', or 'x' are enclosed in single quotes.

    // --- REPLACE THE EXAMPLE LINES WITH YOUR ACTUAL DATA ---
    // (The script will warn you if this array is left empty)
      ];
  
    if (tableOutputData.length === 0) {
      alert("Please paste your data into the script.");
      console.warn("The 'tableOutputData' array is empty.");
      return;
    }
  
    function setCellValue(cell, targetValue) {
      if (targetValue === undefined || targetValue === null) {
          console.warn('Target value is undefined or null for cell. Skipping.', cell);
          return;
      }
      const safeTargetValue = targetValue.toString().toLowerCase().trim();
      if (!['0', '1', 'x'].includes(safeTargetValue)) {
        console.warn(`Invalid target value: "${targetValue}" for cell. Skipping. Must be '0', '1', or 'x'.`, cell);
        return;
      }
  
      let currentValue = cell.innerText.trim().toLowerCase();
      let clicks = 0;
  
      while (currentValue !== safeTargetValue && clicks < 3) {
        cell.click(); 
        currentValue = cell.innerText.trim().toLowerCase();
        clicks++;
      }
  
      if (currentValue !== safeTargetValue) {
        console.warn(`Could not set cell to ${safeTargetValue} after ${clicks} clicks. Current: ${currentValue}`, cell);
      }
    }
  
    const tableBody = document.querySelector('table.content-table > tbody');
    if (!tableBody) {
      console.error('Truth table body not found. Make sure you are on the Combinational Analysis page with the table visible.');
      alert('Truth table body not found. Ensure the Combinational Analysis tool and its table are visible.');
      return;
    }
  
    tableOutputData.forEach((rowDataFromScript, rowIndex) => {
  
      const outputCellsInHTMLRow = tableBody.querySelectorAll(`td.output[id="${rowIndex}"]`);
  
      if (outputCellsInHTMLRow.length === 0) {
  
        return; 
      }
  
      if (rowDataFromScript.length !== outputCellsInHTMLRow.length) {
        console.warn(`Data mismatch for row ${rowIndex}: Your script data has ${rowDataFromScript.length} columns, but table has ${outputCellsInHTMLRow.length} output cells. Check your pasted data and table setup.`);
  
      }
  
      const numberOfColumnsToFill = Math.min(rowDataFromScript.length, outputCellsInHTMLRow.length);
      for (let columnIndex = 0; columnIndex < numberOfColumnsToFill; columnIndex++) {
        const cell = outputCellsInHTMLRow[columnIndex];
        const targetValue = rowDataFromScript[columnIndex];
        if (cell) {
          setCellValue(cell, targetValue);
        } else {
          console.warn(`HTML Cell not found for row ${rowIndex}, column index ${columnIndex}.`);
        }
      }
    });
  
    console.log('Truth table fill attempt from pasted data complete. Please verify the results.');
  }
  
  fillCircuitVerseTruthTableWithPastedData();