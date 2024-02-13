import { SearchData } from '@/store/search/types';

export default function JokeItem({ created_at, id, value, url }: SearchData) {
  return (
    <a
      href={url}
      target="_blank"
      className="hover:shadow-blue-400 min-w-full transition-all delay-100 ease-linear shadow-xl shadow-gray-300"
    >
      <article className="rounded-md min-h-[220px] p-6 md:p-8 flex justify-between flex-col">
        <p className="md:text-[16px] text-[14px] line-clamp-3 overflow-ellipsis">{value}</p>
        <div className="flex justify-between text-[12px] flex-col md:flex-row text-gray-400">
          <span>{id}</span>
          <span>{new Date(created_at).toLocaleString('ru-RU')}</span>
        </div>
      </article>
    </a>
  );
}
