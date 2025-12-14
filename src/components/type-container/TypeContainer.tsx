import "./style.type-container.css";

type TypeContainerProps = {
  type: string;
};

export const TypeContainer = ({ type }: TypeContainerProps) => {
  return (
    <div className={`type-container ${type}`}>
      <p>{type[0].toLocaleUpperCase() + type.slice(1)}</p>
    </div>
  );
};
