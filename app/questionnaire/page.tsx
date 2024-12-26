'use client';

import { useState } from 'react';

export default function QuestionnairePage() {
  const [formData, setFormData] = useState({
    medications: '',
    allergies: '',
    height: '',
    weight: '',
    age: '',
    emergencyContacts: [{ name: '', phone: '', email: '' }],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Handle nested emergency contacts
    if (name.startsWith('emergencyContacts')) {
      const [_, index, field] = name.split(/[.[\]]/).filter(Boolean);
      const updatedContacts = [...formData.emergencyContacts];
      updatedContacts[parseInt(index)][field] = value;

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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Medical Questionnaire</h1>
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="medications"
          placeholder="Medications"
          value={formData.medications}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="text"
          name="allergies"
          placeholder="Allergies"
          value={formData.allergies}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          value={formData.height}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="text"
          name="weight"
          placeholder="Weight"
          value={formData.weight}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <h2 className="text-lg font-semibold mb-2">Emergency Contacts</h2>
        <input
          type="text"
          name="emergencyContacts[0].name"
          placeholder="Contact Name"
          value={formData.emergencyContacts[0].name}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="text"
          name="emergencyContacts[0].phone"
          placeholder="Contact Phone"
          value={formData.emergencyContacts[0].phone}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="email"
          name="emergencyContacts[0].email"
          placeholder="Contact Email"
          value={formData.emergencyContacts[0].email}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
