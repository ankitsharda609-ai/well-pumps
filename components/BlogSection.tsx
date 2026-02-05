
import React from 'react';

const POSTS = [
  {
    id: '1',
    title: "Troubleshooting Your Well: From Switches to Submersible Pumps",
    excerpt: "Having no water is an emergency. Learn why your pressure switch might be clicking and when a professional pump pull is necessary.",
    category: "Technical Guide",
    date: "Oct 12, 2023",
    image: "https://picsum.photos/seed/well1/600/400"
  },
  {
    id: '2',
    title: "Why Carmel Residents Experience Fluctuating Water Pressure",
    excerpt: "Hard water and sediment in Hamilton County wells can often lead to clogged pressure switches or waterlogged tanks.",
    category: "Local Focus",
    date: "Nov 05, 2023",
    image: "https://picsum.photos/seed/well2/600/400"
  },
  {
    id: '3',
    title: "Electrical Diagnostics for No-Water Situations",
    excerpt: "Before pulling the pump, check the electrical basics. We detail how to safely identify tripped breakers and failed motors.",
    category: "Maintenance",
    date: "Nov 28, 2023",
    image: "https://picsum.photos/seed/well3/600/400"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Learning Center</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Well Maintenance Guides</h3>
            <p className="text-slate-600">Deep dives into how your well system works and common problems we solve every day in Carmel, Indiana.</p>
          </div>
          <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
            View All Articles
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {POSTS.map((p) => (
            <article key={p.id} className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group">
              <div className="aspect-video relative overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {p.category}
                </div>
              </div>
              <div className="p-8">
                <time className="text-xs text-slate-400 font-medium mb-3 block">{p.date}</time>
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {p.excerpt}
                </p>
                <button className="text-slate-900 font-bold text-sm inline-flex items-center gap-2 border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
                  Read Full Post
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
