# CircuitVerse Truth Table Filler - Console Script (Version 1)

## The Problem

Manually entering data into truth tables within CircuitVerse's Combinational Analysis tool can be a time-consuming and error-prone process. For larger circuits with many inputs and outputs, a single mistake during data entry can lead to an incorrect circuit design, causing significant frustration and rework.

## The Solution

This script provides a basic solution to streamline the process of filling output values in CircuitVerse's truth tables. By directly pasting the output data into the script, users can automate the cell-filling process, reducing the chances of manual errors and saving time.

## How to Use

1.  **Prepare Your Data:**
    * Your truth table output data needs to be formatted as a JavaScript array of arrays. Each inner array represents a row in the truth table, and each element within the inner array corresponds to an output cell in that row.
    * The values should be '0', '1', or 'x' (for don't care).

2.  **Edit the Script:**
    * Open the `fillCircuitVerseTruthTableWithPastedData.js`.
    * Locate the `tableOutputData` constant:
        ```javascript
        const tableOutputData = [
            // Paste your data here
            // Example:
            //   ['1', '1', '1', '1', 'x'],  // Row 0: T3=1, D2=1, D1=1, J0=1, K0=x
            //   ['1', '0', '0', 'x', '1'],  // Row 1: T3=1, D2=0, D1=0, J0=x, K0=1
            //   ['1', '0', '0', '0', 'x'],  // Row 2: T3=1, D2=0, D1=0, J0=0, K0=x
            //   ['1', '0', '0', 'x', '1'],  // Row 3: T3=1, D2=0, D1=0, J0=x, K0=1
            //   // ... and so on for all input combinations.

          ];
        ```
    * Replace the example data with your actual truth table output data.

3.  **Execute in CircuitVerse:**
    * Open your CircuitVerse project and navigate to the Combinational Analysis page where the truth table is visible.
    * Open your browser's developer console.
    * Navigate to the "Console" tab.
    * Paste the entire content of the `fillCircuitVerseTruthTableWithPastedData.js` script into the console and press Enter.

4.  **Verify:**
    * The script will attempt to fill the output cells in the visible truth table.
    * Check the console for any warnings or error messages.
    * Verify that the truth table in CircuitVerse has been filled correctly.

## Limitations

* Data input is manual (editing the script directly).
* Limited error handling beyond what's logged to the console.
* Requires the truth table to be visible and match the structure expected by the script (specifically `td.output` cells with `id` attributes corresponding to the row index).

This initial version served as a proof-of-concept for automating the truth table filling process, leading to the development of a more user-friendly Chrome Extension (Version 2).

Version 2: [Link to be shared..]