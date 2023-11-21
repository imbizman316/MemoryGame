import { useEffect, useState } from "react"

const UseImageURL = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photossss", {mode: "cors"})
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Server error");
      }

      return response.json()
    })    
    
    .then((response) => setImageURL(response[0].url))
    .then((error) => setError(error))
    .finally(() => setLoading(false));
  }, []);

  return { imageURL, error, loading };

}

  const Image = () => {
    const { imageURL, error, loading } = UseImageURL();
  

  if (error) return <p>A network error was encountered</p>
  if (loading) return <p>Loading...</p>;

  return (    
      <>
        <h1>An Image</h1>
        <img src={imageURL} alt={"placeholder text"} />
      </>
  )

}
export default Image;