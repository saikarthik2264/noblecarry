// Format price in Indian Rupees
export const formatPrice = (price: number): string => {
    return `₹${price.toLocaleString('en-IN')}`;
};
