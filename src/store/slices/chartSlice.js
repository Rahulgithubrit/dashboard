import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales 2023 (M)',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Sales 2022 (M)',
        data: [45, 49, 60, 71, 46, 45, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  },
};

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    updateChartData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateChartData } = chartSlice.actions;
export default chartSlice.reducer;