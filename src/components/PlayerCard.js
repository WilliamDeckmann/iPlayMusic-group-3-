// Imports
import { Link } from 'react-router-dom';

// Components
import MusicCard from './MusicCard';

// Icons
import { IoMdPlay } from 'react-icons/io';

const PlayerCard = (props) => {
  return (
    <MusicCard
      key={props.key}
      title={props.title}
      artist={props.artist}
      info={props.time}
      content={
        <Link
          to="/player/1">
          <div
            className="p-2 rounded-full cursor-pointer"
            style={{ background: 'linear-gradient(#EE0979, #FF6A00)' }}
          >
            <IoMdPlay color='#FFFFFF' size='10px' />
          </div>
        </Link>
      }
    />
  );
};

export default PlayerCard;
