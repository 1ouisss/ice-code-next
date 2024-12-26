'use client';

import { useState } from 'react';

export default function QuestionnairePage() {
  const [formData, setFormData] = useState({
    medications: '',
    allergies: '',
    height: '',
    weight: '',
    age: '',
    emergencyContacts: [
      { name: '', phone: '', email: '' },
      { name: '', phone: '', email: '' }, // Second contact added
    ],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index?: number) => {
    const { name, value } = e.target;

    // Handle nested emergency contacts
    if (name.startsWith('emergencyContacts') && index !== undefined) {
      const updatedContacts = [...formData.emergencyContacts];
      const field = name.split('.')[1]; // Get the field (name, phone, or email)
      updatedContacts[index][field] = value;
      setFormData({ ...formData, emergencyContacts: updatedContacts });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/questionnaire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      alert('Questionnaire submitted successfully!');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <img
          src="/ICE_LOGO_DEF_NEG.png"
          alt="ICE CODE Logo"
          className="h-12 mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-red-600 mb-4 text-center">
          Medical Questionnaire
        </h1>
        <p className="text-gray-600 mb-6 text-sm">
          Please fill out this form accurately for your safety. Include two emergency contacts.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Medications
            </label>
            <input
              type="text"
              name="medications"
              placeholder="e.g., None"
              value={formData.medications}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Allergies
            </label>
            <input
              type="text"
              name="allergies"
              placeholder="e.g., None"
              value={formData.allergies}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Height (m)
              </label>
              <input
                type="number"
                name="height"
                placeholder="e.g., 1.80"
                value={formData.height}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Weight (kg)
              </label>
              <input
                type="number"
                name="weight"
                placeholder="e.g., 75"
                value={formData.weight}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              placeholder="e.g., 25"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
            />
          </div>
          <h2 className="text-lg font-semibold text-red-600 mb-2">
            Emergency Contacts
          </h2>
          {formData.emergencyContacts.map((contact, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-sm font-medium text-gray-600 mb-2">
                Contact {index + 1}
              </h3>
              <input
                type="text"
                name={`emergencyContacts[${index}].name`}
                placeholder="Contact Name"
                value={contact.name}
                onChange={(e) => handleChange(e, index)}
                className="w-full mb-2 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
              />
              <input
                type="text"
                name={`emergencyContacts[${index}].phone`}
                placeholder="Contact Phone"
                value={contact.phone}
                onChange={(e) => handleChange(e, index)}
                className="w-full mb-2 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
              />
              <input
                type="email"
                name={`emergencyContacts[${index}].email`}
                placeholder="Contact Email"
                value={contact.email}
                onChange={(e) => handleChange(e, index)}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
