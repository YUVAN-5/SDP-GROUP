import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import axios from 'axios';
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Properties = () => {
    const [open, setOpen] = useState(false);
    const [properties, setProperties] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            location: e.target.location.value,
            ownerName: e.target.ownerName.value,
            contact: e.target.contact.value,
            price: e.target.price.value,
            squareFt: e.target.squareFt.value,
        };

        try {
            // Send form data to backend to be saved in the database
            const response = await axios.post('http://localhost:8080/api/properties/add', formData);

            // Extract the saved property data from the response
            const savedProperty = response.data;

            // Update the state to include the new property, ensuring it displays in the UI
            setProperties(prevState => [...prevState, savedProperty]);

            alert('Property Added Successfully');
            setOpen(false); // Close the form after successful submission
        } catch (error) {
            console.error('There was an error adding the property!', error);
            alert('Error adding property. Please try again.');
        }
    };

    const renderProperties = (properties) => {
        return properties.map((property) => (
            <div key={property.id} style={{
                border: '1px solid #e5e7eb',
                padding: '8px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                marginBottom: '16px',
            }}>
                <div style={{ padding: '8px' }}>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '4px' }}>{property.location}</h3>
                    <p style={{ color: '#6b7280' }}>Owner: {property.ownerName}</p>
                    <p style={{ color: '#6b7280' }}>Contact: {property.contact}</p>
                    <p style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '14px' }}>Price: {property.price}</p>
                    <p style={{ color: '#6b7280' }}>Square Ft: {property.squareFt}</p>
                </div>
            </div>
        ));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px' }}>
                <PlusCircle
                    onClick={() => setOpen(true)}
                    style={{ color: '#3b82f6', marginLeft: '16px', cursor: 'pointer' }}
                    size={24}
                />
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '16px',
                width: '100%',
            }}>
                {renderProperties(properties)}
            </div>

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent style={{ width: '100%', maxWidth: '400px', margin: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <SheetTitle>Add Property</SheetTitle>
                    </div>
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px', paddingTop: '16px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Label htmlFor="location">Location</Label>
                            <Input id="location" required />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Label htmlFor="ownerName">Owner Name</Label>
                            <Input id="ownerName" required />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Label htmlFor="contact">Contact</Label>
                            <Input id="contact" required />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Label htmlFor="price">Price</Label>
                            <Input id="price" required />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Label htmlFor="squareFt">Square Ft</Label>
                            <Input id="squareFt" required />
                        </div>
                        <SheetFooter style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                            <Button
                                style={{ width: '50%', backgroundColor: '#f87171', borderColor: '#f87171' }}
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                style={{ width: '50%' }}
                            >
                                Save changes
                            </Button>
                        </SheetFooter>
                    </form>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default Properties;
