import React, { useState } from "react";
import myspeare2 from "../images/myspeare2.png"

export default function Translate() {

    const [inputText, setInputText] = useState("")
    const [output, setOutput] = useState("")

    let url="https://api.funtranslations.com/translate/shakespeare.json"


    function translatedUrl (inputText) {
        var encodedURI = encodeURI(inputText);
        let translatedURL = `${url}?text=${encodedURI}`;
        return translatedURL;   
    }

    function handleTranslation() {

        fetch(translatedUrl(inputText))
        .then(response => response.json())
        
        .then(json => {
            var translatedText = json.contents.translated;
            setOutput(translatedText);

        })
        .catch(() => alert("Shakespeare hath no response! Try later..."))
        

    }

      function clearForm(){
        setInputText('')
        setOutput('')
      }

    return (
        <div className="Translate-container" id="Translate-container">

            <div className="Input" id="Input">
                <textarea
                    className="textarea1"
                    placeholder="Enter Text"
                    value={inputText}
                    onChange={(e) => setInputText(e.currentTarget.value)} 
                 >   
                </textarea>
                <button 
                    className="button-translate"
                    disabled={inputText === ""}
                    onClick={handleTranslation}
                    >
                        Translate!
                </button>
            </div>

            <img className="Image"  id="Image" src={myspeare2} alt=""/>

            <div className="Output" id="Output">
                <textarea
                    className="textarea2"
                    value={output}
                    onChange={(e) => setOutput(e.currentTarget.value)} 
                    >
                    </textarea>
                
                
                <button
                    className="button-clear"
                    onClick={clearForm}>
                  Clear
                </button>

            </div>
            
           

        </div>


    )
    }
