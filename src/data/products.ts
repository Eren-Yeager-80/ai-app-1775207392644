interface Product {
      id: string;
      name: string;
      price: number;
      description: string;
      imageUrl: string;
    }

    export const products: Product[] = [
      {
        id: '1',
        name: 'Wireless Noise-Cancelling Headphones',
        price: 199.99,
        description: 'Immersive sound with industry-leading noise cancellation for an unparalleled listening experience.',
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06f2e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      },
      {
        id: '2',
        name: 'Smartwatch with Heart Rate Monitor',
        price: 149.99,
        description: 'Track your fitness, receive notifications, and stay connected with this sleek smartwatch.',
        imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80',
      },
      {
        id: '3',
        name: '4K Ultra HD Smart TV',
        price: 799.00,
        description: 'Vibrant colors and stunning clarity with a smart interface for endless entertainment.',
        imageUrl: 'https://images.unsplash.com/photo-1593784992987-a3ed06180598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      },
      {
        id: '4',
        name: 'Gaming Laptop RTX 4080',
        price: 1899.99,
        description: 'Unleash ultimate gaming power with a high-performance processor and advanced graphics.',
        imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3df9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      },
      {
        id: '5',
        name: 'Portable Bluetooth Speaker',
        price: 79.99,
        description: 'Crisp, powerful sound on the go with long-lasting battery life and waterproof design.',
        imageUrl: 'https://images.unsplash.com/photo-1589133486518-a6b16024840e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      },
      {
        id: '6',
        name: 'Compact Digital Camera',
        price: 299.99,
        description: 'Capture life\'s moments with stunning detail and vibrant colors with this easy-to-use camera.',
        imageUrl: 'https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      },
      {
        id: '7',
        name: 'Robot Vacuum Cleaner',
        price: 349.00,
        description: 'Intelligent navigation and powerful suction for automated home cleaning.',
        imageUrl: 'https://images.unsplash.com/photo-1588820302607-b3f9ff79ae6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      },
      {
        id: '8',
        name: 'Portable SSD 1TB',
        price: 119.99,
        description: 'Blazing-fast storage for all your files, photos, and videos in a compact design.',
        imageUrl: 'https://images.unsplash.com/photo-1592329712170-c7526012431b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      },
    ];

    export const getProductById = (id: string) => products.find(product => product.id === id);