import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://pudhihnbhrzzwrxozojf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1ZGhpaG5iaHJ6endyeG96b2pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4OTg0NDAsImV4cCI6MjAzNDQ3NDQ0MH0.dLWwrO5ROLXY-k1REpORxHcMoDrnIYhoPDHqM_b78sU')