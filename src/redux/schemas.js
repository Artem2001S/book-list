import { schema } from 'normalizr';

const book = new schema.Entity('books');
export const bookListSchema = [book];
