import { Form } from "react-router-dom";

export default function Contact() {
  const contact = {
    first: "Ayano",
    last: "Yoshida",
    avatar: "https://produce101.jp/static/produce101s3/download/Fv4BWpHPcDWMaUvvNw/download/097_yoshidaayano_3.jpg",
    twitter: "produce101jp_",
    notes: "Produce 101 is da best show in the world.",
    favorite: true,
  };


return (
  <div id="contact">
    <div>
      <img
        key={contact.avatar}
        src={contact.avatar || null}
      />
    </div>

    <div>
      <h1>
        {contact.first || contact.last ? (
          <>
            {contact.first} {contact.last}
          </>
        ) : (
          <i>No Name</i>
        )} {" "}
        <Favorite contact={contact} />
      </h1>

      {contact.twitter && (
        <p>
          <a
            target="_blank"
            href={`https://twitter.com/${contact.twitter}`}
          >
            {contact.twitter}
          </a>
        </p>
      )}

      {contact.notes && <p>{contact.notes}</p>}

      <div>
        <Form action="edit">
          <button type="submit">Edit</button>
        </Form>
        <Form
          method="post"
          action="destroy"
          onSubmit={(event) => {
            if (
              !confirm(
                "Please confirm you want to delete this record."
              )
            ) {
              event.preventDefault();
            }
          }}
        > 
          <button type="submit">Delete</button>
        </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite ({contact}) {
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "*" : "**"}        
      </button>
    </Form>
  );
}