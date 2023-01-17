import { createSlice } from "@reduxjs/toolkit";

const initilState = [
  {
    id: 1,
    image: "/img/before-gsxr.jpg",
    title: "Wrap It Out",
    description: "Creamos el diseño de tus sueños",
  },
  {
    id: 2,
    image: "/img/main-section.jpeg",
    title: "Vinil de gama alta y media calidad",
    description: "Para todo tipo de presupuesto",
  },
  {
    id: 3,
    image: "/img/front-r3-wrap.jpg",
    title: "Hecho por Axel Palacios",
    description: "Aguascalientes MX",
  },
];

export const sliderSlice = createSlice({
  name: "sliderSlice",
  initialState: initilState,
  reducers: {},
});

//export const { } = sliderSlice.actions;
export default sliderSlice.reducer;
