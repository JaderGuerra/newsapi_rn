import { useEffect,  useState } from "react";
import newsApi from "../api/newsapi";
import type { Article, NewsAPIResponse } from "../interfaces/newsapiInterface";

export const useNewsApi = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [isloading, setIsloading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    if (isloading) return;
    setIsloading(true);
    try {
      const response = await newsApi.get<NewsAPIResponse>(`/everything?page=${page}&pageSize=20`);
      const newNews = response.data.articles;

      setNews((prevNews) => [...prevNews, ...newNews]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  const onEndReached = () => {
    const isCloseToBottom = (props: {
      layoutMeasurement: any;
      contentOffset: any;
      contentSize: any;
    }) => {
      return (
        props.layoutMeasurement.height + props.contentOffset.y >=
        props.contentSize.height - 20
      );
    };
    if (!isloading && isCloseToBottom!) {
      loadNews();
    }
  };

  return { news, isloading, onEndReached };
};
