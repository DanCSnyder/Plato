import React from 'react';

const NoteItem = (props) => {
  const displayNote = () => {
    props.loadNote(props.text, props.title);
  };

  return (
    <li>
      <h3>{props.title}</h3>
      <button onClick={() => displayNote()}> DISPLAY NOTE </button>
    </li>
  );
};

NoteItem.propTypes = {
  title: React.PropTypes.string,
};

export default NoteItem;
