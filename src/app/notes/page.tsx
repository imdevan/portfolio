import { Notes } from "_c/notes";
import { getAllNotes } from "@/lib/api";
import Header from '_c/header';

export default function NotesPage() {
  const allNotes = getAllNotes();

  return (
    <>
      <Header />
      {allNotes.length > 0 && <Notes notes={allNotes} />}
    </>
  );
} 