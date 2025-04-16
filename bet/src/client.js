import { createClient } from '@supabase/supabase-js'

const URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
console.log('Supabase URL:', URL);
console.log('Supabase API Key:', API_KEY);

export const supabase = createClient(URL, API_KEY);