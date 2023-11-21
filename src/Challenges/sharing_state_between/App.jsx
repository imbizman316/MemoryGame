import { useState } from 'react';

function Panel({title, children}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section>
  );
}

export default function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest city, yo.
      </Panel>
      <Panel title="Etymology">
        The name comes from <span lang="kk-KZ">mike</span>, the Korean word for, a warrior, yo.
      </Panel>
    </>
  );
}