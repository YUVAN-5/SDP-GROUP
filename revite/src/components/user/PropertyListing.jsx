import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import { useTheme } from '../ThemeProvider';
import Select from 'react-select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PropertyListing = () => {
  const { theme, toggleTheme } = useTheme();
  const [searchFilters, setSearchFilters] = useState({
    property: '',
    bhk: '',
    priceRange: [0, 1000000],
    location: '',
    category: 'all',
    type: 'all',
  });

  const properties = [
    { id: 1, name: 'Luxury Villa', price: 500000, city: 'Los Angeles', state: 'CA', bhk: '4', category: 'house', type: 'for sale', image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Modern Apartment', price: 300000, city: 'New York', state: 'NY', bhk: '3', category: 'apartment', type: 'for rent', image: 'https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA=' },
    { id: 3, name: 'Spacious Land', price: 200000, city: 'Austin', state: 'TX', bhk: '0', category: 'land', type: 'for sale', image: 'https://t4.ftcdn.net/jpg/06/12/19/25/360_F_612192565_Mz1yC42O053lBDFajwdBL6oxRlYilfvB.jpg' },
    { id: 4, name: 'Beach House', price: 700000, city: 'Miami', state: 'FL', bhk: '5', category: 'house', type: 'for rent', image: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_640.jpg' },
    { id: 5, name: 'City Apartment', price: 350000, city: 'San Francisco', state: 'CA', bhk: '2', category: 'apartment', type: 'for sale', image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg' },
    { id: 6, name: 'Country House', price: 450000, city: 'Nashville', state: 'TN', bhk: '4', category: 'house', type: 'for sale', image: 'https://png.pngtree.com/thumb_back/fh260/background/20230616/pngtree-exterior-design-of-a-modern-house-in-the-city-a-3d-image_3606113.jpg' },
    { id: 7, name: 'Penthouse', price: 800000, city: 'Chicago', state: 'IL', bhk: '3', category: 'apartment', type: 'for rent', image: 'https://static.mansionglobal.com/production/media/article-images/0566aff006431e07844b70d837ebcdef/large_Royal-Atlantis-Residences-designed-by-KPF-Associates.jpg' },
    { id: 8, name: 'Downtown Land', price: 250000, city: 'Seattle', state: 'WA', bhk: '0', category: 'land', type: 'for sale', image: 'https://photos.zillowstatic.com/fp/01183fad4ecf7db37c5d25f18b2fb44d-p_e.jpg' },
    { id: 9, name: 'Suburban House', price: 550000, city: 'Dallas', state: 'TX', bhk: '5', category: 'house', type: 'for sale', image: 'https://img.freepik.com/premium-photo/big-american-house-generative-ai_170984-9624.jpg' },
  ];

  const cityOptions = [
    { value: 'los angeles', label: 'Los Angeles' },
    { value: 'new york', label: 'New York' },
    { value: 'san francisco', label: 'San Francisco' },
    // Add more cities as needed
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchFilters({ ...searchFilters, [name]: value });
  };

  const handleSelectChange = (selectedOption, actionMeta) => {
    setSearchFilters({ ...searchFilters, [actionMeta.name]: selectedOption ? selectedOption.value : '' });
  };

  const handleSliderChange = (value) => {
    setSearchFilters({ ...searchFilters, priceRange: value });
  };

  const filteredProperties = properties.filter((property) => {
    return (
      (searchFilters.property === '' || property.name.toLowerCase().includes(searchFilters.property.toLowerCase())) &&
      (searchFilters.bhk === '' || property.bhk === searchFilters.bhk) &&
      (property.price >= searchFilters.priceRange[0] && property.price <= searchFilters.priceRange[1]) &&
      (searchFilters.location === '' || property.city.toLowerCase().includes(searchFilters.location.toLowerCase()) || property.state.toLowerCase().includes(searchFilters.location.toLowerCase())) &&
      (searchFilters.category === 'all' || property.category === searchFilters.category) &&
      (searchFilters.type === 'all' || property.type === searchFilters.type)
    );
  });

  return (
    <div className={`min-h-screen p-4 ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Property Listings</h1>
        {/* <button onClick={toggleTheme} className="bg-blue-500 text-white px-4 py-2 rounded-lg">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button> */}
      </div>
      <div className="flex flex-wrap justify-between items-center mb-6">
        {/* <input
          type="text"
          name="property"
          placeholder="Search property"
          value={searchFilters.property}
          onChange={handleInputChange}
          className={`p-2 rounded-lg border border-gray-100  ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-white'} mr-2`}
        /> */}
        <Select
          name="location"
          options={cityOptions}
          placeholder="City or State"
          onChange={handleSelectChange}
          className="w-1/4 mb-2 ml-2 "
          theme={(selectTheme) => ({
            ...selectTheme,
            colors: {
              ...selectTheme.colors,
              primary: theme === 'dark' ? 'blue' : 'gray', 
            //   neutral0: theme === 'dark' ? 'gray' : 'white',
            //   neutral80: theme === 'dark' ? 'white' : 'gray',
            },
          })}
        />
        <input
          type="text"
          name="bhk"
          placeholder="BHK"
          value={searchFilters.bhk}
          onChange={handleInputChange}
          className={`p-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} mr-2`}
        />
        <div className="flex items-center w-1/5 mb-2">
          <span className="mr-2">Price:</span>
          <Slider
            range
            min={0}
            max={1000000}
            step={10000}
            defaultValue={searchFilters.priceRange}
            onChange={handleSliderChange}
            className="w-1/2 mr-2"
          />
          <span>{`${searchFilters.priceRange[0]} - ${searchFilters.priceRange[1]}`}</span>
        </div>
        
        <select
          name="category"
          value={searchFilters.category}
          onChange={handleInputChange}
          className={`p-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} mr-2`}
        >
          <option value="all">All Categories</option>
          <option value="land">Land</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
        </select>
        <select
          name="type"
          value={searchFilters.type}
          onChange={handleInputChange}
          className={`p-2 mr-5 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
        >
          <option value="all">All Types</option>
          <option value="for sale">For Sale</option>
          <option value="for rent">For Rent</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyListing;
