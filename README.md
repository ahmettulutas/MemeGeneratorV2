# MemeGeneratorV2
In this project I used @reduxjs/toolkit and redux-persist.
You can find an example for createAsyncThunk below. The condition in the asyncthunk stops api call if redux store persisted.
```js
export const loadAllMemes = createAsyncThunk(
  "allMemes/loadAllMemes",
  async (_, {getState}) => {
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const json = await response.json();
      return json.data;
    }
    catch(error) {
      console.log(error)
    }
  },
  {
    condition: (userId, { getState, extra }) => {
    const { loadMemesSlice } = getState()
    const fetchStatus = loadMemesSlice.requests[userId]
    if (fetchStatus === 'fulfilled' || fetchStatus === 'loading') {
      // Already fetched or in progress, don't need to re-fetch
      return false
    }
  }
}
);
```
# Türkçe 
@reduxjs/toolkit ve redux-persist kütüphanelerini kombine ettiğim bir uygulama. İyi eğlenceler :)
