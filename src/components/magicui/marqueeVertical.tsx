import Marquee from '../ui/marquee';

interface IReview {
  name: string;
  username: string;
  body: string;
  img: string;
}

const reviews: IReview[] = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack'
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill'
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john'
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const ReviewCard = ({ img, name, username, body }: IReview) => {
  return (
    <figure className='relative h-40 w-80 cursor-pointer overflow-hidden rounded-xl p-4 bg-transparent'>
      <div className='flex flex-row items-center gap-2'>
        <img className='rounded-full' width='32' height='32' alt={name} src={img} />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium text-skyblue-100'>{name}</figcaption>
          <p className='text-xs font-medium text-skyblue-200'>{username}</p>
        </div>
      </div>
      <blockquote className='mt-2 text-sm text-skyblue-300'>{body}</blockquote>
    </figure>
  );
};

export function MarqueeVertical() {
  return (
    <div className='relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden'>
      <Marquee pauseOnHover vertical className='[--duration:20s]'>
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className='[--duration:20s]'>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
