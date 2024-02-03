import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialStateProps = {
    // uploading: boolean;
    // currentUpload: number;
    // uploadMinimize: boolean;
    // showUploadModal: boolean;
    // showAddTagModal: boolean;
    // selectedPhotos: Photos[];
    // uploadFiles: UploadInfo[];
    // filterPhotos: FilterPhotos;
};

const initialState: InitialStateProps = {
    // uploadFiles: [],
    // uploading: false,
    // currentUpload: 0,
    // filterPhotos: {
    //     suite: '',
    //     basicTags: [],
    //     customTags: []
    // },
    // selectedPhotos: [],
    // uploadMinimize: false,
    // showUploadModal: false,
    // showAddTagModal: false,
};

export const slice = createSlice({
    initialState,
    name: 'photos',
    reducers: {
        // setUploading: (state, action: PayloadAction<boolean>) => {
        //     state.uploading = action.payload;
        // },
        // setShowUploadModal: (state, action: PayloadAction<boolean>) => {
        //     state.showUploadModal = action.payload;
        // },
        // setUploadMinimize: (state, action: PayloadAction<boolean>) => {
        //     state.uploadMinimize = action.payload;
        // },
        // setCurrentUpload: (state, action: PayloadAction<number>) => {
        //     state.currentUpload = action.payload;
        // },
        // setUploadFiles: (state, action: PayloadAction<UploadInfo[]>) => {
        //     state.uploadFiles = [...action.payload];
        // },
        // setShowAddTagModal: (state, action: PayloadAction<boolean>) => {
        //     state.showAddTagModal = action.payload;
        // },
        // setSelectedPhotos: (state, action: PayloadAction<Photos[]>) => {
        //     state.selectedPhotos = [...action.payload];
        // },
        // setFilterPhotos: (state, action: PayloadAction<FilterPhotos>) => {
        //     state.filterPhotos = action.payload;
        // }
    }
});

export const {
    // setUploading,
    // setUploadFiles,
    // setFilterPhotos,
    // setCurrentUpload,
    // setUploadMinimize,
    // setSelectedPhotos,
    // setShowUploadModal,
    // setShowAddTagModal
} = slice.actions;

export default slice.reducer;