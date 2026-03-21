import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCalendar,
  FiClock,
  FiArrowRight,
  FiBookOpen
} from 'react-icons/fi';

const BlogSection = () => {
  // DevOps and Trending Tech blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Kubernetes Security Best Practices for Production",
      excerpt: "Essential security configurations and practices to protect your Kubernetes clusters in production environments. From RBAC to network policies.",
      date: "Jan 20, 2025",
      readTime: "8 min read",
      category: "DevOps Security",
      tags: ["Kubernetes", "Security", "DevOps", "Production"],
      color: "#3b82f6"
    },
    {
      id: 2,
      title: "Docker Multi-Stage Builds: Optimizing Container Images",
      excerpt: "Learn how to create smaller, more secure Docker images using multi-stage builds and best practices for container optimization.",
      date: "Jan 15, 2025",
      readTime: "6 min read",
      category: "Containerization",
      tags: ["Docker", "Optimization", "DevOps"],
      color: "#06b6d4"
    },
    {
      id: 3,
      title: "GitOps with ArgoCD: Automated Deployment Workflows",
      excerpt: "Implementing GitOps principles using ArgoCD for automated, reliable, and auditable deployment workflows in Kubernetes.",
      date: "Jan 10, 2025",
      readTime: "10 min read",
      category: "CI/CD",
      tags: ["GitOps", "ArgoCD", "Automation"],
      color: "#10b981"
    }
  ];

  const BlogCard = ({ post, index }) => (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 group cursor-pointer ${
        post.featured ? 'lg:col-span-2' : ''
      }`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
      }}
      whileHover={{ 
        y: -5, 
        scale: 1.02,
        boxShadow: '0 12px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)'
      }}
    >
      {/* Featured Badge */}
      {post.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-xs font-semibold text-white">
            Featured
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Category & Meta */}
        <div className="flex items-center justify-between mb-4">
          <span 
            className="px-3 py-1 rounded-full text-xs font-medium border"
            style={{ 
              backgroundColor: `${post.color}20`,
              borderColor: `${post.color}40`,
              color: post.color 
            }}
          >
            {post.category}
          </span>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <div className="flex items-center gap-1">
              <FiCalendar className="w-3 h-3" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <FiClock className="w-3 h-3" />
              {post.readTime}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-white mb-3 transition-all duration-300 ${
          post.featured ? 'text-2xl md:text-3xl' : 'text-xl'
        }`}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className={`text-white/70 mb-4 leading-relaxed ${
          post.featured ? 'text-base md:text-lg' : 'text-sm'
        }`}>
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, post.featured ? 4 : 3).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/80 hover:bg-white/20 transition-colors duration-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read More */}
        <div className="flex items-center justify-between">
          <motion.button
            className="flex items-center gap-2 text-white/80 hover:text-white font-medium group-hover:gap-3 transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            Read More
            <FiArrowRight className="w-4 h-4" />
          </motion.button>
          <div className="flex items-center gap-2 text-white/60">
            <FiBookOpen className="w-4 h-4" />
            <span className="text-sm">Technical</span>
          </div>
        </div>
      </div>
    </motion.article>
  );

  return (
    <section
      id="blog"
      className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      {/* Clean Background - Similar to Contact Section */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Pure black background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Subtle neutral orbs */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-80 h-80 bg-gradient-to-r from-gray-800/6 to-gray-700/4 rounded-full blur-3xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-gradient-to-r from-gray-900/8 to-gray-800/6 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-zinc-800/4 to-stone-800/3 rounded-full blur-3xl"
          animate={{
            x: [0, 15, -10, 0],
            y: [0, -10, 8, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Subtle particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gray-400/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 0.4, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Minimal grid pattern */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.01, 0.03, 0.01] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech{' '}
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Insights
            </motion.span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            DevOps practices, trending technologies, and practical insights from production environments
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;