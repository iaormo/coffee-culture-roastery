import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Heart, Coffee, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Small-Batch Roasting: Why Every Bean Matters",
      excerpt: "Discover the passion behind our small-batch roasting process and how it transforms ordinary coffee beans into extraordinary experiences that tell the story of Philippine coffee culture.",
      content: `In the heart of Bacolod City, where the morning air carries the rich aroma of freshly roasted coffee, we practice an art that's been perfected over generations. Small-batch roasting isn't just a method—it's our love letter to coffee lovers who understand that every bean has a story to tell.

Our master roasters, with their years of experience and certified expertise, treat each batch as a unique masterpiece. Unlike mass production that prioritizes quantity, we focus on quality, carefully monitoring temperature, time, and the subtle changes in color and aroma that signal the perfect roast.

The journey begins with our direct partnerships with local Philippine farmers, particularly from the fertile soils of Negros Occidental. These relationships aren't just business transactions—they're bonds built on mutual respect and shared passion for exceptional coffee.

When you open a bag of Coffee Culture Roastery coffee, you're not just getting coffee. You're getting a piece of our story, our commitment to ethical sourcing, and our dedication to bringing you the finest flavors that Philippine soil has to offer.

The Science Behind Small-Batch Roasting

Small-batch roasting allows us to give each bean the attention it deserves. Our roasters monitor every aspect of the process:

Temperature Control: Precise temperature management ensures consistent roasting
Time Management: Each bean variety has its optimal roasting time
Color Development: Visual cues guide our roasters to perfection
Aroma Monitoring: The scent tells us when the beans are ready

Why Small-Batch Matters

Unlike industrial roasting, our small-batch approach ensures:

1. Freshness: Every batch is roasted to order
2. Quality Control: Each bean is carefully monitored
3. Flavor Development: Optimal flavor profiles are achieved
4. Sustainability: Reduced waste and energy consumption

Meet Our Master Roasters

Our team of certified Q Arabica & Robusta graders brings decades of combined experience to every roast. They understand that great coffee isn't just about technique—it's about passion, patience, and respect for the bean.

Join us in celebrating the art of small-batch roasting, where every bean tells a story and every cup carries the legacy of Philippine coffee culture.`,
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

This is why our coffee tastes different. It's not just about the beans or the roasting process—it's about the human connection, the shared dreams, and the collective effort to create something truly special. Every cup is a celebration of Philippine coffee culture and the people who make it possible.

The Farmer's Story

Meet Maria Santos, a third-generation coffee farmer from the mountains of Negros Occidental. Her family has been growing coffee for over 50 years, passing down not just the techniques, but the love and respect for the land.

"Every morning, I walk through our coffee trees and talk to them," Maria shares. "I tell them about the people who will enjoy their fruits, about the stories that will be shared over cups of coffee made from our beans."

Sustainable Practices

Our partnership with farmers goes beyond fair trade—it's about building sustainable futures:

Organic Methods: Natural pest control and fertilization
Water Conservation: Efficient irrigation systems
Soil Health: Crop rotation and natural soil enrichment
Community Support: Education and healthcare programs

The Harvest Process

The coffee harvest is a labor of love that requires precision and patience:

1. Selective Picking: Only the ripest cherries are harvested
2. Quality Sorting: Beans are sorted by size and quality
3. Processing: Natural or washed processing methods
4. Drying: Sun-drying on raised beds
5. Storage: Proper storage to maintain quality

Building Relationships

We believe that great coffee starts with great relationships. Our direct partnerships with farmers ensure:

Fair Compensation: Above-market prices for quality beans
Long-term Contracts: Stable income for farming families
Technical Support: Training in sustainable farming methods
Market Access: Direct connection to consumers

This is the story behind every cup of Coffee Culture Roastery coffee—a story of passion, partnership, and the beautiful journey from farm to cup.`,
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

This is why we do what we do. Not just to make great coffee, but to be part of the moments that matter. Every bean we roast, every cup we help create, is our contribution to the beautiful tapestry of human connection.

The Psychology of Coffee Connection

Research shows that coffee shops are among the most important social spaces in our communities. They serve as:

Third Places: Neutral ground for social interaction
Creative Hubs: Spaces where ideas are born and shared
Community Centers: Gathering places for diverse groups
Relationship Builders: Environments that foster connection

Coffee and Conversation

The act of sharing coffee creates a unique social dynamic:

1. Ritual: The preparation and sharing process builds anticipation
2. Comfort: The warmth and aroma create a sense of well-being
3. Focus: Coffee helps us be present in conversations
4. Memory: The experience creates lasting impressions

Our Coffee's Personality

Each of our blends is designed to enhance different types of social interactions:

Unleashed Blend
Perfect for: First meetings, casual conversations
Flavor Profile: Smooth, approachable, welcoming
Social Vibe: Open, friendly, inclusive

Black Magic Blend
Perfect for: Deep conversations, intimate gatherings
Flavor Profile: Bold, complex, thought-provoking
Social Vibe: Intimate, meaningful, profound

Negros Blend
Perfect for: Celebrations, group gatherings
Flavor Profile: Robust, energetic, communal
Social Vibe: Lively, celebratory, unifying

Creating Your Coffee Moments

Here are some ways to create meaningful coffee connections:

1. Morning Rituals: Start your day with coffee and reflection
2. Coffee Dates: Use coffee as a reason to connect with friends
3. Family Time: Make coffee part of family traditions
4. Work Meetings: Transform business interactions with quality coffee
5. Celebrations: Include coffee in your special moments

The Coffee Culture Community

Join our community of coffee lovers who understand the power of connection. Share your coffee stories, discover new ways to brew, and connect with others who share your passion for great coffee and meaningful relationships.

Remember, every cup of coffee is an opportunity to create a moment of connection. Let's make those moments count.`,
      author: "Thomas Rodriguez",
      date: "December 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Coffee Culture",
      tags: ["Connection", "Community", "Coffee Moments"]
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-knewave text-2xl text-passion-red mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button className="bg-passion-red hover:bg-red-700 text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-passion-red to-orange-roast text-white">
        <div className="absolute inset-0 bg-black-coffee/30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-start mb-6">
            <Link to="/blog">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-glacial">
                {post.category}
              </span>
            </div>
            
            <h1 className="font-knewave text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
              <span className="text-passion-red">{post.title.split(' ').slice(0, 2).join(' ')}</span>
              <span className="text-black-coffee"> {post.title.split(' ').slice(2).join(' ')}</span>
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span className="font-glacial">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="font-glacial">{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span className="font-glacial">{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="font-glacial text-gray-800 leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-passion-red/10 text-passion-red px-3 py-1 rounded-full text-sm font-glacial"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share and Navigation */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <Link to="/blog">
                  <Button variant="outline" className="border-passion-red text-passion-red hover:bg-passion-red hover:text-white">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to All Posts
                  </Button>
                </Link>
                
                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  <span className="font-glacial text-sm text-gray-600">Share this post:</span>
                  <Button variant="ghost" size="sm" className="text-passion-red hover:bg-passion-red/10">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost; 