interface ItemType {
  created_date: string;
  id: number;
  title: string;
  body: string;
  price: string;
  end_date: string;
  seat_number: string;
  region: string;
}

interface ApiType {
  sort: string;
  type: string;
  status: string;
  keyword: string;
}

export { ItemType, ApiType };
