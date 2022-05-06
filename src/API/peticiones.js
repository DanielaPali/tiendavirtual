
export async function postPeticion(Data, URL) {
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(Data),
      });
      console.log(res);
      const data = await res.json();
      return data;
    } catch (err) {
      
    }
  }