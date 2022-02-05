# MemeGeneratorV2
In this project I used @reduxjs/toolkit and redux-persist.
You can find an example for createAsyncThunk below.
<br />
<br />
![ gif](gif.gif) 
<br />
<br />
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
  
);
```
# Türkçe 
@reduxjs/toolkit ve redux-persist kütüphanelerini kombine ettiğim bir uygulama. İyi eğlenceler :)
