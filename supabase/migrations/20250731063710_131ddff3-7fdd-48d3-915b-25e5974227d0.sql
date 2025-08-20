-- Add role column to profiles table
ALTER TABLE public.profiles 
ADD COLUMN role TEXT DEFAULT 'user';

-- Create an enum for user roles (optional, but good practice)
CREATE TYPE public.user_role AS ENUM ('user', 'admin');

-- Update the role column to use the enum
ALTER TABLE public.profiles 
ALTER COLUMN role TYPE user_role USING role::user_role;

-- Create an admin user (you can change this email/password)
-- First we need to create the auth user, then update the profile
INSERT INTO auth.users (email, encrypted_password, email_confirmed_at, created_at, updated_at)
VALUES (
  'admin@example.com',
  crypt('admin123', gen_salt('bf')),
  now(),
  now(),
  now()
);

-- Update profiles table to set admin role for the admin user
UPDATE public.profiles 
SET role = 'admin' 
WHERE email = 'admin@example.com';