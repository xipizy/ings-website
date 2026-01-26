import {Calendar} from 'lucide-react';
import WaitangiImage from '../news/waitangi.jpg';
import NewYearImage from '../news/newYear.jpg';
import AnniversaryImage from '../news/northlandAnniversary.jpg';

const NewsCard = ({ image, date, title, description, badge }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="relative">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      {badge && (
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full">
          <span className="text-red-600 font-bold text-sm uppercase">{badge}</span>
        </div>
      )}
    </div>
    <div className="p-6">
      <div className="flex items-center text-gray-500 text-sm mb-3">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{date}</span>
      </div>
      <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  </div>
);

export default function NewsUpdates() {
  const newsItems = [
    {
      image: WaitangiImage,
      date: "27th, January, 2026",
      title: "Waitangi Day Store Hours",
      description: "We will be closed on December 25th and 26th. Wishing everyone a joyful holiday season!",
      badge: "LATEST NEWS"
    },
    {
      image: AnniversaryImage,
      date: "22nd, January, 2026",
      title: "Northland Anniversary",
      description: "We will be closed on January 26th for Northland Anniversary. Enjoy the holiday!",
    },
    {
      image: NewYearImage,
      date: "1st, January, 2026",
      title: "New Year Store Hours",
      description: "We will be closed on January 1st and 2nd. Wishing everyone a happy and prosperous year ahead!",
    }
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Latest News & Updates
          </h1>
          <p className="text-gray-600 text-lg">
            Stay informed about our latest announcements and store events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>

        <div className="text-center">
        </div>
      </div>
    </div>
  );
}