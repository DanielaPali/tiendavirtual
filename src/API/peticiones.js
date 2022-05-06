export async function postPeticion(Data, URL) {
  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(Data),
    });

    const data = await res.json();
    return data;
  } catch (err) {}
}
