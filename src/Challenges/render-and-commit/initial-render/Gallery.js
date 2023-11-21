export default function Gallery() {
  return (
    <section>
      <h1>Matsushima!!!</h1>
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
    </section>
  );
}

function Image() {
  return (
    <img
      src="https://pbs.twimg.com/media/Dz7KGagX0AAFcYp.jpg"
      alt="It is Matsushima Nanako, what a glamourous woman"
    />
  );
}