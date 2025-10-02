"use client";

import {EditorContent, type JSONContent, useEditor, useEditorState} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import {Button} from "@/components/ui/button";
import {updateNote} from "@/server/notes";

interface RichTextboxEditorProps {
  content?: JSONContent[];
  noteId?: string;
}

export const RichTextboxEditor = ({content, noteId}: RichTextboxEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit, Document, Paragraph, Text],
    immediatelyRender: false,
    autofocus: true,
    editable: true,
    injectCSS: false,
    onUpdate: ({editor}) => {
      if (noteId) {
        const content = editor.getJSON();
        void updateNote(noteId, {content});
      }
    },
    content: content ?? {
      type: "doc",
      content: [
        {
          type: "heading",
          attrs: {level: 1},
          content: [{type: "text", text: "Getting started"}],
        },
        {
          type: "paragraph",
          content: [
            {type: "text", text: "Welcome to the "},
            {
              type: "text",
              text: "Simple Editor",
              marks: [{type: "italic"}],
            },
            {type: "text", text: " template! This template integrates "},
            {type: "text", text: "open source", marks: [{type: "bold"}]},
            {
              type: "text",
              text: " UI components and Tiptap extensions licensed under ",
            },
            {type: "text", text: "MIT", marks: [{type: "bold"}]},
            {type: "text", text: "."},
          ],
        },
        {
          type: "paragraph",
          content: [
            {type: "text", text: "Integrate it by following the "},
            {
              type: "text",
              text: "Tiptap UI Components docs",
              marks: [{type: "code"}],
            },
            {type: "text", text: " or using our CLI tool."},
          ],
        },
        {
          type: "codeBlock",
          content: [{type: "text", text: "npx @tiptap/cli init"}],
        },
        {
          type: "heading",
          attrs: {level: 2},
          content: [{type: "text", text: "Features"}],
        },
        {
          type: "blockquote",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "A fully responsive rich text editor with built-in support for common formatting and layout tools. Type markdown ",
                },
                {type: "text", text: "**", marks: [{type: "bold"}]},
                {type: "text", text: " or use keyboard shortcuts "},
                {type: "text", text: "⌘+B", marks: [{type: "code"}]},
                {type: "text", text: " for most all common markdown marks."},
              ],
            },
          ],
        },
      ],
    },
  });

  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      if (!ctx.editor) return {};
      return {
        isBold: ctx.editor?.isActive("bold"),
        canBold: ctx.editor?.can().chain().focus().toggleBold().run(),
        isItalic: ctx.editor?.isActive("italic"),
        canItalic: ctx.editor?.can().chain().focus().toggleItalic().run(),
        isStrike: ctx.editor?.isActive("strike"),
        canStrike: ctx.editor?.can().chain().focus().toggleStrike().run(),
        isCode: ctx.editor?.isActive("code"),
        canCode: ctx.editor?.can().chain().focus().toggleCode().run(),
        isParagraph: ctx.editor?.isActive("paragraph"),
        isHeading1: ctx.editor?.isActive("heading", {level: 1}),
        isHeading2: ctx.editor?.isActive("heading", {level: 2}),
        isHeading3: ctx.editor?.isActive("heading", {level: 3}),
        isHeading4: ctx.editor?.isActive("heading", {level: 4}),
        isHeading5: ctx.editor?.isActive("heading", {level: 5}),
        isHeading6: ctx.editor?.isActive("heading", {level: 6}),
        isBulletList: ctx.editor?.isActive("bulletList"),
        isOrderedList: ctx.editor?.isActive("orderedList"),
        isCodeBlock: ctx.editor?.isActive("codeBlock"),
        isBlockquote: ctx.editor?.isActive("blockquote"),
        canUndo: ctx.editor?.can().chain().focus().undo().run(),
        canRedo: ctx.editor?.can().chain().focus().redo().run(),
      };
    },
  });

  return (
    <div className="w-full max-w-7xl flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <Button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          disabled={!editorState?.canBold}
          className={editorState?.isBold ? 'is-active' : ''}
        >
          Bold
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          disabled={!editorState?.canItalic}
          className={editorState?.isItalic ? 'is-active' : ''}
        >
          Italic
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          disabled={!editorState?.canStrike}
          className={editorState?.isStrike ? 'is-active' : ''}
        >
          Strike
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleCode().run()}
          disabled={!editorState?.canCode}
          className={editorState?.isCode ? 'is-active' : ''}
        >
          Code
        </Button>
        <Button onClick={() => editor?.chain().focus().unsetAllMarks().run()}>Clear marks</Button>
        <Button onClick={() => editor?.chain().focus().clearNodes().run()}>Clear nodes</Button>
        <Button
          onClick={() => editor?.chain().focus().setParagraph().run()}
          className={editorState?.isParagraph ? 'is-active' : ''}
        >
          Paragraph
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleHeading({level: 1}).run()}
          className={editorState?.isHeading1 ? 'is-active' : ''}
        >
          H1
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleHeading({level: 2}).run()}
          className={editorState?.isHeading2 ? 'is-active' : ''}
        >
          H2
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleHeading({level: 3}).run()}
          className={editorState?.isHeading3 ? 'is-active' : ''}
        >
          H3
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleHeading({level: 4}).run()}
          className={editorState?.isHeading4 ? 'is-active' : ''}
        >
          H4
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleHeading({level: 5}).run()}
          className={editorState?.isHeading5 ? 'is-active' : ''}
        >
          H5
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleHeading({level: 6}).run()}
          className={editorState?.isHeading6 ? 'is-active' : ''}
        >
          H6
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className={editorState?.isBulletList ? 'is-active' : ''}
        >
          Bullet list
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          className={editorState?.isOrderedList ? 'is-active' : ''}
        >
          Ordered list
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
          className={editorState?.isCodeBlock ? 'is-active' : ''}
        >
          Code block
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
          className={editorState?.isBlockquote ? 'is-active' : ''}
        >
          Blockquote
        </Button>
        <Button onClick={() => editor?.chain().focus().setHorizontalRule().run()}>Horizontal rule</Button>
        <Button onClick={() => editor?.chain().focus().setHardBreak().run()}>Hard break</Button>
        <Button onClick={() => editor?.chain().focus().undo().run()} disabled={!editorState?.canUndo}>Undo</Button>
        <Button onClick={() => editor?.chain().focus().redo().run()} disabled={!editorState?.canRedo}>Redo</Button>
      </div>
      <div className="w-full max-w-7xl min-h-96 border border-gray-200 rounded-md p-4">
        <EditorContent
          editor={editor}
          className="focus:outline-none focus-visible:ring-0"
        />
      </div>
    </div>
  )
};