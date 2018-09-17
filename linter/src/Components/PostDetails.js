import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery';
import './Styling/PostDetails.css';

class PostDetails extends Component {
    constructor(props) {
        super(props);
        this.applyHighlights = this.applyHighlights.bind(this);
    }

    applyHighlights(event) {
        this.props.vetoedWords(event.target.value);
        this.props.sentiment(event.target.value);
        var termRay = [];

        const { highlightCategories } = this.props;
        if (highlightCategories != null) {
            for(var category in highlightCategories) {
                for(var i = 0; i < highlightCategories[category].length; i++) {
                    termRay.push(highlightCategories[category][i]);
                }
            }
    
            var source = event.target.value;
            var words = source.split(' ');
            var output = '';
            for(var i = 0; i < words.length; i++) {
                var word = words[i];
                var wordToCheck = word.replace(/[.,\#!$%\^&\*;:{}=\_`~()]/g,"").toLowerCase();
                if ($.inArray(wordToCheck, termRay) >= 0) {
                    output += '<mark>' + word + '</mark> ';
                } else {
                    if ($.inArray(wordToCheck, termRay) >= 0) {
                        output += '<mark>' + word + '</mark> ';
                    } else {
                        output += word + ' ';
                    }
                } 
            }  
            document.getElementById("output").innerHTML = output; 
        }
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card results">
                            <div className="card-header title">Job Description</div>
                            <textarea className="highlight form-control" onChange={this.applyHighlights} rows="20"></textarea>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card results">
                            <div className="card-header title">Output</div>
                            <div className="card-body">
                                <div id="output" className="highlighted"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostDetails;
