interface Props {
    description: string,
    style: string
}

export default function GenericCards({ description, style }: Props) {
  return (
    <div>
        <p className={style}>{description}</p>
    </div>
  );
}
