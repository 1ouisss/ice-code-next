"use client";

import React, { useState } from "react";

export default function Questionnaire() {
  const [formData, setFormData] = useState({
    medications: "",
    allergies: "",
    height: "",
    weight: "",
    age: "",
    emergencyContacts: [{ name: "", phone: "", email: "" }],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEmergencyContactChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    const updatedContacts = [...formData.emergencyContacts];
    updatedContacts[index] = { ...updatedContacts[index], [name]: value }; // Fix here
    setFormData({ ...formData, emergencyContacts: updatedContacts });
  };

  const handleAddContact = (): void => {
    setFormData({
      ...formData,
      emergencyContacts: [
        ...formData.emergencyContacts,
        { name: "", phone: "", email: "" },
      ],
    });
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const response = await fetch("/api/signUp", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      window.location.href = "/mafiche";
    }
  };

  return (
    <div className="questionnaire-container">
      <h2>Complete Your Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="medications"
          placeholder="Medications"
          value={formData.medications}
          onChange={handleChange}
        />
        <input
          type="text"
          name="allergies"
          placeholder="Allergies"
          value={formData.allergies}
          onChange={handleChange}
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          value={formData.height}
          onChange={handleChange}
        />
        <input
          type="text"
          name="weight"
          placeholder="Weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <h3>Emergency Contacts</h3>
        {formData.emergencyContacts.map((contact, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={contact.name}
              onChange={(e) => handleEmergencyContactChange(index, e)}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={contact.phone}
              onChange={(e) => handleEmergencyContactChange(index, e)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={contact.email}
              onChange={(e) => handleEmergencyContactChange(index, e)}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddContact}>
          Add Another Contact
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
