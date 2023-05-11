interface Props {
  content: string;
}

const SpotifyFrame: React.FC<Props> = (props) => {
  return (
    <div className="w-full h-full mt-4" dangerouslySetInnerHTML={
        {
            __html: props.content
        }
    }>
    </div>
  );
};

export default SpotifyFrame;
