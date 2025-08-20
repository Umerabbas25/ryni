-- Add role column to profiles table
ALTER TABLE public.profiles 
ADD COLUMN role TEXT DEFAULT 'user';

-- Create an admin user profile (you'll need to create the auth user separately)
-- This is just for reference - you'd need to sign up normally and then update the role