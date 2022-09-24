import React from 'react';
import Navbarr from './component/navbarr';
import axios from 'axios';
import CardCustom from './component/cardCustom';
import { useRouter } from 'next/router';
import Router from 'next/router';

export const getServerSideProps = async () => {
  const response = await axios.get(`https://inshorts.deta.dev/news?category=sports`);
  const news = response.data.data;
  return {
    props: {
      news: news,
    },
  };
};

const dashboard = ({ news }) => {
  const router = useRouter();
  const handleDetail = (data) => {
    console.log(data);
    Router.push({
      pathname: '/detail',
      query: {
        title: data.title,
        author: data.author,
        image: data.imageUrl,
        content: data.content,
      },
    });
  };

  return (
    <div>
      <Navbarr />
      <h3 className='hallo'>Hallo {router.query.name}!</h3>
      <h4 className='news'>Berita Hangat Apa Hari Ini?</h4>

      {news.map((item, index) => {
        return (
          <div key={index} className="list-card">
            <CardCustom news={news} handleDetail={handleDetail} />
          </div>
        );
      })}
    </div>
  )
}

export default dashboard;