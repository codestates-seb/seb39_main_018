interface ItemType {
  title: string;
  body: string;
  price: string;
  end_date: string;
  seat_number: string;
  region: string;
  photo: string;
  status: string;
}

interface ApiType {
  sort: string;
  type: string;
  status: string;
  keyword: string;
}

export { ItemType, ApiType };
