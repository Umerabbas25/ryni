import { supabase } from '@/integrations/supabase/client';

// Admin-specific functions for managing the store

// Products Admin Functions
export async function getAllProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

export async function createProduct(product: {
  name: string;
  category: string;
  price: number;
  original_price?: number;
  image_url: string;
  description: string;
  sizes?: string[];
  is_new?: boolean;
}) {
  const { data, error } = await supabase
    .from('products')
    .insert([product])
    .select();
  
  if (error) throw error;
  return data;
}

export async function updateProduct(id: string, updates: any) {
  const { data, error } = await supabase
    .from('products')
    .update(updates)
    .eq('id', id)
    .select();
  
  if (error) throw error;
  return data;
}

export async function deleteProduct(id: string) {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
}

// Orders Admin Functions
export async function getAllOrders() {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  
  // Get user profiles separately
  if (data && data.length > 0) {
    const userIds = [...new Set(data.map(order => order.user_id))];
    const { data: profiles } = await supabase
      .from('profiles')
      .select('user_id, display_name, email')
      .in('user_id', userIds);
    
    // Merge profiles with orders
    return data.map(order => ({
      ...order,
      profile: profiles?.find(p => p.user_id === order.user_id)
    }));
  }
  
  return data;
}

export async function updateOrderStatus(id: string, status: string) {
  const { data, error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', id)
    .select();
  
  if (error) throw error;
  return data;
}

// Users Admin Functions
export async function getAllUsers() {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

export async function updateUserRole(userId: string, role: string) {
  const { data, error } = await supabase
    .from('profiles')
    .update({ role })
    .eq('user_id', userId)
    .select();
  
  if (error) throw error;
  return data;
}

// Messages Admin Functions
export async function getAllMessages() {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

// Note: is_read column would need to be added to messages table via migration
// For now, we'll remove this function as it's not implemented
// export async function markMessageAsRead(id: string) {
//   const { data, error } = await supabase
//     .from('messages')
//     .update({ is_read: true })
//     .eq('id', id)
//     .select();
//   
//   if (error) throw error;
//   return data;
// }