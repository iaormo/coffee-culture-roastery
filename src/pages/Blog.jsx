import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Heart, Coffee, Leaf, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Small-Batch Roasting: Why Every Bean Matters",
      excerpt: "Discover the passion behind our small-batch roasting process and how it transforms ordinary coffee beans into extraordinary experiences that tell the story of Philippine coffee culture.",
      content: `In the heart of Bacolod City, where the morning air carries the rich aroma of freshly roasted coffee, we practice an art that's been perfected over generations. Small-batch roasting isn't just a method—it's our love letter to coffee lovers who understand that every bean has a story to tell.

Our master roasters, with their years of experience and certified expertise, treat each batch as a unique masterpiece. Unlike mass production that prioritizes quantity, we focus on quality, carefully monitoring temperature, time, and the subtle changes in color and aroma that signal the perfect roast.

The journey begins with our direct partnerships with local Philippine farmers, particularly from the fertile soils of Negros Occidental. These relationships aren't just business transactions—they're bonds built on mutual respect and shared passion for exceptional coffee.

When you open a bag of Coffee Culture Roastery coffee, you're not just getting coffee. You're getting a piece of our story, our commitment to ethical sourcing, and our dedication to bringing you the finest flavors that Philippine soil has to offer.`,
      author: "Coffee Culture Team",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Roasting Process",
      tags: ["Small-Batch", "Philippine Coffee", "Artisan Roasting"]
    },
    {
      id: 2,
      title: "From Farm to Cup: The Emotional Journey of Philippine Coffee",
      excerpt: "Follow the heartwarming journey of coffee from the hands of our dedicated farmers to your morning cup, and discover the human stories that make every sip meaningful.",
      content: `Every morning, as the sun rises over the rolling hills of Negros Occidental, our coffee farmers begin their day with the same dedication that has been passed down through generations. These aren't just farmers—they're guardians of tradition, keepers of stories, and partners in our mission to bring you the world's finest coffee.

The relationship between farmer and roaster is sacred in our world. We don't just buy beans; we invest in relationships, in futures, and in the preservation of Philippine coffee heritage. When you sip our coffee, you're tasting the result of countless hours of care, from the careful selection of the perfect cherry to the gentle hand-picking that ensures only the best beans make it to your cup.

Our farmers share our passion for quality, and their dedication shows in every batch. They understand that great coffee isn't just about the final product—it's about the journey, the people, and the love that goes into every step of the process.

This is why our coffee tastes different. It's not just about the beans or the roasting process—it's about the human connection, the shared dreams, and the collective effort to create something truly special. Every cup is a celebration of Philippine coffee culture and the people who make it possible.`,
      author: "Maria Santos",
      date: "December 12, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Coffee Origins",
      tags: ["Philippine Coffee", "Farm Stories", "Sustainability"]
    },
    {
      id: 3,
      title: "The Perfect Brew: Creating Moments of Connection Through Coffee",
      excerpt: "Explore how coffee has the power to bring people together, create lasting memories, and become the centerpiece of meaningful conversations and shared experiences.",
      content: `Coffee has a magical way of bringing people together. It's not just a beverage—it's a catalyst for connection, a reason to pause in our busy lives and truly be present with the people who matter most. At Coffee Culture Roastery, we believe that every cup of coffee has the potential to create a moment of genuine human connection.

Think about it: the first date over coffee, the late-night conversations with friends, the quiet morning moments with family, the business meetings that turned into friendships. Coffee has been there for all of these moments, serving as both comfort and catalyst.

Our coffee is crafted with this understanding. Every blend is designed not just to taste amazing, but to enhance the experience of connection. Whether it's the smooth, approachable notes of our Unleashed blend that make it perfect for sharing with new friends, or the bold, confident character of our Black Magic that's ideal for deep conversations, each coffee has a personality that matches the moment.

We've seen it time and again—our customers tell us stories of how our coffee has been part of their most meaningful moments. The proposal that happened over a cup of our Negros Blend, the reconciliation that began with shared coffee, the celebration that was made more special with our carefully crafted brews.

This is why we do what we do. Not just to make great coffee, but to be part of the moments that matter. Every bean we roast, every cup we help create, is our contribution to the beautiful tapestry of human connection.`,
      author: "Thomas Rodriguez",
      date: "December 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Coffee Culture",
      tags: ["Connection", "Community", "Coffee Moments"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <head>
        <title>Coffee Culture Blog - Stories from the Heart of Philippine Coffee | Coffee Culture Roastery</title>
        <meta name="description" content="Discover the emotional journey of Philippine coffee through our blog. Read about small-batch roasting, farm-to-cup stories, and the connections coffee creates." />
        <meta name="keywords" content="Philippine coffee, coffee blog, small-batch roasting, coffee culture, farm-to-cup, coffee stories" />
        <meta property="og:title" content="Coffee Culture Blog - Stories from the Heart of Philippine Coffee" />
        <meta property="og:description" content="Discover the emotional journey of Philippine coffee through our blog. Read about small-batch roasting, farm-to-cup stories, and the connections coffee creates." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coffee Culture Blog - Stories from the Heart of Philippine Coffee" />
        <meta name="twitter:description" content="Discover the emotional journey of Philippine coffee through our blog." />
      </head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-passion-red to-orange-roast">
        <div className="absolute inset-0 bg-black-coffee/30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Link to="/">
              <Button variant="ghost" className="text-black-coffee hover:bg-black-coffee/20 mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="font-knewave text-4xl sm:text-5xl lg:text-6xl mb-6 text-passion-red">
            COFFEE STORIES
          </h1>
          <p className="font-glacial text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-black-coffee">
            Dive into the emotional journey of Philippine coffee, from the hands of our dedicated farmers 
            to the moments of connection it creates in your daily life.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group border-0 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer" onClick={() => window.location.href = `/blog/${post.id}`}>
                {/* Blog Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-passion-red text-white px-3 py-1 rounded-full text-xs font-glacial font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <CardContent className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span className="font-glacial">{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="font-glacial">{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="font-glacial">{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="font-knewave text-xl mb-3 group-hover:text-passion-red transition-colors duration-300">
                    <span className="text-passion-red">{post.title.split(' ').slice(0, 2).join(' ')}</span>
                    <span className="text-black-coffee"> {post.title.split(' ').slice(2).join(' ')}</span>
                  </h2>

                  {/* Excerpt */}
                  <p className="font-glacial text-gray-700 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-glacial"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <Button 
                    className="w-full bg-passion-red hover:bg-red-700 text-white font-glacial font-semibold cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `/blog/${post.id}`;
                    }}
                  >
                    Read Full Story
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-8 text-center">
              <div className="bg-passion-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-knewave text-2xl mb-3 text-passion-red">
                STAY CONNECTED
              </h3>
              <p className="font-glacial text-lg mb-6 max-w-2xl mx-auto text-black">
                Get our latest coffee stories, brewing tips, and exclusive offers delivered to your inbox. 
                Join our community of coffee lovers and never miss a story from the heart of Philippine coffee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-passion-red/50 focus:border-passion-red font-glacial text-black"
                />
                <Button className="bg-passion-red text-white hover:bg-red-700 font-glacial font-semibold">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-knewave text-3xl sm:text-4xl text-passion-red mb-4">
              EXPLORE MORE STORIES
            </h2>
            <p className="font-glacial text-lg text-black-coffee max-w-2xl mx-auto">
              Discover different aspects of coffee culture, from brewing techniques to the stories behind our favorite blends.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-passion-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-8 w-8 text-passion-red" />
                </div>
                <h3 className="font-knewave text-lg text-black-coffee mb-2">Brewing Guides</h3>
                <p className="font-glacial text-sm text-black-coffee">
                  Master the art of brewing with our expert tips and techniques
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-passion-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-passion-red" />
                </div>
                <h3 className="font-knewave text-lg text-black-coffee mb-2">Sustainability</h3>
                <p className="font-glacial text-sm text-black-coffee">
                  Learn about our commitment to ethical sourcing and environmental responsibility
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-passion-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-passion-red" />
                </div>
                <h3 className="font-knewave text-lg text-black-coffee mb-2">Coffee Culture</h3>
                <p className="font-glacial text-sm text-black-coffee">
                  Explore the rich traditions and modern innovations in coffee culture
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Blog; 