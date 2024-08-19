import React, { useState } from 'react';
import axios from 'axios';

const EditScholarship = ({ scholarship, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        title: scholarship.title || '',
        location: scholarship.location || '',
        date: scholarship.date || '',
        duration: scholarship.duration || '',
        photoLink: scholarship.photoLink || '',
        applyLink: scholarship.applyLink || '',
        amount: scholarship.amount || '',
        eligibility: scholarship.eligibility || '',
        fundingType: scholarship.fundingType || '',
        description: scholarship.description || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Save button clicked');  // Check if this line is logged
        console.log('Form Data:', formData); // Log the data being sent to the server

        try {
            // Make the PUT request to update the scholarship
            const response = await axios.put(`http://localhost:5000/scholarships/${scholarship._id}`, formData);
            console.log('Response:', response); // Check the server response
            onSave(formData); // Optionally, you can pass the updated data back to parent
            onClose(); // Close the modal after saving
        } catch (error) {
            console.error('Error updating scholarship:', error);
            alert('Failed to save scholarship. Please try again.'); // Inform the user of the error
        }
    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 overflow-scroll flex pt-44 pb-4 items-center justify-center z-50">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-50 hover:text-white z-50">
                &times;
            </button>
            <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 w-full max-w-lg relative">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <h2 className="w-full p-2 text-2xl font-semibold text-white">Edit Scholarship</h2>
                        <label className="block text-gray-400">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-2 rounded-lg bg-gray-700 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full p-2 rounded-lg bg-gray-700 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Date</label>
                        <input
                            type="text"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full p-2 rounded-lg bg-gray-700 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Duration</label>
                        <input
                            type="text"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            className="w-full p-2 rounded-lg bg-gray-700 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Photo Link</label>
                        <input
                            type="text"
                            name="photoLink"
                            value={formData.photoLink}
                            onChange={handleChange}
                            className="w-full p-2 rounded-lg bg-gray-700 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Apply Link</label>
                        <input
                            type="text"
                            name="applyLink"
                            value={formData.applyLink}
                            onChange={handleChange}
                            className="w-full p-2 rounded-lg bg-gray-700 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Amount</label>
                        <input
                            type="text"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            className="w-full p-2 rounded-lg bg-gray-700 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Eligibility</label>
                        <input
                            type="text"
                            name="eligibility"
                            value={formData.eligibility}
                            onChange={handleChange}
                            className="w-full p-2 rounded-lg bg-gray-700 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Funding Type</label>
                        <input
                            type="text"
                            name="fundingType"
                            value={formData.fundingType}
                            onChange={handleChange}
                            className="w-full p-2 rounded-lg bg-gray-700 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full p-2 rounded-lg bg-gray-700 text-white"
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditScholarship;
