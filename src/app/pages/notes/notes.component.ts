interface Note {
  id: number;
  text: string;
  editing: boolean;
}
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
 notes: Note[] = [];
  newNoteText = '';
  private idCounter = 1;

  addNote() {
    const text = this.newNoteText.trim();
    if (!text) return;

    this.notes.push({ id: this.idCounter++, text, editing: false });
    this.newNoteText = '';
  }

  deleteNote(noteId: number) {
    this.notes = this.notes.filter(n => n.id !== noteId);
  }

  enableEdit(note: Note) {
    note.editing = true;
  }

  saveEdit(note: Note) {
    note.text = note.text.trim();
    note.editing = false;
  }

  cancelEdit(note: Note) {
    note.editing = false;
  }
}
