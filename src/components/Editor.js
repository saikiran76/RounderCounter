import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditorProvider,
  RichTextField,
} from "mui-tiptap";
import { setText, setUnsavedChanges } from "../utils/EditorSlice";

function Editor() {
  const dispatch = useDispatch();
  const editorState = useSelector((state) => state.editor);

  const editor = useEditor({
    extensions: [StarterKit],
    content: editorState?.text || '<p>Hello <b>world</b>!</p>',
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      dispatch(setText(content));
      dispatch(setUnsavedChanges(true))
    },
  });

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (editorState.unsavedChanges) {
        event.preventDefault();
        event.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [editorState.unsavedChanges]);

  return (
    <div className="w-full text-[#fff] border-[#1B3D58] border-l-[0.25rem] border-r-[0.25rem] border-t-[0.25rem] border-b-[0.25rem] overflow-hidden rounded-lg m-3 shadow-[#F472B6] shadow-lg">
      <RichTextEditorProvider editor={editor}>
        <RichTextField
          controls={
            <MenuControlsContainer>
              <MenuSelectHeading />
              <MenuDivider />
              <MenuButtonBold />
              <MenuButtonItalic />
              {/* Add more controls of your choosing here */}
            </MenuControlsContainer>
          }
        />
      </RichTextEditorProvider>
    </div>
  );
}

export default Editor;
