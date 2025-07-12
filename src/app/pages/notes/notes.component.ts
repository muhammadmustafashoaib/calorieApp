import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Note {
  id: number;
  text: string;
  date: Date;
  editing: boolean;
  editForm?: FormGroup;
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(10px)' }))
      ])
    ])
  ]
})
export class NotesComponent {
  notes: Note[] = [];
  noteForm: FormGroup;
  filterDateControl: FormControl = new FormControl('');
  private idCounter = 1;

  constructor(private fb: FormBuilder) {
    this.noteForm = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  deleteNote(noteId: number): void {
    this.notes = this.notes.filter(n => n.id !== noteId);
  }

  enableEdit(note: Note): void {
    note.editing = true;
    note.editForm = this.fb.group({
      text: [note.text, [Validators.required, Validators.minLength(1)]]
    });
  }

  saveEdit(note: Note): void {
    if (!note.editForm || note.editForm.invalid) return;

    const updatedText: string = note.editForm.value.text.trim();
    if (!updatedText) return;

    note.text = updatedText;
    note.editing = false;
    note.editForm = undefined;
  }

  cancelEdit(note: Note): void {
    note.editing = false;
    note.editForm = undefined;
  }

  filteredNotes(): Note[] {
    const dateValue = this.filterDateControl.value;
    if (!dateValue) return this.notes;

    const selectedDate = new Date(dateValue);
    return this.notes.filter(n =>
      n.date.toDateString() === selectedDate.toDateString()
    );
  }

  addNote(): void {
    if (this.noteForm.invalid) return;

    const text: string = this.noteForm.value.text.trim();
    if (!text) return;

    this.notes.push({
      id: this.idCounter++,
      text,
      date: new Date(),
      editing: false
    });

    this.noteForm.reset();

    setTimeout(() => {
      const el = document.querySelector('.notes-list');
      el?.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    });
  }
}
