import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { HashService } from "../../services/HashService";
// import { NoteService } from "../../services/NoteService";
// import { CardPropsType } from "../../types";
// import CardTagsList from "../CardTagsList/CardTagsList";
// import {
//   editNote,
//   remove,
//   setTags,
//   setTagsAmount,
//   toggleEditMode,
// } from "../../store/notesListSlice";
import "./Card.scss";
// import { RootState } from "../../store";

export enum Ebutton {
  Edit = "edit",
  Save = "save",
}

export const Card = (props:any) => {
// export const Card = (props: CardPropsType) => {
//   const notesList = useSelector((state: RootState) => state.notesList);
//   const index = NoteService.findIndex(props.note.id, notesList.notesList);

  // const isEditMode = notesList.notesList[index].isEditMode;
  // const dispatch = useDispatch();
  // const [inputValue, setInputValue] = useState(props.note.text);
  const publishedAt = new Date(props.note.snippet.publishedAt).toLocaleString('ru');
  // const state = useSelector((state: RootState) => state.cardsList)
  console.log('PROPS', props)
  return (
  
    <div className='card' id={props.note.snippet.channelId}>
      <div className='card__contain'>
        <span className='card__text_title'><b>Video Title: </b>{props.note.snippet.title}</span>
      </div>
      <div className='card__contain'>
        <span className='card__text_species'><b>Channel Title: </b>{props.note.snippet.channelTitle}</span>
        <span className='card__text_title'><b>Channel Title: </b>{props.note.snippet.ChannelTitle}</span>
        <span className='card__text_title'><b>Published Ate: </b>{publishedAt}</span>
      </div>
    </div>
  );
};
