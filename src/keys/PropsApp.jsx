import Avatar from './Props';

function Card({children}) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
      size={100}
      person={{
        name: 'Katsuko Saruhashi',
        imageId: 'YfeOqp2'
      }}
      />
      yoyomama
      <button>hello mama</button>
    </Card>
  );
}