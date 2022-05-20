const FeaturedCard = (props) => {
  return (
    <div className='h-[420px] small:w-[260px] medium:w-[300px] large:w-[350px] tablet:w-[600px] bg-transparent rounded-[12px] shadow-2xl'>
      <img
        src={`assets/${props.image}`}
        className='object-cover h-[100%] rounded-[12px]'
      />
    </div>
  );
};

export default FeaturedCard;
