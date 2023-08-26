import { createSlice } from "@reduxjs/toolkit";
const Index = {
    //BANNER
    txt_Banner : 'La Universidad Pública de El Alto, forjando profesionales para el desarrollo de Bolivia.',
    txt_Btn: 'Categorias',
    txt_Redes: 'Redes Sociales',

    //AUTORIDADES
    txt_Title_Autoridades: 'Nuestras <br> Autoridades',

    //VIDEO
    txt_Title_Video: '"La UPEA, una universidad de futuro." Esta frase refleja la visión de la UPEA de ser una universidad líder en Bolivia y en la región. La universidad está comprometida con el desarrollo de sus estudiantes, de la región y del país.',

    //CONVOCATORIAS
    txt_Title_Convocatorias: 'Lo Ultimo de Convocatorias',

    //AVISOS 
    txt_Title_Avisos: 'Lo Ultimo de Avisos',

    //COMUNICADOS
    txt_Title_Comunicados: 'Lo Ultimo de Comunicados',

    //LINKS EXTERNOS
    txt_Title_Links_Externos: 'Links Externos',
    txt_Description_Links_Externos: 'Los links que pertenecen a la carrera de ',
}

const initialState = {
    staticData: {
        Index,
    },    
};

const staticDataSlice = createSlice({
    name: "staticData",
    initialState,
    reducers: {},
})

export default staticDataSlice.reducer;
