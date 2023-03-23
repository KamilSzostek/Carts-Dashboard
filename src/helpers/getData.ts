export async function getData(
  url: string,
  arrayName: string = "",
  setter?: Function
) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return response.status
        ? `Code: ${response.status}`
        : "Failed to get data";
    } else {
      const responseData = await response.json();
      if (setter)
        arrayName !== "" ? setter(responseData[arrayName]) : setter(responseData);
      else return arrayName !== "" ? responseData[arrayName] : responseData;
    }
  } catch (err) {
    return arrayName ? `Failed to fetch ${arrayName}` : err;
  }
}
