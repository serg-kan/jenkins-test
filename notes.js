const fs = require('fs');
const chalk = require('chalk');

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.bgBlue('Your notes:\n'));
  notes.forEach((note) => {
    console.log(note);
  })
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if(!duplicateNote) {
    notes.push({
      title,
      body,
    });

    console.log(chalk.bgGreen('New note added'));
  } else {
    console.log(chalk.bgRed('Note title taken!'));
  }

  saveNotes(notes);
}

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if(note) {
    console.log('Your note:\n');
    console.log(note);
  } else {
    console.log('Not found');
  }

}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJsON);
}

const loadNotes = () => {
  try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();

    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter(function (note) {
    return note.title !== title;
  });

  if(newNotes.length !== notes.length) {
    console.log(chalk.bgGreen('Note removed'));
    saveNotes(newNotes);

  } else {
    console.log(chalk.bgRed('No note found'));
  }
}

module.exports = {
  listNotes,
  readNote,
  addNote,
  removeNote,
}