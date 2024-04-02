import news from '../../../assets/news.jpeg'
const NewsCard = () => {
  return (
    <div className='w-[6.446rem]'>
        <img src={news} alt="news image" className='w-full h-[9.669rem] rounded-lg' />
        <h4 className='font-bold'>News</h4>
        <p className='text-[0.813rem]'>16.9k viewers</p>
    </div>
  )
}

export default NewsCard