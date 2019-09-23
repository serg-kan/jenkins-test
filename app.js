const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// add, remove, read, list all

// add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  // properties from a builder
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  }
});

// remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title to remove',
      demanndOption: true,
      type: 'string'
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  }
})

// read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title to read',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    readNote(argv.title);
  }
});

// list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: () =>  {
    notes.listNotes();
  }
})

yargs.parse();

