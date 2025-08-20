-- Drop the problematic policies that cause infinite recursion
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can view their own orders or admins can view all orders" ON public.orders;
DROP POLICY IF EXISTS "Users can view their own messages or admins can view all messages" ON public.messages;

-- Create a security definer function to check admin role without RLS recursion
CREATE OR REPLACE FUNCTION public.is_admin(user_uuid uuid)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = user_uuid AND role = 'admin'
  );
$$;

-- Recreate the profiles policy without recursion
CREATE POLICY "Users can view their own profile or admins can view all"
ON public.profiles
FOR SELECT
TO authenticated
USING (
  auth.uid() = user_id 
  OR 
  public.is_admin(auth.uid())
);

-- Recreate orders policy using the security definer function
CREATE POLICY "Users can view their own orders or admins can view all orders"
ON public.orders
FOR SELECT
TO authenticated
USING (
  auth.uid() = user_id 
  OR 
  public.is_admin(auth.uid())
);

-- Recreate messages policy using the security definer function
CREATE POLICY "Users can view their own messages or admins can view all messages"
ON public.messages
FOR SELECT
TO authenticated
USING (
  auth.uid() = user_id 
  OR 
  public.is_admin(auth.uid())
);