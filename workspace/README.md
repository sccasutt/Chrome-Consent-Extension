Given the requirements and the constraints, we will need to use JavaScript to create a Chrome extension. The extension will need to interact with the OpenAI API to use the GPT-3 model for summarizing the terms and conditions. 

Here are the core files, classes, and functions we will need:

1. `manifest.json`: This is the configuration file for the Chrome extension. It will specify the permissions needed, the scripts to be run, and other metadata about the extension.

2. `background.js`: This is the background script for the extension. It will contain the logic for detecting when a website is asking for user consent to data usage policies and triggering the summarization process.

3. `popup.html` and `popup.js`: These files will define the popup that displays the summarized terms and conditions. The HTML file will define the structure of the popup, and the JavaScript file will handle the interaction with the user.

4. `openai.js`: This file will contain the code for interacting with the OpenAI API. It will send the terms and conditions to the API and receive the summarized version.

5. `content.js`: This file will contain the code for extracting the terms and conditions from the webpage.

Now, let's write the code for each file.

manifest.json
