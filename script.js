document.addEventListener("DOMContentLoaded", function () {
    const codeLines = [
      "",
      "# Importing the portfolio module",
      "import pandas as portfolio",
      "",
      "# Reading the 'myprofile.csv' file",
      "print(\"Loading portfolio... \")",
      "df = portfolio.read_csv('myprofile.csv')",
      "",
      "# Retrieving details",
      "name = df['name'].iloc[0]",
      "title=df['title'].iloc[0]",
      "",
      "# Displaying the profile",
      'print(f"👋 Hi, I\'m {name}!")',
      'print(f"💡{title}!")'
    ];
  
 
    const outputElement = document.getElementById("code-output");
    const cursor = document.querySelector(".cursor");
    const outputText = document.getElementById("output-text");
  
    let currentLine = 0;
    let currentChar = 0;
  
    function typeCode() {
      if (currentLine < codeLines.length) {
        const line = codeLines[currentLine];
        if (currentChar < line.length) {
          outputElement.innerHTML += line[currentChar]; // Use innerHTML to render HTML tags
          currentChar++;
          setTimeout(typeCode, 1); // Speed of typing (lower = faster)
        } else {
          // If this is the last line, don't add a line break, just stop the cursor
          if (currentLine === codeLines.length - 1) {
            cursor.classList.add("static"); // Keep the cursor static at the end of the last line
            // Show the output after the code typing completes
            setTimeout(showOutput, 300); // Give a little delay before output appears
          } else {
            outputElement.innerHTML += "<br>"; // Add line break after each line
          }
          currentLine++;
          currentChar = 0;
          setTimeout(typeCode, 20); // Pause between lines
        }
      }
    }
  
    // Function to show the output text in the right section
    function showOutput() {
      outputText.innerHTML = `👋 Hi, I'm <span class="header-text-right-inner">Vibhanshu</span>!<br/>
        💡 <span class="header-text-right-inner">D</span>ata Science Aficionado`
      outputText.style.display = "block"; // Make the output visible
    }
  
    typeCode(); // Start the typing animation
  });