import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Heart, Award, Users, Leaf, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const timeline = [
    {
      year: '2006',
      title: 'Seeds Sown',
      description: 'Thomas was not just dabbling in coffee; he was rewriting the script for Bacolod\'s coffee saga. Through the help of friendlies in various NGOs, he started schooling farmers on how to up their coffee game.'
    },
    {
      year: '2007',
      title: 'Manila Leap',
      description: 'Enter Figaro Coffee Company. They caught wind of his efforts and, boom, Bacolod beans hit Manila. It was our "mic drop" moment in the coffee world.'
    },
    {
      year: '2008',
      title: 'Special Start',
      description: 'The journey into specialty coffee began with a Roasting and Blending Class by Willem Boot in Mill Valley, California, followed by a hands-on roasting stint at Jones Coffee Company in Pasadena.'
    },
    {
      year: '2012',
      title: 'Coffee Works',
      description: 'Thomas was certified with the Q Arabica Grader certificate from Mane Alves at the Coffee Quality Institute in Taipei, marking a significant professional advancement.'
    },
    {
      year: '2013',
      title: 'Master is Born',
      description: 'Thomas went to Jakarta to obtain the Q Robusta Grader Certification from Rocky Rhodes. This achievement made history, establishing him as the first person in the Philippines certified in both Arabica and Robusta grading.'
    },
    {
      year: '2016',
      title: 'Brand\'s Birth',
      description: 'The dream crystallized into Coffee Culture Roastery. By November 2016, the doors swung open, welcoming all to a new coffee chapter.'
    },
    {
      year: '2021',
      title: 'The Rise',
      description: 'Workshops, Slow Food Coffee Coalition, and coffee trails. The roastery morphed into a coffee dojo, where knowledge flowed as freely as espresso.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'We serve coffee that is authentically grounded, packaged in sincerity and served with a side of humor.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Our farm-to-cup philosophy ensures ethical sourcing and sustainable practices that benefit both farmers and the environment.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We\'re building a community where coffee lovers connect, share stories, and create lasting relationships over great coffee.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Every bean is carefully selected, expertly roasted, and crafted to deliver an exceptional coffee experience.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'We\'re making awesome coffee accessible to everyone, demystifying the journey from bean to brew.'
    },
    {
      icon: Coffee,
      title: 'Passion',
      description: 'Our love for coffee drives everything we do, from sourcing the finest beans to perfecting every roast.'
    }
  ];

  const team = [
    {
      name: 'Thomas',
      role: 'Founder & Master Roaster',
      description: 'The maestro behind the beans at Coffee Culture Roastery. This guy isn\'t just familiar with coffee; he breathes it, lives it, and speaks its language fluently. As the resident coffee nerd, Thomas is the bridge between the lush coffee farms and your morning cup.',
      image: null
    },
    {
      name: 'Bombee',
      role: 'Co-Founder & Operations Director',
      description: 'The radiant face of Coffee Culture Roastery. With a smile that lights up the room and a hustle that\'s all heart, Bombee is the one you\'re greeted by, the one who makes you feel at home the second you step into the shop.',
      image: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-passion-red via-orange-roast to-black-coffee text-black-coffee">
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-knewave text-4xl sm:text-5xl lg:text-6xl mb-6 text-passion-red">
            OUR STORY
          </h1>
          <p className="font-glacial text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            This is the story of Coffee Culture Roastery - where every bean tells a tale, 
            every sip starts a conversation, and every year adds a layer to our rich, caffeinated legacy.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-knewave text-3xl sm:text-4xl text-passion-red mb-8">
              OUR MISSION
            </h2>
            <p className="font-glacial text-lg text-foreground leading-relaxed mb-8">
              We want to spark happiness, one cup at a time, in a spot that feels like your second home. 
              With a nod to sustainability and a commitment to our coffee community.
            </p>
            <div className="bg-sunshine-yellow/10 p-8 rounded-lg">
              <blockquote className="font-glacial text-xl text-passion-red font-medium italic">
                "Coffee Culture Roastery is a place in Bacolod where pretense is left at the door, 
                and genuine connections brew over the rich aroma of coffee."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-knewave text-3xl sm:text-4xl text-passion-red mb-4">
              OUR JOURNEY
            </h2>
            <p className="font-glacial text-lg text-balanced-gray max-w-2xl mx-auto">
              From humble beginnings to becoming a cornerstone of Bacolod's coffee culture, 
              here's how our story unfolded.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-passion-red"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-passion-red rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <Card className="hover-lift">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="font-knewave text-2xl text-passion-red mr-3">
                            {item.year}
                          </span>
                          <h3 className="font-knewave text-lg text-foreground">
                            {item.title}
                          </h3>
                        </div>
                        <p className="font-glacial text-sm text-balanced-gray leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-knewave text-3xl sm:text-4xl text-passion-red mb-4">
              OUR VALUES
            </h2>
            <p className="font-glacial text-lg text-balanced-gray max-w-2xl mx-auto">
              These core values guide everything we do, from sourcing beans to serving customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-passion-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-passion-red" />
                  </div>
                  <h3 className="font-knewave text-lg text-passion-red mb-3">
                    {value.title}
                  </h3>
                  <p className="font-glacial text-sm text-balanced-gray leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-passion-red text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-knewave text-3xl sm:text-4xl mb-4">
              MEET THE FOUNDERS
            </h2>
            <p className="font-glacial text-lg opacity-90 max-w-2xl mx-auto">
              The passionate individuals behind Coffee Culture Roastery who turned a dream 
              into a thriving coffee community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="bg-white/10 border-0 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-16 w-16 text-sunshine-yellow" />
                  </div>
                  <h3 className="font-knewave text-2xl text-sunshine-yellow mb-2">
                    {member.name}
                  </h3>
                  <p className="font-glacial text-sm text-white/80 mb-4">
                    {member.role}
                  </p>
                  <p className="font-glacial text-sm text-white/90 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-sunshine-yellow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-knewave text-3xl sm:text-4xl text-black-coffee mb-4">
            BE PART OF OUR STORY
          </h2>
          <p className="font-glacial text-lg text-black-coffee/80 mb-8 max-w-2xl mx-auto">
            Join our community of coffee lovers and experience the passion, quality, 
            and authenticity that defines Coffee Culture Roastery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" className="bg-passion-red hover:bg-red-700 text-white px-8 py-3 rounded-md font-glacial font-semibold transition-colors">
              Shop Our Coffee
            </Link>
            <Link to="/contact" className="border-2 border-black-coffee text-black-coffee hover:bg-black-coffee hover:text-white px-8 py-3 rounded-md font-glacial font-semibold transition-colors">
              Visit Our Roastery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

