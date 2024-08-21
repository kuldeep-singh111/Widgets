import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addWidget, removeWidget } from '../redux/dashboardSlice';
import AddWidget from './AddWidget';
import './dashboard.css';

const Dashboard = ({ searchQuery }) => {
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [showAddWidgetForm, setShowAddWidgetForm] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    const updatedCategories = categories.map((category) => ({
      ...category,
      widgets: category.widgets.filter((widget) =>
        widget.names.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }));

    setFilteredCategories(updatedCategories);
  }, [searchQuery, categories]);

  const handleAddWidget = () => {
    if (currentCategory) {
      setShowAddWidgetForm(true);
    }
  };

  const handleRemoveWidget = (categoryName, widgetId) => {
    dispatch(removeWidget({ categoryName, widgetId }));
  };

  return (
    <div className="dashboard">
      <div className="header-containers">
        <div className="header-left">
          <h2>CSPM Executive Dashboard</h2>
        </div>
        <div className="header-right">
          <select
            className="category-selector"
            onChange={(e) => setCurrentCategory(e.target.value)}
            value={currentCategory || ''}
          >
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <button className="add-widget-btn" onClick={handleAddWidget}>
            + Add Widget
          </button>
          
          <button className="refresh-btn">&#x21bb;</button>
          <button className="more-options-btn">&#x22ee;</button>
          <div className="date-range-dropdown">
            <span className="date-range-text">Last 2 days</span>
            <span className="dropdown-icon">&#x25BC;</span>
          </div>
        </div>
      </div>
      {showAddWidgetForm && (
        <AddWidget
          categoryName={currentCategory}
          onClose={() => setShowAddWidgetForm(false)}
        />
      )}
  <h2 className='mobile-h'>CSPM Executive Dashboard</h2>
      {filteredCategories.map((category) => (
        <div key={category.name} className="category">
          <div className="widgets">
            {category.widgets.map((widget) => (
              <div key={widget.id} className="widget">
                <div
                  className="widget-content"
                  style={{
                    backgroundImage: `url(${widget.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className="widget-header">
                    <span className="category-name">{widget.names}</span>
                    <button
                      className="remove-btn"
                      onClick={() =>
                        handleRemoveWidget(category.name, widget.id)
                      }
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h4 className='secound-h'>CWPP Dashboard</h4>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
