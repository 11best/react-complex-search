type LabelProps = {
  name: string;
  id: string;
};

const Label = ({ name, id }: LabelProps) => {
  return (
    <label htmlFor={id} className="mx-2 col-span-1 flex items-center">
      {name}
    </label>
  );
};

export default Label;
