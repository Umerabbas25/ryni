-- Create an enum for user roles first
CREATE TYPE public.user_role AS ENUM ('user', 'admin');

-- Add role column to profiles table with proper default
ALTER TABLE public.profiles 
ADD COLUMN role user_role DEFAULT 'user'::user_role;

-- Create an admin user manually in profiles table (since we can't directly create auth users)
-- You'll need to sign up normally first, then run this to make yourself admin:
-- UPDATE public.profiles SET role = 'admin' WHERE email = 'your-email@example.com';