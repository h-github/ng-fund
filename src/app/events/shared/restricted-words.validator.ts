import { FormControl } from '@angular/forms';

export function restrictedWords(words: string[]) {
  return (control: FormControl): { [key: string]: any } => {
    if (!words) {
      return null;
    }
    const invalidWord = words
      .map((w) => (control.value.includes(w) ? w : null))
      .filter((w) => w != null);

    return invalidWord && invalidWord.length
      ? { restrictedWords: invalidWord.join(', ') }
      : null;
  };
}

// one word
// private restrictedWords(control: FormControl): { [key: string]: any } {
//   return control.value.includes('foo') ? { restrictedWords: 'foo' } : null;
// }
