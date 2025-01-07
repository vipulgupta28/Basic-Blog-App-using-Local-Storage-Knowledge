
  <button onclick="view()">View Blogs</button>
  <button onclick="Write()">Write Blog</button>

  <div class="read" id="read">
    <h1>Your Blogs</h1>
  </div>

  <div class="wr" id="wr">
    <input type="text" placeholder="Topic" id="topic"></input>
    <input type="text" placeholder="Write Content" id="content"></input>
    <button onclick="publish()">Publish</button>
  </div>

  <script>
    const r = document.getElementById('read');
    const wr = document.getElementById('wr');
    const topic = document.getElementById('topic');
    const content = document.getElementById('content');

    
    function loadBlogs() {
      const blogs = JSON.parse(localStorage.getItem('blogs')) || []; 
      r.innerHTML = '<h1>Your Blogs</h1>'; 

      blogs.forEach(blog => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${blog.topic}</h3><p>${blog.content}</p>`;
        r.appendChild(div);
      });
    }
  
    function saveBlog(blog) {
      const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
      blogs.push(blog);
      localStorage.setItem('blogs', JSON.stringify(blogs));
    }
  
    function view() {
      r.classList.add('active');
      wr.classList.remove('active');
      loadBlogs(); 
    }
  
    function Write() {
      wr.classList.add('active');
      r.classList.remove('active');
    }
  
    function publish() {
      if (topic.value && content.value) {
        const newBlog = { topic: topic.value, content: content.value };
        
        saveBlog(newBlog);
  
        topic.value = '';
        content.value = '';
        alert('Blog published successfully!');
        view(); 
      } else {
        alert('Please fill in both topic and content.');
      }
    }
  

    window.onload = loadBlogs;
