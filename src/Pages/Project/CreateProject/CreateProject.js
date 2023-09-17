import React, { useState } from 'react';

const CreateProject = () => {
  const [loading, setLoading] = useState(false);

  const handleCreateProject = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const date = new Date();

    setLoading(true); // Set loading to true when the button is clicked.

    const formData = new FormData();
    formData.append('image', image);
    const imgbbApiKey = '99128c73e69356c6d49c12da0a678056'; // Replace with your imgbb.com API key

    // Upload the image to imgbb.com
    try {
      const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
        method: 'POST',
        body: formData,
      });

      if (imgbbResponse.ok) {
        const imgbbData = await imgbbResponse.json();
        const imageUrl = imgbbData.data.display_url;

        const projectData = {
          name,
          image: imageUrl,
          date,
        };

        // Send project data to your server
        fetch('https://project-assignment-server.vercel.app/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(projectData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            form.reset();
            setLoading(false); // Set loading back to false when the project creation is complete.
          })
          .catch((err) => {
            console.error(err);
            setLoading(false); // Set loading back to false in case of an error.
          });
      } else {
        console.error('Image upload to imgbb.com failed');
        setLoading(false); // Set loading back to false in case of an error.
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setLoading(false); // Set loading back to false in case of an error.
    }
  };

  return (
    <div className='py-6 px-4 h-screen border-l-2' style={{ width: '28%', backgroundColor: '#F3F4F6' }}>
      <h4 className='text-2xl mb-2' style={{ color: '#111827' }}>
        Start a new Project
      </h4>
      <p className='mb-2' style={{ color: '#9CA3AF' }}>
        Select and browse your product image and start experimenting
      </p>

      <form className='my-4' onSubmit={handleCreateProject}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2" style={{ color: '#98A2B3' }}>
            Step-1
          </label>
          <input
            placeholder='Your Project Name'
            backgroundColor='white'
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-md"
            style={{ color: '#98A2B3' }}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block font-bold mb-2" style={{ color: '#98A2B3' }}>
            Step-2
          </label>
          <input
            placeholder="Upload your Product image"
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="w-full px-3 py-2 border rounded-md"
            style={{ color: '#98A2B3' }}
            required
          />
        </div>
        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-impaired">Loading...</span>
            </div>
          </div>
        ) : (
          <button
            type="submit"
            className="text-white px-4 py-2 rounded-xl hover:bg-blue-600 mt-4"
            style={{ backgroundColor: '#6938EF' }}
          >
            {loading ? 'Creating Project...' : 'Create new project'}
          </button>
        )}
      </form>
    </div>
  );
};

export default CreateProject;