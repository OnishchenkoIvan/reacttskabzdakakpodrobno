export type ItemType = {
  title: string;
  value: any;
};

export type SelectPropsType = {
  value: any;
  onChange: (value: any) => void;
  items: ItemType[];
};

export function Select(props: SelectPropsType) {
  return (
    <select>
      <div>{props.value}</div>
      {props.items.map((i, index) => (
        <option key={props.value}>{i.title}</option>
      ))}
    </select>
  );
}
