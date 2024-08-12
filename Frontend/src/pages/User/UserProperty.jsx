import React, { useState } from 'react';

const UserProperty = () => {
    const [activeTab, setActiveTab] = useState('for-sale');

    const forSaleImages = [
        { src: 'https://ik.imagekit.io/rqds6dyata/lycs-architecture-kUdbEEMcRwE-un.jpg?updatedAt=1722102898926', alt: 'Mumbai', details: '3 Beds • 2 Baths • 1500 sqft', price: '₹2,20,00,000', location: 'Mumbai', owner: 'Mr. A', contact: '9876543210' },
        { src: 'https://ik.imagekit.io/rqds6dyata/vita-vilcina-KtOid0FLjqU-unsplas.jpg?updatedAt=1722102898867', alt: 'Delhi', details: '4 Beds • 3 Baths • 2000 sqft', price: '₹3,00,00,000', location: 'Delhi', owner: 'Mr. B', contact: '9876543211' },
        { src: 'https://ik.imagekit.io/rqds6dyata/pexels-harrisonhaines-6292341%20(1).jpg?updatedAt=1722102898637', alt: 'Bangalore', details: '2 Beds • 1 Bath • 1200 sqft', price: '₹1,80,00,000', location: 'Bangalore', owner: 'Ms. C', contact: '9876543212' },
        { src: 'https://ik.imagekit.io/rqds6dyata/pexels-ahmet-cotur-776571149-190.jpg?updatedAt=1722102898601', alt: 'Chennai', details: '5 Beds • 4 Baths • 3000 sqft', price: '₹4,50,00,000', location: 'Chennai', owner: 'Ms. D', contact: '9876543213' },
        { src: 'https://ik.imagekit.io/rqds6dyata/home.jpeg?updatedAt=1722087843585', alt: 'Hyderabad', details: '3 Beds • 2 Baths • 1800 sqft', price: '₹2,60,00,000', location: 'Hyderabad', owner: 'Mr. E', contact: '9876543214' },
        { src: 'https://ik.imagekit.io/rqds6dyata/home.jpeg?updatedAt=1722087843585', alt: 'Pune', details: '4 Beds • 3 Baths • 2200 sqft', price: '₹3,10,00,000', location: 'Pune', owner: 'Ms. F', contact: '9876543215' },
        { src: 'https://ik.imagekit.io/rqds6dyata/image%20(9).png?updatedAt=1722086536199', alt: 'Kolkata', details: '2 Beds • 2 Baths • 1400 sqft', price: '₹2,00,00,000', location: 'Kolkata', owner: 'Mr. G', contact: '9876543216' },
        { src: 'https://ik.imagekit.io/rqds6dyata/image%20(7).png?updatedAt=1722086451704', alt: 'Ahmedabad', details: '3 Beds • 3 Baths • 1600 sqft', price: '₹2,40,00,000', location: 'Ahmedabad', owner: 'Ms. H', contact: '9876543217' },
    ];

    const forRentImages = [
        { src: 'https://ik.imagekit.io/rqds6dyata/istockphoto-488120139-612x612.jpg?updatedAt=1722085961645', alt: 'Gurgaon', details: '3 Beds • 2 Baths • 1500 sqft', price: '₹1,50,000/month', location: 'Gurgaon', owner: 'Mr. I', contact: '9876543218' },
        { src: 'https://ik.imagekit.io/rqds6dyata/diamond-manor-projects-500x500.webp?updatedAt=1722085831192', alt: 'Noida', details: '4 Beds • 3 Baths • 2000 sqft', price: '₹2,00,000/month', location: 'Noida', owner: 'Ms. J', contact: '9876543219' },
        { src: 'https://ik.imagekit.io/rqds6dyata/image%20(5).png?updatedAt=1722085653332', alt: 'Jaipur', details: '2 Beds • 1 Bath • 1200 sqft', price: '₹1,20,000/month', location: 'Jaipur', owner: 'Mr. K', contact: '9876543220' },
        { src: 'https://ik.imagekit.io/rqds6dyata/image%20(4).png?updatedAt=1722085492146', alt: 'Lucknow', details: '5 Beds • 4 Baths • 3000 sqft', price: '₹2,50,000/month', location: 'Lucknow', owner: 'Ms. L', contact: '9876543221' },
        { src: 'https://ik.imagekit.io/rqds6dyata/lycs-architecture-kUdbEEMcRwE-unsplash.jpg?updatedAt=1722084882490', alt: 'Chandigarh', details: '3 Beds • 2 Baths • 1800 sqft', price: '₹1,80,000/month', location: 'Chandigarh', owner: 'Mr. M', contact: '9876543222' },
        { src: 'https://ik.imagekit.io/rqds6dyata/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg?updatedAt=1721904965981', alt: 'Indore', details: '4 Beds • 3 Baths • 2200 sqft', price: '₹2,20,000/month', location: 'Indore', owner: 'Ms. N', contact: '9876543223' },
        { src: 'https://ik.imagekit.io/rqds6dyata/house-1836070.jpg?updatedAt=1721971607755', alt: 'Bhopal', details: '2 Beds • 2 Baths • 1400 sqft', price: '₹1,40,000/month', location: 'Bhopal', owner: 'Mr. O', contact: '9876543224' },
        { src: 'https://ik.imagekit.io/rqds6dyata/image%20(27).png?updatedAt=1722176970875', alt: 'Vadodara', details: '3 Beds • 3 Baths • 1600 sqft', price: '₹1,60,000/month', location: 'Vadodara', owner: 'Ms. P', contact: '9876543225' },
    ];

    const renderImages = (images) => {
        return images.map((image, index) => (
            <div key={index} className="border p-2 rounded-lg shadow-md">
                <img src={image.src} alt={image.alt} className="w-full h-48 object-cover mb-2 rounded-t-lg" />
                <div className="p-2">
                    <h3 className="font-bold mb-1">{image.alt}</h3>
                    <p className="text-gray-400">{image.details}</p>
                    <p className="text-red-500 font-bold text-sm">{image.price}</p>
                    <p className="text-gray-500 text-xs">Location: {image.location}</p>
                    <p className="text-gray-500 text-xs">Owner: {image.owner}</p>
                    <p className="text-gray-500 text-xs">Contact: {image.contact}</p>
                </div>
            </div>
        ));
    };

    return (
        <div className="p-8">
            <div className="flex justify-center mb-4">
                <button 
                    className={`p-2 ${activeTab === 'for-sale' ? 'text-blue-500 font-bold' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('for-sale')}
                >
                    For Sale
                </button>
                <span className="mx-4 text-gray-400">|</span>
                <button 
                    className={`p-2 ${activeTab === 'for-rent' ? 'text-blue-500 font-bold' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('for-rent')}
                >
                    For Rent
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {activeTab === 'for-sale' ? renderImages(forSaleImages) : renderImages(forRentImages)}
            </div>
        </div>
    );
};

export default UserProperty;
