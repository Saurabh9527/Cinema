
import OpenAI from 'openai';
import { openAPiKey } from './constant';

export const openai = new OpenAI({
  apiKey: openAPiKey, 
  dangerouslyAllowBrowser: true,
});