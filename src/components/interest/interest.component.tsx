import "./interest.styles.scss";

type interestProps = {
  title: string,
  ratio: number,
  date: string
}

const Interest: React.FC<interestProps> = (props) => {
  return (
    <div className="interest">
      <div className="interest__title">{props.title}</div>
      <div className="interest__ratio">{props.ratio}%</div>
      <div className="interest__date">{props.date}</div>
    </div>
  );
};

export default Interest;
