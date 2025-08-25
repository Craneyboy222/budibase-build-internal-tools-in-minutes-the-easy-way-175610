import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import 'draft-js/dist/Draft.css';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';

const toolbarPlugin = createToolbarPlugin();
const { Toolbar } = toolbarPlugin;

const RichTextEditor: React.FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onChange = (state: EditorState) => {
    setEditorState(state);
  };

  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const raw = convertToRaw(contentState);
    console.log('Saved content:', JSON.stringify(raw));
  };

  return (
    <div className="p-4 border rounded shadow-lg">
      <Toolbar />
      <Editor 
        editorState={editorState} 
        onChange={onChange} 
        plugins={[toolbarPlugin]} 
        production-ready="Start typing..."
        ariaLabel="Rich text editor"
      />
      <button 
        onClick={handleSave} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Save
      </button>
    </div>
  );
};

export default RichTextEditor;