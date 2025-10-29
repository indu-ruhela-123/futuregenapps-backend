export const getHomeData = (req, res) => {
  try {
    const homeData = {
      company: {
        name: "FutureGenApps®",
        tagline:
          "Best Website Designing Company in India offering complete Web Designing & Development solution with SEO Services",
        contact: {
          phone: ["+91 7428623109", "+91 9650436809"],
          email: "info@futuregenapps.com",
        },
        locations: [
          {
            office: "Head Office",
            address:
              "AAG-15, Azure Shipra Krishna, Near Kaushambi Metro Station, Kaushambi, Delhi-NCR-201012, India",
          },
          {
            office: "Noida Branch",
            address:
              "A Block, Sector 63, Noida, Uttar Pradesh-201301, India",
          },
          {
            office: "Gurugram Branch",
            address: "545, Sector 105, Gurugram, Haryana, India",
          },
          {
            office: "Canada Office",
            address: "1186 Hooke Road, Edmonton, Alberta, Canada",
          },
        ],
      },

      services: [
        {
          category: "Web Designing",
          items: [
            "Static Website Design",
            "Dynamic Website Design",
            "Responsive Website Design",
            "E-Commerce Website Design",
            "Corporate Website Design",
            "Landing Page Website Design",
          ],
        },
        {
          category: "Web Development",
          items: [
            "WordPress Development",
            "Laravel Development",
            "CodeIgnitor Development",
            "Web Portal Development",
            "CMS Development",
            "Website Maintenance",
            "SEO Services",
          ],
        },
        {
          category: "Digital Marketing & Others",
          items: [
            "Mobile App Development",
            "Graphics Designing Services",
            "Software Development (ERP/CRM)",
          ],
        },
      ],

      process: [
        "Requirement understanding",
        "Research & Design",
        "Development & Testing",
        "Demo & Final Delivery",
      ],

      expertiseTechnologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "React",
        "Angular",
        "PHP",
        "Laravel",
        "CodeIgnitor",
        "Python",
        "Node.js",
        "Android",
        "iOS",
        "SEO",
        "SMO",
        "Local SEO",
        "Google Ads",
        "Facebook Ads",
        "Ecommerce SEO",
      ],

      whyChooseUs: {
        points: [
          "Best Quality",
          "100% Satisfaction",
          "On-time Delivery",
          "Long term Support",
        ],
        message:
          "With a team of enthusiastic web designers and developers, we tailor websites to client unique needs and ensure scheduled timelines.",
      },

      clients: {
        brandsWorkedWith: [
          "Maple Bear South Asia",
          "3 S Graphic Solutions",
          "HCI Technologies",
          "Greenfields School Vivek Vihar",
          "Quantinox B2B Solutions",
          "Cambridge Education Consultants",
          "United Homez",
          "Rajeshwari & Associates",
          "Vivah Luxury Weddings",
        ],
        industriesServed: [
          "Manufacturing",
          "Chemicals",
          "Education",
          "Real Estate",
          "E-commerce",
          "Start-ups",
          "MSMEs",
          "Enterprises",
        ],
      },

      faq: [
        {
          q: "Why should you hire FutureGenApps® for website designing in India?",
          a: "With years of experience in website designing and development industry, we have a team of professional website designers in India and have established ourselves as the best website designing company in India to tailor websites to customers’ unique needs.",
        },
        {
          q: "What makes FutureGenApps® the top website designing company in India?",
          a: "Our website designers and developers have diverse expertise in delivering quality websites within scheduled timelines.",
        },
        {
          q: "How long does it take to develop a website?",
          a: "A static website with a basic UI/UX design will take up to 4-5 working days approximately. Whereas an ecommerce website or bespoke dynamic website with specific features can take up to 15-20 days.",
        },
      ],

      footer: {
        socialProfiles: {
          facebook: "https://www.facebook.com",
          instagram: "https://www.instagram.com",
          linkedin: "https://www.linkedin.com",
          twitter: "https://twitter.com",
          youtube: "https://www.youtube.com",
        },
        importantLinks: {
          about: "/about",
          privacyPolicy: "/privacy-policy",
          refundPolicy: "/refund-policy",
          termsAndConditions: "/terms-and-conditions",
          jobOpenings: "/career",
        },
        topCitiesIndia: [
          "Delhi",
          "Noida",
          "Ghaziabad",
          "Meerut",
          "Faridabad",
          "Kaushambi",
          "Gurugram",
          "Indirapuram",
          "Vaishali",
          "East Delhi",
          "Moradabad",
          "Hyderabad",
          "Bangalore",
          "Coimbatore",
        ],
        topCountriesServed: [
          "India",
          "USA",
          "Canada",
          "Switzerland",
          "Australia",
          "New Zealand",
          "UK",
          "Germany",
          "Japan",
          "France",
          "Greece",
          "Denmark",
          "Poland",
          "Norway",
          "Brazil",
          "South Korea",
          "Dubai",
          "Kuwait",
          "Qatar",
        ],
      },

      // 🖼️ NEW IMAGES SECTION
      images: {
        banners: [
          "https://www.futuregenapps.com/images/banner1.webp",
          "https://www.futuregenapps.com/images/banner2.webp",
          "https://www.futuregenapps.com/images/banner3.webp",
        ],
        services: [
          {
            name: "Web Designing",
            image: "https://www.futuregenapps.com/images/web-design.webp",
          },
          {
            name: "Web Development",
            image: "https://www.futuregenapps.com/images/web-development.webp",
          },
          {
            name: "Mobile App Development",
            image: "https://www.futuregenapps.com/images/mobile-app.webp",
          },
          {
            name: "SEO Services",
            image: "https://www.futuregenapps.com/images/seo.webp",
          },
        ],
        clients: [
          "https://www.futuregenapps.com/images/client1.webp",
          "https://www.futuregenapps.com/images/client2.webp",
          "https://www.futuregenapps.com/images/client3.webp",
          "https://www.futuregenapps.com/images/client4.webp",
        ],
        footerLogo: "https://www.futuregenapps.com/images/logo-footer.webp",
      },
    };

    res.status(200).json({ success: true, data: homeData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
