import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, names: "Graph Zone Access", image: "https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg" },
        { id: 2, names: "Select Assessment Page",  image: "https://i.imgur.com/OygB3On.png" },
        { id: 3, names: "Faild Data Error",  image: "https://cdn.digitbin.com/wp-content/uploads/Failed_to_load_Hardware_Monitor_Driver-520x292.png" },
        { id: 4, names: "Cicel Round Figer Chart",  image: "https://static.wikia.nocookie.net/18403f6b-69d0-4835-b2ff-f34f53fedfea" },
        { id: 5, names: "Ms Word File Access Range",  image: "https://filestore.community.support.microsoft.com/api/images/dfdec383-619a-42d8-a20a-644f6d2ffb58?upload=true" },
        { id: 6, names: "Not Supported Plugin Found",  image: "https://d33v4339jhl8k0.cloudfront.net/docs/assets/5923ee3b0428634b4a335ad3/images/6155931c0754e74465f15374/file-H8yxR163MF.png" }
      ]
    },
    {
      name: "CWPP Dashboard",
      widgets: [
        { id: 7, names: "Graph Up Red And Down",  image: "https://datavizproject.com/wp-content/uploads/types/Bar-Chart-Vertical.png" },
        { id: 8, names: "Storage Access Zone Part",  image: "https://cdn.prod.website-files.com/6130fa1501794e37c21867cf/63fe662031ade6066519e022_63bc5542dbe643038b1dcd12_image1.png" },
       { id: 9, names: "Sorry We Have Encountered Some Issues",  image: "https://help.autodesk.com/sfdcarticles/img/0EM3g000001yD4f" },
       { id: 10, names: "Not Found PC Data ",  image: "https://takeoffprojects.com/assets/images/no_data.jpg" }
   
  ]
}
  ]
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryName, widget } = action.payload;
      const category = state.categories.find(cat => cat.name === categoryName);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryName, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.name === categoryName);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    }
  }
});

export const { addWidget, removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;
