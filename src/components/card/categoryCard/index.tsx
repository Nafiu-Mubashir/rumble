import { useContext } from 'react';
import news from '../../../assets/news.jpeg'
import { SlideContext } from '../../../context/sidebarCtx';

const CategoryCard = () => {
  const { isOpen } = useContext(SlideContext);
  return (
   <a href={`/category/{id}`}>
     <div className={'w-[9rem]'}>
        <img src={news} alt="news image" className={isOpen ? 'h-[12rem] rounded-lg' : 'w-full h-[14rem] rounded-lg'} />
        <h4 className='font-bold'>News</h4>
        <p className='text-[0.813rem]'>16.9k viewers</p>
    </div>
   </a>
  )
}

export default CategoryCard