import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/dashboardSlice';
import './AddWidget.css'

const AddWidget = ({ categoryName, onClose }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetImage, setWidgetImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setWidgetImage(file);
      setImagePreview(URL.createObjectURL(file)); 
    }
  };

  const handleAddWidget = () => {
    if (!widgetName || !widgetImage) {
      alert('Please fill in all fields and select an image.');
      return;
    }

    const widget = {
      id: Date.now(),
      names: widgetName,
      image: imagePreview 
    };

    dispatch(addWidget({ categoryName, widget }));
    
    
    setWidgetName('');
    setWidgetImage(null);
    setImagePreview(null);
    
    onClose(); 
  };

  return (
    <div className="add-widget-container">
      <div className="add-widget-form">
        <h3>Add Widget</h3>
        <input 
          type="text" 
          placeholder="Widget Name" 
          value={widgetName} 
          onChange={(e) => setWidgetName(e.target.value)} 
        />
        
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
        />
        {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
        <div className="widget-buttons">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="confirm-btn" onClick={handleAddWidget}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default AddWidget;
