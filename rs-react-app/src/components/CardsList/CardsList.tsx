// import { CardsListPropsType, Note } from "../../types";
import { Card } from "../Card/Card";
import "./CardsList.scss";
import { StorageService } from "../../services/StorageService";
// export const CardsList = (props: CardsListPropsType) => {
export const CardsList = () => {
  // const res = props.filter.length
  //   ? props.list.filter((item: Note) =>
  //       props.filter.every((value: string) =>
  //         item.tags.includes(value) ? item : 0
  //       )
  //     )
  //   : props.list;
  const res = StorageService.getCards();
  console.log('RESRES', res)
  return (
    <section className="cards-list">
      {res ? (
        res.map((note: any) => {
          return <Card note={note} key={note.etag}></Card>;
        })
      ) : (
        <div>NO CARDS</div>
       )} 
    </section>
  );
};
