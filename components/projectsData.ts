export type GithubLink = {
  label: string
  url: string
}

export type Project = {
  id: string
  title: string
  description: string
  technologies: string[]
  metrics: Record<string, string>
  github: string
  githubLinks: GithubLink[]
  live: string
  stars: number
  forks: number
  images: string[]
}

export const projects: Project[] = [
  {
    "id": "blogify",
    "title": "Blogify",
    "description": "Blogify is an open-source content management system designed for individuals to publish articles, create custom pages, manage comments, organize knowledge booklets, and maintain their online presence with ease. It provides a complete publishing platform with a public-facing blog website, an admin management dashboard for content control, and email management capabilities to keep readers informed. Users can manage articles and pages, track statistics, configure system settings, handle file uploads, and moderate comments all from an intuitive administrative interface, making it an ideal solution for bloggers and content creators who want full control over their digital publishing needs.",
    "technologies": [
      "Web"
    ],
    "metrics": {
      "type": "Website",
      "period": "Dec 2022 - Jun 2023",
      "repos": "1"
    },
    "github": "https://github.com/seifeslimene/blogify",
    "githubLinks": [
      {
        "label": "Fullstack",
        "url": "https://github.com/seifeslimene/blogify"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/blogify/blogify_4.jpg",
      "/images/projects/web/blogify/blogify_7.jpg"
    ]
  },
  {
    "id": "mosaic",
    "title": "Mosaic - Social Media Website",
    "description": "Mosaic is a social media platform that allows users to share, discover, and engage with their community through posts, comments, and likes. Users can create accounts, build profiles, follow other users, and discover content from those they follow through a dedicated feed while receiving real-time notifications for interactions like likes and follows. With features for posting, editing, and deleting content, mentioning other users, and adding reactions to posts, Mosaic provides a comprehensive social networking experience with a responsive, mobile-first interface that works seamlessly across all devices.",
    "technologies": [
      "Web"
    ],
    "metrics": {
      "type": "Website",
      "period": "Jan 2022 - Apr 2022",
      "repos": "1"
    },
    "github": "https://github.com/seifeslimene/mosaic",
    "githubLinks": [
      {
        "label": "fullstack",
        "url": "https://github.com/seifeslimene/mosaic"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/mosaic/mosaic-feed-desktop-1920x1080.png"
    ]
  },
  {
    "id": "webshop",
    "title": "WebShop - E-Commerce Website",
    "description": "Webshop is a full-featured e-commerce platform that combines a customer-facing storefront with a comprehensive admin management system. On the user side, customers can browse products across multiple category levels, search for items, view detailed product information, manage their shopping cart, complete checkout, create accounts, track their orders, write reviews, and manage their delivery addresses. The admin platform enables store managers to oversee all operations including user management, product and category organization, order processing, review moderation, and promotional content management through sliders and banners. Built with a responsive design that works seamlessly on both desktop and mobile devices, Webshop provides a complete solution for running a modern online retail business.",
    "technologies": [
      "Web"
    ],
    "metrics": {
      "type": "Website",
      "period": "Mar 2021 - Aug 2021",
      "repos": "1"
    },
    "github": "https://github.com/seifeslimene/webshop",
    "githubLinks": [
      {
        "label": "fullstack",
        "url": "https://github.com/seifeslimene/webshop"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/webshop/admin-auth-dashboard-1920x1080.png",
      "/images/projects/web/webshop/admin-auth-products-1920x1080.png",
      "/images/projects/web/webshop/admin-auth-users-1920x1080.png",
      "/images/projects/web/webshop/home-desktop-1920x1080.png"
    ]
  },
  {
    "id": "webshop_mobile",
    "title": "WebShop Mobile App",
    "description": "Webshop is a mobile e-commerce application that allows customers to browse products, explore different categories, view detailed product information and reviews, manage their shopping cart, and complete purchases directly from their mobile devices. The app also enables users to track their orders, manage their account information and addresses, and leave reviews for products they've purchased. Built with an elegant and responsive interface, it provides a seamless shopping experience with all the essential features of a complete e-commerce platform.",
    "technologies": [
      "Mobile"
    ],
    "metrics": {
      "type": "Mobile",
      "period": "Portfolio",
      "repos": "1"
    },
    "github": "https://github.com/seifeslimene/webshop_mobile_app",
    "githubLinks": [
      {
        "label": "fullstack",
        "url": "https://github.com/seifeslimene/webshop_mobile_app"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/mobile/webshop/webshop_mobile_app_1.jpg",
      "/images/projects/mobile/webshop/webshop_mobile_app_2.jpg",
      "/images/projects/mobile/webshop/webshop_mobile_app_3.jpg",
      "/images/projects/mobile/webshop/webshop_mobile_app_4.jpg",
      "/images/projects/mobile/webshop/webshop_mobile_app_5.jpg"
    ]
  },
  {
    "id": "booking_plugin_system",
    "title": "Booking Plugin System",
    "description": "The Booking System Plugin is a reusable web component built with Stencil that enables businesses to integrate appointment and reservation functionality into their websites. This plugin provides a standalone, framework-agnostic component that can be easily embedded into any web application through script tags or NPM installation, allowing customers to browse availability and book appointments seamlessly. The component is designed to work independently or within existing web applications, offering a professional booking experience that can be customized and deployed across different platforms and websites.",
    "technologies": [
      "Stencil"
    ],
    "metrics": {
      "type": "Website",
      "period": "Portfolio",
      "repos": "1"
    },
    "github": "https://github.com/seifeslimene/booking_system_plugin_clone",
    "githubLinks": [
      {
        "label": "fullstack",
        "url": "https://github.com/seifeslimene/booking_system_plugin_clone"
      }
    ],
    "live": "https://booking.seifeddineslimene.com",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/booking_plugin_system/2026-05-26_16-53.png",
      "/images/projects/web/booking_plugin_system/2026-05-26_16-54.png",
      "/images/projects/web/booking_plugin_system/2026-05-26_16-55.png"
    ]
  },
  {
    "id": "chattorro",
    "title": "Chattorro",
    "description": "Chattorro is a secure and user-friendly platform that enables secure account creation and login functionality. Users can register with their personal information, log in with their credentials, and access their accounts through an intuitive interface. Built with Next.js and MySQL, the application provides a responsive design that works seamlessly across desktop, tablet, and mobile devices, making account management accessible to users regardless of their device. The platform offers a straightforward authentication experience with dedicated login and registration pages designed for ease of use and security.",
    "technologies": [
      "Next.js",
      "MySQL"
    ],
    "metrics": {
      "type": "Website",
      "period": "Portfolio",
      "repos": "1"
    },
    "github": "https://github.com/seifeslimene/chattorro",
    "githubLinks": [
      {
        "label": "fullstack",
        "url": "https://github.com/seifeslimene/chattorro"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/chattorro/desktop.png",
      "/images/projects/web/chattorro/login-desktop.png",
      "/images/projects/web/chattorro/register-desktop.png"
    ]
  },
  {
    "id": "dev_finder",
    "title": "Dev Finder",
    "description": "DevFinder is a collaborative video communication platform that connects developers and professionals through virtual rooms for real-time collaboration and discussions. Users can browse available rooms, create their own collaboration spaces, sign in securely, and join specific rooms to interact with other professionals through live video streaming. The platform provides an intuitive interface for discovering and managing rooms, enabling seamless communication and teamwork across desktop, tablet, and mobile devices. Built with Next.js and PostgreSQL, DevFinder facilitates professional networking and remote collaboration for developers seeking to connect and work together on projects.",
    "technologies": [
      "Next.js",
      "PostgreSQL"
    ],
    "metrics": {
      "type": "Website",
      "period": "Portfolio",
      "repos": "1"
    },
    "github": "https://github.com/seifeslimene/dev_finder/",
    "githubLinks": [
      {
        "label": "fullstack",
        "url": "https://github.com/seifeslimene/dev_finder/"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/dev_finder/create-room-desktop.png",
      "/images/projects/web/dev_finder/create-room-tablet.png",
      "/images/projects/web/dev_finder/room-detail-desktop.png",
      "/images/projects/web/dev_finder/screenshot-desktop.png",
      "/images/projects/web/dev_finder/screenshot-mobile.png",
      "/images/projects/web/dev_finder/screenshot-tablet.png"
    ]
  },
  {
    "id": "e_-_commerce_favourites",
    "title": "E-Commerce Favourites",
    "description": "Tunisia E-Commerce is a modern e-commerce platform that combines a responsive web storefront with a robust backend API to deliver an exceptional shopping experience. The frontend presents products in an organized grid layout with pagination support, adapting seamlessly to desktop, tablet, and mobile devices for convenient browsing across all screen sizes. The backend provides a comprehensive API with complete documentation through Swagger UI, managing product data and serving it dynamically to the frontend. Together, the platform enables customers to discover and explore products through an intuitive interface while the backend infrastructure ensures efficient data management, scalability, and reliable API services to power the entire e-commerce operation.",
    "technologies": [
      "Web"
    ],
    "metrics": {
      "type": "Website",
      "period": "Portfolio",
      "repos": "2"
    },
    "github": "https://github.com/seifeslimene/you_com_backend",
    "githubLinks": [
      {
        "label": "Backend",
        "url": "https://github.com/seifeslimene/you_com_backend"
      },
      {
        "label": "Frontend",
        "url": "https://github.com/seifeslimene/you_com_frontend"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/e_-_commerce_favourites/screenshot-desktop.png",
      "/images/projects/web/e_-_commerce_favourites/screenshot-mobile.png",
      "/images/projects/web/e_-_commerce_favourites/screenshot-tablet.png"
    ]
  },
  {
    "id": "e_-_commerce_informatique",
    "title": "E-Commerce Informatique",
    "description": "E-Commerce Informatique is a full-featured computer and technology products marketplace that brings together customers and sellers in a seamless digital shopping experience. The platform allows users to browse a comprehensive catalog of tech products organized by categories, view detailed product information, search and filter items based on their needs, manage their shopping carts, and complete purchases through a secure checkout process. Customers can create accounts to maintain order history, manage their profiles, and track their purchases, while the backend infrastructure powered by Node.js, Express, and MongoDB provides robust APIs to handle user authentication, product management, category organization, and order processing. With a responsive design optimized for all devices, E-Commerce Informatique delivers an intuitive shopping interface combined with reliable backend services to facilitate buying and selling of computer hardware and related products.",
    "technologies": [
      "Node.js",
      "Express",
      "MongoDB"
    ],
    "metrics": {
      "type": "Website",
      "period": "Portfolio",
      "repos": "2"
    },
    "github": "https://github.com/seifeslimene/e_commerce_informatique_backend",
    "githubLinks": [
      {
        "label": "Backend",
        "url": "https://github.com/seifeslimene/e_commerce_informatique_backend"
      },
      {
        "label": "Frontend",
        "url": "https://github.com/seifeslimene/e_commerce_informatique_front"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/e_-_commerce_informatique/homepage-preview.jpg"
    ]
  },
  {
    "id": "flex_farm",
    "title": "Flex Farm",
    "description": "Flex Farm is an agricultural technology platform designed to support modern farming operations through a comprehensive web application. The frontend provides farmers and agricultural professionals with an intuitive interface to manage their farming activities, monitor crop operations, and access agricultural tools and resources. The backend infrastructure, built with Node.js and JavaScript, delivers the necessary APIs and services to handle farm data management, crop tracking, and operational workflows. Together, Flex Farm creates a complete digital solution for flexible and efficient agricultural management, enabling users to organize and optimize their farming practices through a responsive web-based platform.",
    "technologies": [
      "JavaScript",
      "Node.js",
      "Java"
    ],
    "metrics": {
      "type": "Website",
      "period": "Portfolio",
      "repos": "2"
    },
    "github": "https://github.com/seifeslimene/flex_farm_backend",
    "githubLinks": [
      {
        "label": "Backend",
        "url": "https://github.com/seifeslimene/flex_farm_backend"
      },
      {
        "label": "Frontend",
        "url": "https://github.com/seifeslimene/flex_farm_frontend"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/flex_farm/flex-farm-desktop.png",
      "/images/projects/web/flex_farm/flex-farm-mobile.png",
      "/images/projects/web/flex_farm/flex-farm-tablet.png"
    ]
  },
  {
    "id": "fusion_smart",
    "title": "Fusion Smart",
    "description": "Fusion Smart is a comprehensive energy monitoring and analytics dashboard that enables organizations to track, analyze, and optimize their energy consumption and costs. The platform provides users with detailed insights into energy usage across departments, real-time monitoring of connected appliances and meters, carbon emissions tracking for sustainability goals, and cost analysis to identify savings opportunities. Administrators can manage users, monitor overall energy performance, and generate reports across multiple metrics including department-level usage patterns and equipment efficiency. With a fully responsive design that works seamlessly on desktop, tablet, and mobile devices, Fusion Smart combines a React-based frontend interface with a robust Express REST API and MongoDB backend to deliver a complete solution for businesses seeking to reduce energy costs, track environmental impact, and improve operational efficiency.",
    "technologies": [
      "React",
      "Express",
      "MongoDB"
    ],
    "metrics": {
      "type": "Website",
      "period": "Portfolio",
      "repos": "2"
    },
    "github": "https://github.com/seifeslimene/fusion_smart_frontend",
    "githubLinks": [
      {
        "label": "Frontend",
        "url": "https://github.com/seifeslimene/fusion_smart_frontend"
      },
      {
        "label": "Backend",
        "url": "https://github.com/seifeslimene/fusion_smart_backend"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/fusion_smart/appliances-desktop.png",
      "/images/projects/web/fusion_smart/compteur-desktop.png",
      "/images/projects/web/fusion_smart/contact-desktop.png",
      "/images/projects/web/fusion_smart/cost-desktop.png",
      "/images/projects/web/fusion_smart/dashboard-desktop.png",
      "/images/projects/web/fusion_smart/dashboard-mobile.png",
      "/images/projects/web/fusion_smart/dashboard-tablet.png",
      "/images/projects/web/fusion_smart/emissions-desktop.png",
      "/images/projects/web/fusion_smart/landing-desktop.png",
      "/images/projects/web/fusion_smart/usage-desktop.png",
      "/images/projects/web/fusion_smart/users-desktop.png"
    ]
  },
  {
    "id": "herbal_e_-_commerce_tunisia",
    "title": "Herbal E-Commerce Tunisia",
    "description": "E-Commerce Tunisia Green is a modern sustainable products marketplace that brings together an eco-conscious shopping experience with comprehensive business management tools. The customer-facing storefront enables shoppers to browse and discover green products, register and log in securely, manage their shopping cart with add, remove, and quantity adjustment features, view detailed product information with pagination support, and complete purchases through secure Stripe payment processing. Customers can reset passwords, receive email confirmations, and track their complete order history. The admin platform, powered by Sanity Studio, provides content creators and business managers with an intuitive interface to manage product catalogs and storefront content across all devices. The robust backend infrastructure built with NestJS, PostgreSQL, and Redis handles user authentication with JWT tokens, secure password management, email notifications, payment processing, and data persistence. Together, the platform delivers a complete e-commerce solution that prioritizes both user experience and sustainable shopping practices.",
    "technologies": [
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Stripe"
    ],
    "metrics": {
      "type": "Website",
      "period": "Portfolio",
      "repos": "3"
    },
    "github": "https://github.com/seifeslimene/ecommerce_green_back",
    "githubLinks": [
      {
        "label": "Backend",
        "url": "https://github.com/seifeslimene/ecommerce_green_back"
      },
      {
        "label": "Frontend",
        "url": "https://github.com/seifeslimene/ecommerce_green_front"
      },
      {
        "label": "Admin",
        "url": "https://github.com/seifeslimene/ecommerce_green_admin"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/herbal_e_-_commerce_tunisia/home-desktop.png",
      "/images/projects/web/herbal_e_-_commerce_tunisia/home-mobile.png",
      "/images/projects/web/herbal_e_-_commerce_tunisia/home-tablet.png"
    ]
  },
  {
    "id": "influen_x",
    "title": "Influen X",
    "description": "influenX is an influencer and event management platform that connects creators and audiences through a centralized hub for discovering, managing, and participating in events. The platform enables users to browse upcoming events, manage event information, and engage with the influencer community through a responsive web interface that works seamlessly across desktop, tablet, and mobile devices. Built with a Node.js and Express backend powered by MongoDB for data management, combined with a modern JavaScript frontend featuring SCSS styling for a polished visual experience, influenX provides a complete solution for event discovery and influencer networking in the digital creator economy.",
    "technologies": [
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    "metrics": {
      "type": "Website",
      "period": "Portfolio",
      "repos": "2"
    },
    "github": "https://github.com/seifeslimene/influen_x_backend",
    "githubLinks": [
      {
        "label": "Backend",
        "url": "https://github.com/seifeslimene/influen_x_backend"
      },
      {
        "label": "Frontend",
        "url": "https://github.com/seifeslimene/influen_x_frontend"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/influen_x/influenx-home-desktop.png",
      "/images/projects/web/influen_x/influenx-home-mobile.png",
      "/images/projects/web/influen_x/influenx-home-tablet.png"
    ]
  },
  {
    "id": "ingiz",
    "title": "Ingiz",
    "description": "Ingiz is a professional fintech/banking mobile application that enables adult users to issue and manage payment cards, conduct financial transactions (transfers, top-ups, payments), and access comprehensive account management features integrated with an external banking system. The platform combines robust backend services with a React Native mobile app, featuring biometric authentication, multi-currency support, and agent/operator management for customer support. It is strictly designed for adult users requiring government-issued identification and follows enterprise-grade security standards, with no provisions for minors or child users.",
    "technologies": [
      "React Native",
      "React"
    ],
    "metrics": {
      "type": "Mobile",
      "period": "Portfolio",
      "repos": "2"
    },
    "github": "https://github.com/seifeslimene/ingiz_mobile_app_back",
    "githubLinks": [
      {
        "label": "Backend",
        "url": "https://github.com/seifeslimene/ingiz_mobile_app_back"
      },
      {
        "label": "Frontend",
        "url": "https://github.com/seifeslimene/ingiz_mobile_app_front"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/mobile/ingiz/ingiz_mobile_app_1.jpg",
      "/images/projects/mobile/ingiz/ingiz_mobile_app_10.jpg",
      "/images/projects/mobile/ingiz/ingiz_mobile_app_2.jpg",
      "/images/projects/mobile/ingiz/ingiz_mobile_app_3.jpg",
      "/images/projects/mobile/ingiz/ingiz_mobile_app_5.jpg",
      "/images/projects/mobile/ingiz/ingiz_mobile_app_6.jpg",
      "/images/projects/mobile/ingiz/ingiz_mobile_app_9.jpg"
    ]
  },
  {
    "id": "react_phone_store",
    "title": "React Phone Store",
    "description": "React Phone Ecommerce is a mobile phone retail platform that enables customers to browse, search, and purchase smartphones and related devices online. Built with React, the application provides an intuitive shopping interface where users can explore phone categories, view detailed product information, compare models, and manage their shopping cart before completing purchases. The platform delivers a responsive and interactive experience for discovering and buying mobile phones through a modern web-based storefront.",
    "technologies": [
      "React"
    ],
    "metrics": {
      "type": "Website",
      "period": "Portfolio",
      "repos": "1"
    },
    "github": "https://github.com/seifeslimene/react_phone_ecommerce",
    "githubLinks": [
      {
        "label": "Fullstack",
        "url": "https://github.com/seifeslimene/react_phone_ecommerce"
      }
    ],
    "live": "https://phonestore.seifeddineslimene.com",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/react_phone_store/react_phone_ecommerce_1.jpg",
      "/images/projects/web/react_phone_store/react_phone_ecommerce_2.jpg",
      "/images/projects/web/react_phone_store/react_phone_ecommerce_3.jpg"
    ]
  },
  {
    "id": "sales_app",
    "title": "Sales App",
    "description": "Sales App is a modern sales management and tracking platform that helps sales teams monitor their performance, manage deals, and track revenue opportunities. The frontend built with Next.js and TypeScript provides a user-friendly interface for sales representatives and managers to view sales metrics, track transactions, and manage customer interactions. The backend API developed in Java delivers robust services for handling sales data, transaction processing, and reporting functionalities. Together, the Sales App creates a complete solution for businesses to streamline their sales operations, monitor performance metrics, and make data-driven decisions through an intuitive web-based dashboard combined with a reliable backend infrastructure.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Java"
    ],
    "metrics": {
      "type": "Website",
      "period": "Portfolio",
      "repos": "2"
    },
    "github": "https://github.com/seifeslimene/sales_app_frontend_only",
    "githubLinks": [
      {
        "label": "Frontend",
        "url": "https://github.com/seifeslimene/sales_app_frontend_only"
      },
      {
        "label": "Backend",
        "url": "https://github.com/seifeslimene/sales_api"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/sales_app/sales_app_1.jpg",
      "/images/projects/web/sales_app/sales_app_2.jpg"
    ]
  },
  {
    "id": "seif_shop",
    "title": "Seif Shop",
    "description": "Seif Shop is a comprehensive full-stack e-commerce clothing platform that combines a stylish customer shopping experience with powerful content management capabilities. The customer-facing application built with Next.js enables shoppers to browse clothing products, explore categories with interactive sliders, manage their shopping cart, and complete secure purchases through integrated Stripe payment processing. The shopping experience includes beautiful notifications, celebration effects upon successful purchases, and product imagery sourced from a centralized content database. Behind the scenes, the admin platform powered by Sanity provides store managers with a content management studio to organize and publish clothing products, manage inventory, and maintain the product catalog in real-time. Together, Seif Shop delivers a modern e-commerce solution for fashion retailers to sell clothing online while maintaining full control over product content and inventory through an intuitive admin interface.",
    "technologies": [
      "Next.js",
      "Stripe",
      "Sanity"
    ],
    "metrics": {
      "type": "Website",
      "period": "Portfolio",
      "repos": "2"
    },
    "github": "https://github.com/seifeslimene/seif_shop_app",
    "githubLinks": [
      {
        "label": "Frontend",
        "url": "https://github.com/seifeslimene/seif_shop_app"
      },
      {
        "label": "Admin",
        "url": "https://github.com/seifeslimene/seif_shop_admin"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/seif_shop/localhost-3002-desktop.png"
    ]
  },
  {
    "id": "seif_store",
    "title": "Seif Store",
    "description": "Seif Store is a modern e-commerce platform specializing in computer hardware and peripherals that delivers a seamless shopping experience with secure Google authentication. Customers can explore products organized by categories such as mice and keyboards, search for specific items, filter products by price in ascending or descending order, and manage their shopping cart with full add, remove, and quantity adjustment capabilities. The platform features detailed product pages with comprehensive information, secure payment processing through Stripe API integration, and a complete order history for tracking previous purchases. Built with Next.js 13, React Query, and Tailwind CSS, Seif Store combines a responsive frontend interface with a PostgreSQL database and Prisma ORM backend to provide a reliable and user-friendly solution for purchasing computer peripherals online.",
    "technologies": [
      "Next.js 13",
      "Next.js",
      "React Query",
      "React"
    ],
    "metrics": {
      "type": "Website",
      "period": "Portfolio",
      "repos": "1"
    },
    "github": "https://github.com/seifeslimene/seif_store",
    "githubLinks": [
      {
        "label": "Fullstack",
        "url": "https://github.com/seifeslimene/seif_store"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/seif_store/screenshot-home.png",
      "/images/projects/web/seif_store/screenshot-keyboards.png",
      "/images/projects/web/seif_store/screenshot-mouses.png",
      "/images/projects/web/seif_store/screenshot-product.png",
      "/images/projects/web/seif_store/screenshot-search.png"
    ]
  },
  {
    "id": "seo_blog",
    "title": "SEO Blog",
    "description": "SEO Blog is a comprehensive blogging platform designed for content creators and publishers to share articles, engage with readers, and manage their online presence with search engine optimization in mind. The frontend built with Next.js provides an intuitive interface for readers to discover and read blog posts, with support for user authentication and admin capabilities for content management. The backend REST API developed with Express and MongoDB powers the platform`'s core functionality, handling user authentication with JWT tokens, blog post management, and data persistence. Administrators with appropriate role permissions can create, edit, and publish content through the platform, while readers enjoy optimized, fast-loading pages designed for search visibility. Together, SEO Blog creates a complete solution for publishing quality content with built-in SEO best practices and a user-friendly interface for both readers and content creators.",
    "technologies": [
      "Next.js",
      "Express",
      "MongoDB",
      "JWT"
    ],
    "metrics": {
      "type": "Website",
      "period": "Portfolio",
      "repos": "2"
    },
    "github": "https://github.com/seifeslimene/seo_blog_back",
    "githubLinks": [
      {
        "label": "Backend",
        "url": "https://github.com/seifeslimene/seo_blog_back"
      },
      {
        "label": "Frontend",
        "url": "https://github.com/seifeslimene/seo_blog_front"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/seo_blog/seo_blog_1.jpg",
      "/images/projects/web/seo_blog/seo_blog_2.jpg",
      "/images/projects/web/seo_blog/seo_blog_3.jpg",
      "/images/projects/web/seo_blog/seo_blog_4.jpg",
      "/images/projects/web/seo_blog/seo_blog_5.jpg",
      "/images/projects/web/seo_blog/seo_blog_6.jpg"
    ]
  },
  {
    "id": "tunisia_gadgets",
    "title": "Tunisia Gadgets",
    "description": "The Tunisia Gadgets Admin Dashboard is a web-based management platform designed for store administrators to oversee and control all operations of the online gadgets store. It enables administrators to manage product listings, monitor customer orders, track inventory levels, and maintain the overall health of the e-commerce business. Built as a Next.js application, it provides a user-friendly interface for handling the backend operations that keep the Tunisia Gadgets mobile store running smoothly and efficiently.",
    "technologies": [
      "Next.js"
    ],
    "metrics": {
      "type": "Mobile",
      "period": "Portfolio",
      "repos": "3"
    },
    "github": "https://github.com/seifeslimene/tunisia_gadgets_mobile_app_back",
    "githubLinks": [
      {
        "label": "Backend",
        "url": "https://github.com/seifeslimene/tunisia_gadgets_mobile_app_back"
      },
      {
        "label": "Frontend",
        "url": "https://github.com/seifeslimene/tunisia_gadgets_mobile_app_front"
      },
      {
        "label": "Admin",
        "url": "https://github.com/seifeslimene/tunisia_gadgets_mobile_app_admin"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/mobile/tunisia_gadgets/readme-screenshot.png",
      "/images/projects/mobile/tunisia_gadgets/tunisia_gadgets_mobile_app.jpg"
    ]
  },
  {
    "id": "tunisia_green_e_-_commerce",
    "title": "Tunisia Green E-Commerce",
    "description": "Tunisia Green is an eco-conscious mobile e-commerce platform that enables customers to authenticate securely, browse and discover products, manage their shopping cart and wishlist, and complete purchases with multiple payment options including cash and credit card. The app offers personalized user experiences with biometric login support, real-time order tracking with push notifications, the ability to upload and edit profile information, and features for sharing products on social media. Supported by a robust backend infrastructure, it provides email notifications for password resets and order updates, along with seamless product payment processing and inventory management for a complete sustainable shopping experience.",
    "technologies": [
      "Mobile"
    ],
    "metrics": {
      "type": "Mobile",
      "period": "Portfolio",
      "repos": "2"
    },
    "github": "https://github.com/seifeslimene/tunisia_green_ecommerce_mobile_app_backend",
    "githubLinks": [
      {
        "label": "Backend",
        "url": "https://github.com/seifeslimene/tunisia_green_ecommerce_mobile_app_backend"
      },
      {
        "label": "Frontend",
        "url": "https://github.com/seifeslimene/tunisia_green_ecommerce_mobile_app_frontend"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/mobile/tunisia_green_e_-_commerce/screenshot_1.jpg",
      "/images/projects/mobile/tunisia_green_e_-_commerce/screenshot_2.jpg",
      "/images/projects/mobile/tunisia_green_e_-_commerce/screenshot_3.jpg",
      "/images/projects/mobile/tunisia_green_e_-_commerce/screenshot_4.jpg",
      "/images/projects/mobile/tunisia_green_e_-_commerce/screenshot_5.jpg",
      "/images/projects/mobile/tunisia_green_e_-_commerce/screenshot_6.jpg"
    ]
  },
  {
    "id": "tunisia_movies",
    "title": "Tunisia Movies",
    "description": "Tunisia Movies is a mobile application that enables users to discover, browse, and explore movies available in Tunisia's entertainment landscape. The app provides a mobile-first experience for movie enthusiasts to search for films, view detailed information, and stay updated on local cinema offerings. Built with JavaScript and optimized for mobile devices, Tunisia Movies delivers an intuitive interface for accessing comprehensive movie information and entertainment content tailored to Tunisian audiences.",
    "technologies": [
      "JavaScript",
      "Java"
    ],
    "metrics": {
      "type": "Mobile",
      "period": "Portfolio",
      "repos": "1"
    },
    "github": "https://github.com/seifeslimene/tunisia_movies_mobile_app",
    "githubLinks": [
      {
        "label": "fullstack",
        "url": "https://github.com/seifeslimene/tunisia_movies_mobile_app"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/mobile/tunisia_movies/tunisia_movies_1.jpg",
      "/images/projects/mobile/tunisia_movies/tunisia_movies_2.jpg",
      "/images/projects/mobile/tunisia_movies/tunisia_movies_3.jpg",
      "/images/projects/mobile/tunisia_movies/tunisia_movies_4.jpg",
      "/images/projects/mobile/tunisia_movies/tunisia_movies_5.jpg",
      "/images/projects/mobile/tunisia_movies/tunisia_movies_6.jpg"
    ]
  },
  {
    "id": "tunisia_social_media",
    "title": "Tunisia Social Media",
    "description": "Tounsi Social Media is a modern Tunisian-focused social networking platform that connects users from Tunisia to share updates, engage with their community, and build meaningful connections. The platform enables users to authenticate securely through GitHub OAuth, view a personalized feed of posts from the community, and interact with others through a responsive interface that works seamlessly across desktop, tablet, and mobile devices. Built with Next.js 14, TypeScript, and powered by Turso (LibSQL) with Drizzle ORM for data management, Tounsi Social Media provides a lightweight yet feature-rich social experience. The application delivers fast performance, real-time interactions, and a clean user interface designed with NextUI components, creating an engaging social platform tailored for Tunisian users to stay connected and share their stories.",
    "technologies": [
      "Next.js 14",
      "Next.js",
      "TypeScript",
      "Drizzle"
    ],
    "metrics": {
      "type": "Website",
      "period": "Portfolio",
      "repos": "1"
    },
    "github": "https://github.com/seifeslimene/tunisia_social_media",
    "githubLinks": [
      {
        "label": "Fullstack",
        "url": "https://github.com/seifeslimene/tunisia_social_media"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/tunisia_social_media/home-desktop.png",
      "/images/projects/web/tunisia_social_media/home-mobile.png",
      "/images/projects/web/tunisia_social_media/home-tablet.png"
    ]
  },
  {
    "id": "tunmart_store",
    "title": "Tunmart Store",
    "description": "Tunmart Tunisia is a modern e-commerce storefront built with Next.js that brings online shopping to Tunisian consumers. The platform provides a responsive shopping experience across all devices, featuring a clean and intuitive interface for browsing products, managing shopping carts, and completing purchases. With a focus on mobile-first design, Tunmart Tunisia delivers a seamless shopping experience whether accessed from desktop, tablet, or mobile devices, enabling customers in Tunisia to discover and purchase products conveniently through a fast and reliable online marketplace.",
    "technologies": [
      "Next.js"
    ],
    "metrics": {
      "type": "Website",
      "period": "Portfolio",
      "repos": "1"
    },
    "github": "https://github.com/seifeslimene/tunmart_tunisia",
    "githubLinks": [
      {
        "label": "Fullstack",
        "url": "https://github.com/seifeslimene/tunmart_tunisia"
      }
    ],
    "live": "#",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/tunmart_store/desktop.png",
      "/images/projects/web/tunmart_store/mobile.png",
      "/images/projects/web/tunmart_store/tablet.png"
    ]
  },
  {
    "id": "vanilla_online_store",
    "title": "Vanilla Online Store",
    "description": "Vanille Online Store is a lightweight, responsive single-page application built with vanilla JavaScript that provides a streamlined online shopping experience without heavy frameworks. The platform enables customers to browse products, view detailed information, manage their shopping cart, and complete purchases through an intuitive interface. Integrated with EmailJS for customer communication and Firebase Real-time Database for product and order management, Vanille Online Store leverages the RAWG API for gaming products catalog. Built with vanilla JavaScript, jQuery, Bootstrap, HTML, and CSS, the store delivers a fast-loading, responsive design that works seamlessly across desktop, tablet, and mobile devices, offering an alternative e-commerce solution that emphasizes simplicity and performance.",
    "technologies": [
      "JavaScript",
      "Firebase",
      "Bootstrap",
      "Java"
    ],
    "metrics": {
      "type": "Website",
      "period": "Portfolio",
      "repos": "1"
    },
    "github": "https://github.com/seifeslimene/vanille_online_store",
    "githubLinks": [
      {
        "label": "Fullstack",
        "url": "https://github.com/seifeslimene/vanille_online_store"
      }
    ],
    "live": "https://vanilla.seifeddineslimene.com",
    "stars": 0,
    "forks": 0,
    "images": [
      "/images/projects/web/vanilla_online_store/vanille_online_store_1.jpg",
      "/images/projects/web/vanilla_online_store/vanille_online_store_2.jpg"
    ]
  }
]
