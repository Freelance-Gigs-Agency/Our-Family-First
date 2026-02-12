import Image from "next/image";

const posts = [
  {
    id: 1,
    title:
      "Our Family First Holds Therapeutic Retreat for Soldiers and Spouses",
    href: "https://jewishlink.news/our-family-first-holds-therapeutic-retreat-for-soldiers-and-spouses/",
    description:
      "Our Family First Holds Therapeutic Retreat for Soldiers and Spouses",
    imageUrl: "/OFF-article.jpeg",
    date: "May 16, 2024",
    datetime: "2024-05-16",
    category: { title: "Profile", href: "#" },
  },
  {
    id: 2,
    title:
      "Dozens of couples of soldiers and reserve officers participated on Shabbat to strengthen their relationship",
    href: "https://www.maariv.co.il/news/military/Article-1119075",
    description:
      "Our Family First Holds Therapeutic Retreat for Soldiers and Spouses",
    imageUrl: "/article-2-cover.webp",
    date: "July 22, 2024",
    datetime: "2024-07-22",
    category: { title: "Profile", href: "#" },
  },
  {
    id: 3,
    title:
      "Our Family First Provides Respite for IDF Survivors of Gaza Building Collapse",
    href: "https://jewishlink.news/our-family-first-provides-respite-for-idf-survivors-of-gaza-building-collapse/",
    description:
      "Our Family First offers support and healing for IDF soldiers who survived the tragic Gaza building collapse, providing essential respite and therapeutic care.",
    imageUrl: "/article3.jpg",
    date: "September 26, 2024",
    datetime: "2024-09-26",
    category: { title: "Profile", href: "#" },
  },
  {
    id: 4,
    title: "A Year of Hardship, Loss and Unwavering Commitment to Win the War",
    href: "https://jewishlink.news/a-year-of-hardship-loss-and-unwavering-commitment-to-win-the-war/",
    description:
      "Reflecting on a year of challenges and resilience, Our Family First continues to support military families through their unwavering commitment to healing and strength during times of war.",
    imageUrl: "/article4.jpg",
    date: "June 5, 2025",
    datetime: "2025-06-05",
    category: { title: "Profile", href: "#" },
  },
];

export default function Articles() {
  return (
    <div className="bg-white py-24 sm:py-32" id="articles">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Articles
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discover how our programs are making a difference in the lives of
            military families.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full overflow-hidden rounded-2xl">
                <a href={post.href} className="block">
                  <Image
                    alt={post.title}
                    src={post.imageUrl}
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] hover:opacity-90 hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </a>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 pointer-events-none" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
