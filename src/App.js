import React from 'react';
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    updatePreview() {
        document.getElementById("preview").innerHTML = DOMPurify.sanitize(marked.parse(document.getElementById("editor").value, { breaks: true }));
    }
    componentDidMount() {
        this.updatePreview();
    }
    render() {
        return (
            <div className="App">
                <div id="editor-container">
                    <textarea onChange={this.updatePreview} id="editor" rows="10" cols="80">
                        {
                            '# Welcome to my React Markdown Previewer! \n'+
                            '## write something in the textarea to change this preview\n'+
                            '\n'+
                            'Here are some things to try:\n'+
                            '[links](https://www.freecodecamp.org)\n '+
                            'Heres some , `<div>inline code</div>`, between 2 backticks.\n' +
                            'Or some multi-line code\n'+
                            '```\n' +
                            'function anotherExample(firstLine, lastLine) {\n' +
                            '  if (firstLine == \'```\' && lastLine == \'```\') {\n' +
                            '    return multiLineCode;\n' +
                            '  }\n'+
                            '}\n'+
                            '```\n'+
                            'You can also make text **bold**... whoa! or create\n'+
                            '> Block Quotes!\n'+
                            '\n'+
                            'You can create\n'+
                            '- lists.\n'+
                            '    - Some are bulleted.\n'+
                            '        - With different indentation levels.\n'+
                            '            - That look like this.\n'+
                            '![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)'
                        }
                    </textarea>
                </div>
                <div id="preview-container">
                    <div id="preview"></div>
                </div>
                <span id="credits">by <a href="https://noah-kleinert.de" target="_blank">Noah Kleinert</a></span>
            </div>
        );
    }
}

export default App;
