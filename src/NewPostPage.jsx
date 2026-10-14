import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './NewPostPage.css';

export default function NewPostPage() {
  // 1. React State to track selected post type
  const [postType, setPostType] = useState('question');

  // 2. States for form inputs
  const [questionData, setQuestionData] = useState({
    title: '',
    description: '',
    tags: '',
  });

  const [articleData, setArticleData] = useState({
    title: '',
    abstract: '',
    articleText: '',
    tags: '',
  });

  // Input change handlers
  const handleQuestionChange = (e) => {
    const { name, value } = e.target;
    setQuestionData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArticleChange = (e) => {
    const { name, value } = e.target;
    setArticleData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Validation and submission popup
  const handleSubmit = (e) => {
    e.preventDefault();

    if (postType === 'question') {
      if (!questionData.title.trim() || !questionData.description.trim() || !questionData.tags.trim()) {
        Swal.fire({
          icon: 'error',
          title: 'Validation Error',
          text: 'Please fill in all fields before submitting.',
        });
        return;
      }
    } else {
      if (
        !articleData.title.trim() ||
        !articleData.abstract.trim() ||
        !articleData.articleText.trim() ||
        !articleData.tags.trim()
      ) {
        Swal.fire({
          icon: 'error',
          title: 'Validation Error',
          text: 'Please fill in all fields before submitting.',
        });
        return;
      }
    }

    Swal.fire({
      icon: 'success',
      title: 'Post Sent!',
      text: `Your ${postType} has been successfully validated.`,
    });
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <h2>New Post</h2>
      </div>

      {/* Post Type Selector */}
      <div className="post-type-selector">
        <span className="selector-label">Select Post Type:</span>
        <label className="radio-label">
          <input
            type="radio"
            name="postType"
            value="question"
            checked={postType === 'question'}
            onChange={() => setPostType('question')}
          />
          Question
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="postType"
            value="article"
            checked={postType === 'article'}
            onChange={() => setPostType('article')}
          />
          Article
        </label>
      </div>

      <div className="post-content-area">
        <p className="section-title">What do you want to ask or share</p>

        <form onSubmit={handleSubmit}>
          {/* Conditional Rendering: Question Section */}
          {postType === 'question' && (
            <div className="form-fields">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Start your question with how, what, why, etc."
                  value={questionData.title}
                  onChange={handleQuestionChange}
                />
              </div>

              <div className="form-group">
                <label>Describe your problem</label>
                <textarea
                  rows="6"
                  name="description"
                  placeholder="Describe your problem"
                  value={questionData.description}
                  onChange={handleQuestionChange}
                />
              </div>

              <div className="form-group">
                <label>Tags</label>
                <input
                  type="text"
                  name="tags"
                  placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
                  value={questionData.tags}
                  onChange={handleQuestionChange}
                />
              </div>
            </div>
          )}

          {/* Conditional Rendering: Article Section */}
          {postType === 'article' && (
            <div className="form-fields">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter a descriptive title"
                  value={articleData.title}
                  onChange={handleArticleChange}
                />
              </div>

              <div className="form-group">
                <label>Abstract</label>
                <textarea
                  rows="3"
                  name="abstract"
                  placeholder="Enter a 1-paragraph abstract"
                  value={articleData.abstract}
                  onChange={handleArticleChange}
                />
              </div>

              <div className="form-group">
                <label>Article Text</label>
                <textarea
                  rows="6"
                  name="articleText"
                  placeholder="Enter a 1-paragraph abstract"
                  value={articleData.articleText}
                  onChange={handleArticleChange}
                />
              </div>

              <div className="form-group">
                <label>Tags</label>
                <input
                  type="text"
                  name="tags"
                  placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
                  value={articleData.tags}
                  onChange={handleArticleChange}
                />
              </div>
            </div>
          )}

          <div className="button-row">
            <button type="submit" className="post-btn">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}