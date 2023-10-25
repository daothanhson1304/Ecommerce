import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillRedditCircle,
  AiFillYoutube,
  AiFillInstagram,
} from 'react-icons/ai';

export default function RightTopNav() {
  return (
    <div className="">
      <div className="flex items-center gap-x-3">
        <p>Follow us: </p>
        <div className="flex items-center gap-x-2">
          <AiOutlineTwitter />
          <AiFillFacebook />
          <AiFillRedditCircle />
          <AiFillYoutube />
          <AiFillInstagram />
        </div>
      </div>
    </div>
  );
}
