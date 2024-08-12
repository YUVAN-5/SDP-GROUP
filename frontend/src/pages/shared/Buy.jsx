import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Slider from 'react-slick';
import { FiPlus } from 'react-icons/fi'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Modal from '../shared/Modal'; // Import the modal component

const carouselImages = [
  "https://ik.imagekit.io/1in7nqs7x/zoshua-colah-5ufwwSRjEp0-unsplash.jpg?updatedAt=1722218674116",
  "https://ik.imagekit.io/1in7nqs7x/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg?updatedAt=1722218671055",
  "https://ik.imagekit.io/1in7nqs7x/zzz-ictKkkzt4Bk-unsplash.jpg?updatedAt=1722218668399",
  "https://ik.imagekit.io/1in7nqs7x/jametlene-reskp-32hGYh_7gn4-unsplash.jpg?updatedAt=1722218694988"
];

export const Buy = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState('');
  const [showAddPropertyForm, setShowAddPropertyForm] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null); // State to manage the selected property
  const [newProperty, setNewProperty] = useState({
    title: '',
    location: '',
    price: '',
    image: '',
    description: ''
  });

  // Fetch properties on component mount
  useEffect(() => {
    axios.get('http://localhost:8080/api/properties/get')  
      .then(response => {
        if (Array.isArray(response.data)) {
          setProperties(response.data);
        } else {
          console.error('Unexpected response data format:', response.data);
          setProperties([]);
        }
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
        setProperties([]);
      });
  }, []);

  const filteredProperties = properties.filter(property =>
    property.location && property.location.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddProperty = () => {
    setShowAddPropertyForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProperty({
      ...newProperty,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting property:', newProperty);

    axios.post('http://localhost:8080/api/properties/post', {
      title: newProperty.title,
      price: parseFloat(newProperty.price),
      location: newProperty.location,
      image: newProperty.image,
      description: newProperty.description
    })
    .then(response => {
      console.log('Property added:', response.data);
      setProperties([...properties, response.data]);
      setShowAddPropertyForm(false);
      setNewProperty({
        title: '',
        location: '',
        price: '',
        image: '',
        description: ''
      });
    })
    .catch(error => {
      console.error('Error adding property:', error.response || error.message);
    });
  };

  const handleViewDetails = (property) => {
    setSelectedProperty(property); // Set the selected property to display in the modal
  };

  const closeModal = () => {
    setSelectedProperty(null); // Close the modal by resetting the selected property
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        
        {/* Carousel */}
        <div className="container mx-auto px-4 py-8">
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Carousel ${index}`} className="w-full h-[30rem] object-cover rounded-lg" />
              </div>
            ))}
          </Slider>
        </div>

        <div className="p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Our Real Estate Platform</h2>
          <p className="text-gray-700 text-lg w-[60rem]">
            Finding your dream home has never been easier. Browse through our extensive collection of properties and discover the perfect place for you and your family. Our platform offers detailed information, stunning images, and all the tools you need to make an informed decision.
          </p>
        </div>

        {/* Search Bar */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Find Your Dream Home</h2>
            <div className="flex items-center space-x-4">
              <Input
                type="text"
                placeholder="Search by location or property type"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-[60rem]"
              />
              <Button className="bg-blue-500 text-white hover:bg-blue-700">Search</Button>
              <div className='ml-[60rem]'>
              <Button 
                className="bg-green-500 text-white hover:bg-green-700 flex items-center space-x-2 ml-[60%]" 
                onClick={handleAddProperty}
              >
                <FiPlus className="mr-2" /> Add Property
              </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Add Property Form */}
        {showAddPropertyForm && (
          <div className="container mx-auto px-4 py-8">
            <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-4">Add New Property</h2>
              <div className="grid grid-cols-1 gap-6">
                <Input
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={newProperty.title}
                  onChange={handleInputChange}
                  required
                />

                <Input
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={newProperty.location}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="text"
                  placeholder="Price"
                  name="price"
                  value={newProperty.price}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="text"
                  placeholder="Image URL"
                  name="image"
                  value={newProperty.image}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={newProperty.description}
                  onChange={handleInputChange}
                  required
                />
                <Button className="bg-blue-500 text-white hover:bg-blue-700 mt-4">Add Property</Button>
              </div>
            </form>
          </div>
        )}

        {/* Property Listings */}
        <div className="container mx-auto px-4 py-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map(property => (
            <div key={property.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{property.title}</h3>
                <p className="text-gray-700">{property.location}</p>
                <p className="text-gray-900 font-bold">{property.price}</p>
                <p className="mt-2 text-gray-600">{property.description}</p>
                <Button className="mt-4 bg-blue-500 text-white hover:bg-blue-700" onClick={() => handleViewDetails(property)}>View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <Modal property={selectedProperty} onClose={closeModal} />
      )}
    </>
  );
};
