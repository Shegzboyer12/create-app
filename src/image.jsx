import React from 'react';
import product from './product';

const Image = () => <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />;

export default Image;