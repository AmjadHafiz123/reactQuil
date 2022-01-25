/*
import '../styles/Style.css';
import React, { Component } from 'react';
import ReactQuill from 'react-quill';
//import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
class QuilEditor extends Component{

	
	
	constructor(props) {
		
		super(props);

		
		var icons = ReactQuill.import("ui/icons");
		icons["undo"] = `<svg viewbox="0 0 18 18">
		<polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
		<path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
	  </svg>`;
		icons["redo"] = `<svg viewbox="0 0 18 18">
		<polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
		<path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
	  </svg>`;

		
		this.modules = {
			history: {
                delay: 1000,
                maxStack: 100,
                userOnly: false
              },
			  toolbar: [
				[{ 'font': [] }],
				[{ 'size': ['small', false, 'large', 'huge'] }],
				['bold', 'italic', 'underline'],
				[{'list': 'ordered'}, {'list': 'bullet'}],
				[{ 'script': 'sub' }, { 'script': 'super' }], 
				[{ 'align': [] }],
				[{ 'color': [] }, { 'background': [] }],
				[{'indent': '-1'}, {'indent': '+1'}],
				['link', 'image'],
				['clean'],
				['undo'],['redo']
			  ],
			  
			  
		  };
  
		  this.formats = [
			  'font',
			  'size',
			  'bold', 'italic', 'underline',
			  'list', 'bullet',
			  'script',
			  'align',
			  'color', 'background',
			  'indent',
			  'link', 'image',
			  'clean',
			  //'undo','redo'
			];
  
			this.state = {
			  comments: ''
		  }
  
		  this.rteChange = this.rteChange.bind(this);
	  }
  
	  rteChange = (content, delta, source, editor) => {
		  console.log(editor.getHTML()); // rich text
		  console.log(editor.getText()); // plain text
		  console.log(editor.getLength()); // number of characters
	  }
  
	  myUndo = () => {
		  let myEditor = this.reactQuillRef.getEditor();
		  return myEditor.history.undo();
	  }
  
	  myRedo = () => {
		  let myEditor = this.reactQuillRef.getEditor();
		  return myEditor.history.redo();
	  }
	  render() {
  
		  
  
		  return (
			<div>
			  <ReactQuill theme="snow"  modules={this.modules}
				  formats={this.formats} onChange={this.rteChange}
			  value={this.state.comments || ''}/>
			</div>
		  );
	  }
  
  }
  
	export default QuilEditor;
	*/