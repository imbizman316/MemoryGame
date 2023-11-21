import { getImageUrl } from './utils';

function Card({children}) {
  return (
    <div className="card">
      {children}
    </div>
  )
}

function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 130
}) {

  let size;

  if (imageSize < 90) size = 's';
  else size = 'b';
  return (
      <section className="profile">
        <Card>
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(imageId, size)}
          alt={name}
          width={imageSize}
          height={imageSize}
        />
        </Card>
        <Card>
      <ul>
        <li><b>Profession: </b> {profession}</li>
        <li><b>Awards {awards.length}: </b>
        ({awards.join(', ')})
        </li>
        <li><b>Discovered: </b>{discovery}</li>
      </ul>
      </Card>
      </section>
  );
}


export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Sklodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemist',
          'Davy Medal',
          'Matteiucci Medal'
        ]}
      />

      <Profile
        imageId="lJfl4bf"
        name="Sana Minatozaki"
        profession="Cutest Girl in the World"
        discovery="No Sana No Live"
        awards={[
          'MAMA 2019'
        ]}
      />


    </div>
  )
}