import { supabase } from '@/integrations/supabase/client';

// Products
export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

export async function getProductsByCategory(category: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

// Search Products
export async function searchProducts(query: string) {
  if (!query.trim()) {
    return [];
  }

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .or(`name.ilike.%${query}%,category.ilike.%${query}%,description.ilike.%${query}%`)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

// Wishlist
export async function getWishlist(userId: string) {
  const { data, error } = await supabase
    .from('wishlist')
    .select(`
      *,
      products (*)
    `)
    .eq('user_id', userId);
  
  if (error) throw error;
  return data;
}

export async function addToWishlist(userId: string, productId: string) {
  const { data, error } = await supabase
    .from('wishlist')
    .insert([{ user_id: userId, product_id: productId }])
    .select();
  
  if (error) throw error;
  return data;
}

export async function removeFromWishlist(userId: string, productId: string) {
  const { error } = await supabase
    .from('wishlist')
    .delete()
    .eq('user_id', userId)
    .eq('product_id', productId);
  
  if (error) throw error;
}

export async function isInWishlist(userId: string, productId: string) {
  const { data, error } = await supabase
    .from('wishlist')
    .select('id')
    .eq('user_id', userId)
    .eq('product_id', productId)
    .maybeSingle();
  
  if (error) throw error;
  return !!data;
}

// Cart
export async function getCartItems(userId: string) {
  const { data, error } = await supabase
    .from('cart_items')
    .select(`
      *,
      products (*)
    `)
    .eq('user_id', userId);
  
  if (error) throw error;
  return data;
}

export async function addToCart(userId: string, productId: string, quantity: number, size?: string) {
  // Check if item already exists
  const { data: existingItem } = await supabase
    .from('cart_items')
    .select('*')
    .eq('user_id', userId)
    .eq('product_id', productId)
    .eq('size', size || '')
    .maybeSingle();

  if (existingItem) {
    // Update quantity
    const { data, error } = await supabase
      .from('cart_items')
      .update({ quantity: existingItem.quantity + quantity })
      .eq('id', existingItem.id)
      .select();
    
    if (error) throw error;
    return data;
  } else {
    // Insert new item
    const { data, error } = await supabase
      .from('cart_items')
      .insert([{ user_id: userId, product_id: productId, quantity, size }])
      .select();
    
    if (error) throw error;
    return data;
  }
}

export async function updateCartItem(itemId: string, quantity: number) {
  const { data, error } = await supabase
    .from('cart_items')
    .update({ quantity })
    .eq('id', itemId)
    .select();
  
  if (error) throw error;
  return data;
}

export async function removeFromCart(itemId: string) {
  const { error } = await supabase
    .from('cart_items')
    .delete()
    .eq('id', itemId);
  
  if (error) throw error;
}

export async function clearCart(userId: string) {
  const { error } = await supabase
    .from('cart_items')
    .delete()
    .eq('user_id', userId);
  
  if (error) throw error;
}

// Orders
export async function createOrder(userId: string, items: any[], total: number) {
  const { data, error } = await supabase
    .from('orders')
    .insert([{ 
      user_id: userId, 
      items: JSON.stringify(items), 
      total,
      status: 'pending'
    }])
    .select();
  
  if (error) throw error;
  return data;
}

export async function getUserOrders(userId: string) {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}

// Contact Messages
export async function submitContactMessage(
  userId: string | null,
  firstName: string,
  lastName: string,
  email: string,
  subject: string,
  message: string
) {
  const { data, error } = await supabase
    .from('messages')
    .insert([{
      user_id: userId,
      first_name: firstName,
      last_name: lastName,
      email,
      subject,
      message
    }])
    .select();
  
  if (error) throw error;
  return data;
}

// Newsletter
export async function subscribeToNewsletter(email: string) {
  const { data, error } = await supabase
    .from('subscribers')
    .insert([{ email }])
    .select();
  
  if (error) throw error;
  return data;
}