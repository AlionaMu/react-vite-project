import { Item } from "../types";

const items: Item[] = [];

export const StorageService = {
  getCards(): Item[] {
        const storage: string | null = localStorage.getItem("items");
    return storage ? JSON.parse(storage) : null;
  },

  setCards(data: Item[]): void {
    // const data = this.getCards();
    // const newNote: Item = {
    // //   key: (Date.now() + Math.random()).toString(),
    //   text: text.i
    // };
    // data.push(newNote);
    localStorage.setItem("items", JSON.stringify(data));
  }
};