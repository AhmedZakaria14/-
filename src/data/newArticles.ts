import { BlogPost } from '../types';
import { batch1Articles } from './articlesBatch1';
import { batch2Articles } from './articlesBatch2';
import { batch3Articles } from './articlesBatch3';
import { batch4Articles } from './articlesBatch4';
import { batch5Articles } from './articlesBatch5';

export const newArticles: BlogPost[] = [
  ...batch1Articles,
  ...batch2Articles,
  ...batch3Articles,
  ...batch4Articles,
  ...batch5Articles
];

