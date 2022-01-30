# MemeGeneratorV2
In this project I have used @reduxjs/toolkit and redux-persist.
You can find an example for createAsyncThunk below.
```js
export const loadAllMemes = createAsyncThunk(
  "allMemes/loadAllMemes",
  async () => {
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const json = await response.json();
      return json.data;
    }
    catch(error) {
      console.log(error)
    };
  }
);
```
# Türkçe 
MemeGenerator projemin Yeni Sürümü. Belli ki biraz daha stylinge ihtiyacı olduğu için CSS üzerinde çalışacağım.
